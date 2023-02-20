// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error TS(6142): Module '../../components/LinkText' was resolved to... Remove this comment to see the full error message
import LinkText from '../../components/LinkText';

const SuccessMessage = ({ msg = '' }) => {
  if (msg) {
    return msg;
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
      because no i... Remove this comment to see the full error message Did you
      manage to remember your password? <br />
      Return to // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
      flag is provided... Remove this comment to see the full error message
      <LinkText href="/sign-in" d="inline-block" as="span">
        login
      </LinkText>{' '}
      page.
    </>
  );
};

SuccessMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default SuccessMessage;
