import { Link, Text } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link as RLink } from 'react-router-dom';

const LinkText = ({ href, children, ...rest }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Text color="primary.600" {...rest}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
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
