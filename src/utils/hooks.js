import { useState, useEffect } from 'react'
import logger from './logger'

const localStorageKey = 'auth'
const defaultAuth = { user: {}, accessToken: '' }

export const useAuth = () => {
  const [authData, setAuthData] = useState(() => {
    const authStr = localStorage.getItem(localStorageKey)
    let parsedAuth

    try {
      parsedAuth = JSON.parse(authStr)
    } catch (err) {
      logger.error('error parsing auth from localStorage: ', err)
    }

    return parsedAuth ?? defaultAuth
  })

  useEffect(() => {
    if (authData?.accessToken) {
      const authStr = JSON.stringify(authData)
      localStorage.setItem(localStorageKey, authStr)
    }
  }, [authData])

  const clearAuth = () => {
    localStorage.removeItem(localStorageKey)
    setAuthData(defaultAuth)
    window.location.href = '/'
  }

  return {
    authData,
    setAuthData,
    clearAuth,
  }
}
