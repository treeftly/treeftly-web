import { useState, useEffect } from 'react'
import logger from './logger'

export const localStorageKey = 'auth'
const defaultAuth = { user: {}, accessToken: '' }

export const logout = () => {
  localStorage.removeItem(localStorageKey)
  window.location.href = '/'
}

export const getToken = () => {
  const authStr = localStorage.getItem(localStorageKey)
  let parsedAuth

  try {
    parsedAuth = JSON.parse(authStr)
  } catch (err) {
    logger.error('error parsing auth from localStorage: ', err)
  }

  return parsedAuth ?? defaultAuth
}

export const useAuth = () => {
  const [authData, setAuthData] = useState(getToken)

  useEffect(() => {
    if (authData?.accessToken) {
      const authStr = JSON.stringify(authData)
      localStorage.setItem(localStorageKey, authStr)
    }
  }, [authData])

  const clearAuth = () => {
    setAuthData(defaultAuth)
    logout()
  }

  return {
    authData,
    setAuthData,
    clearAuth,
  }
}
