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
    <Flex as='nav' align='center'>
      {links.map((link) => (
        <Link to={link.url} as={RLink} key={link.url}>
          <Heading size='md' as='h3'>
            {link.text}
          </Heading>
        </Link>
      ))}
    </Flex>
  )
}

export default Nav
