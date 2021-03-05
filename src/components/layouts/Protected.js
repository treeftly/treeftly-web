// import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import React, { useHistory } from 'react-router-dom'
import { useAuth } from '../../utils/hooks'
import Footer from '../Footer'
import Header from '../header/Header'
import Hidden from '../Hidden'

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
  const history = useHistory()
  const { authData } = useAuth()
  const title = getTitle(history.location.pathname)

  if (!authData.accessToken) {
    history.push('/sign-in')
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <Box as='main' h={{ base: 'calc(100vh - 130px)', lg: 'calc(100vh - 65px)' }}>
        {children}
      </Box>
      <Hidden above='md'>
        <Footer />
      </Hidden>
    </>
  )
}

export default Protected
