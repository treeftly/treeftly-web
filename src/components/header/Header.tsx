import {
  Avatar,
  Box,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Link as RLink } from 'react-router-dom';

import Logo from '../../assets/logo-only.png';
import { logout } from '../../services/auth';
import { useAuth, useMutate } from '../../utils/hooks';
import Hidden from '../Hidden';
import IconButton from '../IconButton';
import Nav from './Nav';
import SideNav from './SideNav';

const Header = ({ onNewTransaction }: any) => {
  const { authData, clearAuth } = useAuth();
  const { mutate } = useMutate({
    mutateFn: logout,
    key: 'auth',
    onSettled: clearAuth,
  });
  const name = `${authData?.user?.firstName} ${authData?.user?.lastName}`;

  return (
    <Flex
      as="header"
      border="1px"
      borderColor="gray.200"
      h="65px"
      px={{ base: '2', md: '10' }}
      bg="white"
    >
      <Hidden above="md">
        <SideNav />
      </Hidden>
      <Box flexShrink={1} flexBasis="100px">
        <Link to="/" as={RLink} _focus={{ boxShadow: 'none' }}>
          <Image height="100%" src={Logo} alt="treeftly logo" />
        </Link>
      </Box>
      <Hidden below="lg">
        <Nav />
      </Hidden>
      <Flex alignItems="center" ml="auto">
        <Hidden below="lg">
          <IconButton
            label="Create new expense"
            ariaLabel="create new expense"
            icon={<MdAdd />}
            onClick={onNewTransaction}
            variant="outline"
            mr="5"
            size="lg"
          />
        </Hidden>
        <Menu>
          <MenuButton>
            <Avatar name={name} />
          </MenuButton>
          <MenuList>
            <MenuItem to="/profile" as={RLink}>
              Profile
            </MenuItem>
            <MenuItem onClick={mutate}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

Header.propTypes = {
  onNewTransaction: PropTypes.func,
};

export default Header;
