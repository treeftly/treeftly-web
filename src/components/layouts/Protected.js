// import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import React, { useHistory } from 'react-router-dom'
import { useAuth } from '../../utils/hooks'
import Footer from '../Footer'
import Header from '../header/Header'
import Hidden from '../Hidden'

const Protected = ({ children }) => {
  const history = useHistory()
  const { authData } = useAuth()

  if (!authData.accessToken) {
    history.push('/sign-in')
  }

  return (
    <>
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
