// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { MdBrightness1 } from 'react-icons/md';

// @ts-expect-error TS(6142): Module '../IconButton' was resolved to '/Users/mat... Remove this comment to see the full error message
import IconButton from '../IconButton';

const ColorIcon = ({ label, color, ...rest }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <IconButton
      label={label || color}
      ariaLabel={`color picker for ${color}`}
      variant="ghost"
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      icon={<MdBrightness1 />}
      color={color}
      {...rest}
      isRound
    />
  );
};

ColorIcon.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default ColorIcon;
