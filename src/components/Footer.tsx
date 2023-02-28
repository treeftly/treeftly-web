import { Box, Grid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import {
  MdAdd,
  MdHome,
  MdPerson,
  MdReceipt,
  MdViewModule,
} from "react-icons/md";

import IconButton from "./IconButton";
import LinkText from "./LinkText";

const Footer = ({ onNewTransaction }: any) => {
  return (
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
      <Box alignItems="center" display="flex" justifyContent="space-around">
        <Box>
          <LinkText href="/">
            <IconButton
              variant="ghost"
              ariaLabel="go to dashboard"
              label="Go to dashboard"
              colorScheme="primary"
              size="lg"
              icon={<MdHome />}
            />
          </LinkText>
        </Box>
        <Box>
          <LinkText href="/transactions">
            <IconButton
              variant="ghost"
              ariaLabel="go to transactions"
              colorScheme="primary"
              size="lg"
              label="Go to transactions"
              icon={<MdReceipt />}
            />
          </LinkText>
        </Box>
      </Box>
      <Box>
        <IconButton
          ariaLabel="create new expense"
          label="Create new expense"
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
      <Box alignItems="center" display="flex" justifyContent="space-around">
        <Box>
          <LinkText href="/categories">
            <IconButton
              variant="ghost"
              colorScheme="primary"
              size="lg"
              ariaLabel="go to categories"
              label="Go to categories"
              icon={<MdViewModule />}
            />
          </LinkText>
        </Box>
        <Box>
          <LinkText href="/profile">
            <IconButton
              variant="ghost"
              colorScheme="primary"
              size="lg"
              ariaLabel="go to profile"
              label="Go to profile"
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
