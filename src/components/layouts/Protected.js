import { Box, useDisclosure } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import React, { useHistory } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { useAuth, useMutate } from '../../utils/hooks'
import Footer from '../Footer'
import Header from '../header/Header'
import { listCategories, CategoriesContext, key } from '../../services/categories'
import Hidden from '../Hidden'
import TransactionModal from '../transaction-modal/TransactionModal'
import MainLayout from './MainLayout'
import { createTransaction, key as transactionKey } from '../../services/transactions'

const getTitle = (pathname) => {
  if (!pathname) {
    return ''
  }

  const [, location] = pathname.split('/')

  if (!location) {
    return 'Dashboard'
  }

  const title = location
    .split('-')
    .map((str, idx) => {
      if (idx === 0) {
        return `${str[0].toUpperCase()}${str.substring(1)}`
      }

      return str
    })
    .join(' ')

  return title
}
const Protected = ({ children }) => {
  const [height, setHeight] = useState()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { data: categories } = useQuery(key, listCategories)
  const history = useHistory()
  const { authData } = useAuth()
  const title = getTitle(history.location.pathname)

  const { mutate } = useMutate({
    mutateFn: createTransaction,
    key: transactionKey,
    successMsg: 'Successfully created transaction!',
    failureMsg: 'Error creating transaction',
    onSettled: onClose,
  })

  useEffect(() => {
    const onResize = () => {
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  if (!authData.accessToken) {
    history.push('/sign-in')
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header onNewTransaction={onOpen} />
      <Box
        as='main'
        h={{ base: `calc(${height}px - 130px)`, lg: 'calc(100vh - 65px)' }}
        maxH={{ base: `calc(${height}px - 130px)`, lg: 'calc(100vh - 65px)' }}
        overflow='scroll'
      >
        <CategoriesContext.Provider value={categories}>
          <MainLayout minH='100%' bg='gray.100'>
            {children}
          </MainLayout>
          <TransactionModal isOpen={isOpen} onClose={onClose} mutate={mutate} />
        </CategoriesContext.Provider>
      </Box>
      <Hidden above='md'>
        <Footer onNewTransaction={onOpen} />
      </Hidden>
    </>
  )
}

export default Protected
