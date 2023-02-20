import { theme } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import RSelect from "react-select";

const padding = "6px";

const controlStyle = (defaultStyle) => ({
  ...defaultStyle,
  borderColor: theme.colors.gray["200"],
});
const inputStyle = (defaultStyle) => ({ ...defaultStyle, padding });
const singleValueStyle = (defaultStyle) => ({
  ...defaultStyle,
  padding,
});
const placeholderStyle = (defaultStyle) => ({ ...defaultStyle, padding });

const Select = React.forwardRef(({ styles = {}, ...rest }, ref) => {
  return (
    <RSelect
      {...rest}
      styles={{
        control: controlStyle,
        input: inputStyle,
        singleValue: singleValueStyle,
        placeholder: placeholderStyle,
        ...styles,
      }}
      ref={ref}
    />
  );
});

Select.displayName = "Select";
Select.propTypes = {
  styles: PropTypes.object,
};

export default Select;