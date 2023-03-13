import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { DeepMap, FieldErrors, FieldValues } from 'react-hook-form';

interface FormComponentProps extends FormControlProps {
  label: string;
  id: string;
  errors?: DeepMap<FieldValues, FieldErrors>;
  children: ReactNode;
}

const FormComponent = ({
  label,
  children,
  id,
  errors,
  ...rest
}: FormComponentProps) => {
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

export default FormComponent;
