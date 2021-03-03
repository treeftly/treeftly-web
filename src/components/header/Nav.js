import React from 'react'
import { Flex, Link, Heading } from '@chakra-ui/react'
import { Link as RLink } from 'react-router-dom'

const links = [
  {
    url: '/',
    text: 'Dashboard',
  },
  {
    url: '/expenses',
    text: 'Expenses',
  },
  {
    url: '/categories',
    text: 'Categories',
  },
]

const Nav = () => {
  return (
    <Flex as='nav' align='center' flexGrow='1'>
      {links.map((link) => (
        <Link to={link.url} as={RLink} key={link.url} _hover={{ textDecoration: 'none' }} mr={6}>
          <Heading size='md' as='h3'>
            {link.text}
          </Heading>
        </Link>
      ))}
    </Flex>
  )
}

export default Nav
