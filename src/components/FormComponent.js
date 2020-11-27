import React from 'react'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const FormComponent = ({ label, children, id, errors, ...rest }) => {
  return (
    <FormControl id={id} {...rest} isInvalid={errors?.[id]}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormErrorMessage whiteSpace='pre-line'>{errors?.[id]?.message}</FormErrorMessage>
    </FormControl>
  )
}

FormComponent.propTypes = {
  label: PropTypes.string,
  errors: PropTypes.object,
  id: PropTypes.string.isRequired,
}

export default FormComponent
