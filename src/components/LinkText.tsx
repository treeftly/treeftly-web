import { Link, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import { Link as RLink } from "react-router-dom";

const LinkText = ({ href, children, ...rest }: any) => {
  return (
    <Text color="primary.600" {...rest}>
      <Link to={href} as={RLink} data-testid="link-component">
        {children}
      </Link>
    </Text>
  );
};

LinkText.propTypes = {
  href: PropTypes.string.isRequired,
};

export default LinkText;
