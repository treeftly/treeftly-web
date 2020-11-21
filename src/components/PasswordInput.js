import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { InputGroup, Input, InputRightElement, IconButton } from '@chakra-ui/react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const PasswordInput = ({ value, onChange }) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <InputGroup>
      <Input
        type={isShow ? 'text' : 'password'}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
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
}

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default PasswordInput
