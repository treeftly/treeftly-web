import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const PasswordInput = forwardRef(({ name = "password", ...rest }, ref: any) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <InputGroup>
      <Input
        type={isShow ? "text" : "password"}
        ref={ref}
        name={name}
        {...rest}
      />
      <InputRightElement>
        <IconButton
          icon={isShow ? <MdVisibilityOff /> : <MdVisibility />}
          variant="outline"
          border="none"
          onClick={() => setIsShow(!isShow)}
          aria-label={
            isShow ? "hide password visibility" : "show password visibility"
          }
        />
      </InputRightElement>
    </InputGroup>
  );
});

PasswordInput.displayName = "PasswordInput";
PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PasswordInput;
