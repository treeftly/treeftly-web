import { Box, Grid } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import {
  MdAdd,
  MdHome,
  MdPerson,
  MdReceipt,
  MdViewModule,
} from 'react-icons/md';

// @ts-expect-error TS(6142): Module './IconButton' was resolved to '/Users/matt... Remove this comment to see the full error message
import IconButton from './IconButton';
// @ts-expect-error TS(6142): Module './LinkText' was resolved to '/Users/matthe... Remove this comment to see the full error message
import LinkText from './LinkText';

const Footer = ({ onNewTransaction }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Grid
      templateColumns="1fr 65px 1fr"
      gap={2}
      as="footer"
      borderTop="1px"
      borderColor="gray.200"
      h="65px"
      pos="relative"
      bg="white"
    >
      {/* Left part of the footer */}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Box alignItems="center" display="flex" justifyContent="space-around">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Box>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <LinkText href="/">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <IconButton
              variant="ghost"
              ariaLabel="go to dashboard"
              label="Go to dashboard"
              colorScheme="primary"
              size="lg"
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              icon={<MdHome />}
            />
          </LinkText>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Box>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <LinkText href="/transactions">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <IconButton
              variant="ghost"
              ariaLabel="go to transactions"
              colorScheme="primary"
              size="lg"
              label="Go to transactions"
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              icon={<MdReceipt />}
            />
          </LinkText>
        </Box>
      </Box>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <IconButton
          ariaLabel="create new expense"
          label="Create new expense"
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          icon={<MdAdd />}
          isRound
          pos="absolute"
          right="50%"
          h="65px"
          w="65px"
          transform="translate(50%, -15%)"
          onClick={onNewTransaction}
          colorScheme="primary"
          size="lg"
        />
      </Box>
      {/* Right part of the footer */}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Box alignItems="center" display="flex" justifyContent="space-around">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Box>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <LinkText href="/categories">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <IconButton
              variant="ghost"
              colorScheme="primary"
              size="lg"
              ariaLabel="go to categories"
              label="Go to categories"
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              icon={<MdViewModule />}
            />
          </LinkText>
        </Box>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Box>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <LinkText href="/profile">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <IconButton
              variant="ghost"
              colorScheme="primary"
              size="lg"
              ariaLabel="go to profile"
              label="Go to profile"
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              icon={<MdPerson />}
            />
          </LinkText>
        </Box>
      </Box>
    </Grid>
  );
};

Footer.propTypes = {
  onNewTransaction: PropTypes.func,
};

export default Footer;
