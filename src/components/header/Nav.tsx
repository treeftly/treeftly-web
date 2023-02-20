import { Flex, Heading, Link } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link as RLink } from 'react-router-dom';

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
];

const Nav = ({ onClose }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Flex
      as="nav"
      align={{ base: 'flex-start', lg: 'center' }}
      // @ts-expect-error TS(2322): Type '"1"' is not assignable to type 'ResponsiveVa... Remove this comment to see the full error message
      flexGrow="1"
      flexFlow={{ base: 'column', lg: 'row' }}
    >
      {links.map((link) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link
          to={link.url}
          as={RLink}
          key={link.url}
          _hover={{ textDecoration: 'none' }}
          onClick={onClose}
          mr={{ lg: 6 }}
          mb={{ base: 3, lg: 0 }}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Heading size="md" as="h3" fontWeight="normal">
            {link.text}
          </Heading>
        </Link>
      ))}
    </Flex>
  );
};

Nav.propTypes = {
  onClose: PropTypes.func,
};

export default Nav;
