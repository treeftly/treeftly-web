import { Progress } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'zxcv... Remove this comment to see the full error message
import zxcvbn from 'zxcvbn';

const PasswordStrength = ({ value }: any) => {
  let { score } = zxcvbn(value);
  let color = 'red';
  score += 1;

  switch (score) {
    case 1:
      color = 'red';
      break;
    case 2:
      color = 'orange';
      break;
    case 3:
      color = 'yellow';
      break;
    case 4:
      color = 'teal';
      break;
    case 5:
      color = 'green';
      break;
    default:
      color = 'red';
  }

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Progress value={(score / 5) * 100} size="xs" colorScheme={color} />;
};

PasswordStrength.propTypes = {
  value: PropTypes.string.isRequired,
};

export default PasswordStrength;
