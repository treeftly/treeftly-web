import { IconButton as CIconButton, Tooltip } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

const IconButton = ({ tooltipProps = {}, label, ariaLabel, ...rest }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Tooltip
      aria-label={`tooltip for ${ariaLabel} button`}
      label={label}
      {...tooltipProps}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <CIconButton
        fontSize="25px"
        aria-label={ariaLabel}
        {...rest}
        data-testid="icon-button"
      />
    </Tooltip>
  );
};

IconButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tooltipProps: PropTypes.object,
};

export default IconButton;
