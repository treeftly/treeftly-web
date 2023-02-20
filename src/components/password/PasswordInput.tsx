import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { forwardRef, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const PasswordInput = forwardRef(({ name = 'password', ...rest }, ref: any) => {
  const [isShow, setIsShow] = useState(false);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <InputGroup>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Input
        type={isShow ? 'text' : 'password'}
        ref={ref}
        name={name}
        {...rest}
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <InputRightElement>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <IconButton
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          icon={isShow ? <MdVisibilityOff /> : <MdVisibility />}
          variant="outline"
          border="none"
          onClick={() => setIsShow(!isShow)}
          aria-label={
            isShow ? 'hide password visibility' : 'show password visibility'
          }
        />
      </InputRightElement>
    </InputGroup>
  );
});

PasswordInput.displayName = 'PasswordInput';
PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PasswordInput;
