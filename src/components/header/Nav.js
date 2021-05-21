import React from 'react'
import { Flex, Link, Heading } from '@chakra-ui/react'
import { Link as RLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const links = [
  {
    url: '/dashboard',
    text: 'Dashboard',
  },
  {
    url: '/transactions',
    text: 'Transactions',
  },
  {
    url: '/categories',
    text: 'Categories',
  },
]

const Nav = ({ onClose }) => {
  return (
    <Flex
      as='nav'
      align={{ base: 'flex-start', lg: 'center' }}
      flexGrow='1'
      flexFlow={{ base: 'column', lg: 'row' }}
    >
      {links.map((link) => (
        <Link
          to={link.url}
          as={RLink}
          key={link.url}
          _hover={{ textDecoration: 'none' }}
          onClick={onClose}
          mr={{ lg: 6 }}
          mb={{ base: 3, lg: 0 }}
        >
          <Heading size='md' as='h3' fontWeight='normal'>
            {link.text}
          </Heading>
        </Link>
      ))}
    </Flex>
  )
}

Nav.propTypes = {
  onClose: PropTypes.func,
}

export default Nav
