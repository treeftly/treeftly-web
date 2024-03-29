import React from 'react'
import { Link as RLink } from 'react-router-dom'
import { Text, Link } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const LinkText = ({ href, children, ...rest }) => {
  return (
    <Text color='primary.600' {...rest}>
      <Link to={href} as={RLink} data-testid='link-component'>
        {children}
      </Link>
    </Text>
  )
}

LinkText.propTypes = {
  href: PropTypes.string.isRequired,
}

export default LinkText
