import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const FormComponent = ({ label, children, id, errors, ...rest }) => {
  return (
    <FormControl id={id} {...rest} isInvalid={errors?.[id]} mb="4">
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      <FormErrorMessage whiteSpace="pre-line">
        {errors?.[id]?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

FormComponent.propTypes = {
  label: PropTypes.string,
  errors: PropTypes.object,
  id: PropTypes.string.isRequired,
};

export default FormComponent;
