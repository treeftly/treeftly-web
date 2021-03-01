// import PropTypes from 'prop-types'
import React, { useHistory } from 'react-router-dom'
import { useAuth } from '../../utils/hooks'
import Header from '../header/Header'

const Protected = ({ children }) => {
  const history = useHistory()
  const { authData } = useAuth()

  if (!authData.accessToken) {
    history.push('/sign-in')
  }

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Protected
