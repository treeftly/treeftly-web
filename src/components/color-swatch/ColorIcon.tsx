import PropTypes from "prop-types";
import React from "react";
import { MdBrightness1 } from "react-icons/md";

import IconButton from "../IconButton";

const ColorIcon = ({ label, color, ...rest }: any) => {
  return (
    <IconButton
      label={label || color}
      ariaLabel={`color picker for ${color}`}
      variant="ghost"
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
