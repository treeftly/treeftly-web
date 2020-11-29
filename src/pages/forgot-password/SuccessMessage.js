import React from 'react'
import PropTypes from 'prop-types'
import LinkText from '../../components/LinkText'

const SuccessMessage = ({ msg = '' }) => {
  if (msg) {
    return msg
  }

  return (
    <>
      Did you manage to remember your password? <br />
      Return to{' '}
      <LinkText href='/sign-in' d='inline-block' as='span'>
        login
      </LinkText>{' '}
      page.
    </>
  )
}

SuccessMessage.propTypes = {
  msg: PropTypes.string.isRequired,
}

export default SuccessMessage
