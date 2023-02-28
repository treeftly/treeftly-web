import { IconButton as CIconButton, Tooltip } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const IconButton = ({ tooltipProps = {}, label, ariaLabel, ...rest }: any) => {
  return (
    <Tooltip
      aria-label={`tooltip for ${ariaLabel} button`}
      label={label}
      {...tooltipProps}
    >
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
