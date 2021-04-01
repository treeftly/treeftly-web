import { useState, useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import logger from './logger'
import useToast from './toast'

const defaultAuth = { user: {}, accessToken: '' }
const noop = () => {}

export const localStorageKey = 'auth'

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

export const useMutate = ({
  mutateFn,
  key,
  successMsg = '',
  successDescription = '',
  failureMsg = '',
  failureDescription = '',
  onSuccess = noop,
  onError = noop,
  onSettled = noop,
}) => {
  if (!mutateFn) {
    throw new Error('Missing argument')
  }

  const queryClient = useQueryClient()
  const toast = useToast()
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
  } = useMutation(mutateFn, {
    onSuccess: (response) => {
      onSuccess(response)
      if (key) {
        queryClient.invalidateQueries(key)
      }

      if (successMsg !== '') {
        toast({
          title: successMsg,
          description: successDescription,
          status: 'success',
        })
      }
    },
    onError: (err) => {
      onError(err)

      if (failureMsg !== '') {
        toast({
          title: failureMsg,
          description: failureDescription,
          status: 'error',
        })
      }

      logger.error('Error on mutation', JSON.stringify(err))
    },
    onSettled: () => {
      onSettled()
    },
  })

  return {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
  }
}
