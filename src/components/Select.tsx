import { theme } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import RSelect from 'react-select';

const padding = '6px';

const controlStyle = (defaultStyle: any) => ({
  ...defaultStyle,
  borderColor: theme.colors.gray['200'],
});
const inputStyle = (defaultStyle: any) => ({
  ...defaultStyle,
  padding,
});
const singleValueStyle = (defaultStyle: any) => ({
  ...defaultStyle,
  padding,
});
const placeholderStyle = (defaultStyle: any) => ({
  ...defaultStyle,
  padding,
});

const Select = React.forwardRef(({ styles = {}, ...rest }, ref: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

Select.displayName = 'Select';
Select.propTypes = {
  styles: PropTypes.object,
};

export default Select;
