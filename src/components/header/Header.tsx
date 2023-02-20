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
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { MdAdd } from 'react-icons/md';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link as RLink } from 'react-router-dom';

// @ts-expect-error TS(2307): Cannot find module '../../assets/logo-only.png' or... Remove this comment to see the full error message
import Logo from '../../assets/logo-only.png';
import { logout } from '../../services/auth';
import { useAuth, useMutate } from '../../utils/hooks';
import Hidden from '../Hidden';
// @ts-expect-error TS(6142): Module '../IconButton' was resolved to '/Users/mat... Remove this comment to see the full error message
import IconButton from '../IconButton';
// @ts-expect-error TS(6142): Module './Nav' was resolved to '/Users/matthew/Pro... Remove this comment to see the full error message
import Nav from './Nav';
// @ts-expect-error TS(6142): Module './SideNav' was resolved to '/Users/matthew... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Flex
      as="header"
      border="1px"
      borderColor="gray.200"
      h="65px"
      px={{ base: '2', md: '10' }}
      bg="white"
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Hidden above="md">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <SideNav />
      </Hidden>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Box flexShrink={1} flexBasis="100px">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Link to="/" as={RLink} _focus={{ boxShadow: 'none' }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Image height="100%" src={Logo} alt="treeftly logo" />
        </Link>
      </Box>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Hidden below="lg">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Nav />
      </Hidden>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Flex alignItems="center" ml="auto">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Hidden below="lg">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <IconButton
            label="Create new expense"
            ariaLabel="create new expense"
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            icon={<MdAdd />}
            onClick={onNewTransaction}
            variant="outline"
            mr="5"
            size="lg"
          />
        </Hidden>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Menu>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <MenuButton>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Avatar name={name} />
          </MenuButton>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <MenuList>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <MenuItem to="/profile" as={RLink}>
              Profile
            </MenuItem>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
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
