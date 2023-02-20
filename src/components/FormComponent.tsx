import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

const FormComponent = ({ label, children, id, errors, ...rest }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FormControl id={id} {...rest} isInvalid={errors?.[id]} mb="4">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
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
