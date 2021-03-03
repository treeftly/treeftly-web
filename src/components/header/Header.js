import {
  Avatar,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from '@chakra-ui/react'
import React from 'react'
import { Link as RLink } from 'react-router-dom'
import Logo from '../../assets/logo-only.png'
import { useAuth } from '../../utils/hooks'
import Nav from './Nav'

const Header = () => {
  const { authData, clearAuth } = useAuth()
  const name = `${authData?.user?.firstName} ${authData?.user?.lastName}`

  return (
    <Flex as='header' border='1px' borderColor='gray.200' h='65px' px='10'>
      <Box flexShrink={1} flexBasis='100px'>
        <Link to='/' as={RLink}>
          <Image height='100%' src={Logo} alt='treeftly logo' />
        </Link>
      </Box>
      <Nav />
      <Menu>
        <MenuButton>
          <Avatar name={name} />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={clearAuth}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Header
