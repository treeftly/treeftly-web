import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { InputGroup, Input, InputRightElement, IconButton } from '@chakra-ui/react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const PasswordInput = forwardRef(({ name = 'password', ...rest }, ref) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <InputGroup>
      <Input type={isShow ? 'text' : 'password'} ref={ref} name={name} {...rest} />
      <InputRightElement>
        <IconButton
          icon={isShow ? <MdVisibilityOff /> : <MdVisibility />}
          variant='outline'
          border='none'
          onClick={() => setIsShow(!isShow)}
        />
      </InputRightElement>
    </InputGroup>
  )
})

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PasswordInput
