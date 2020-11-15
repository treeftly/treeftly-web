import React, { useState } from 'react'
import { InputGroup, Input, InputRightElement, IconButton } from '@chakra-ui/react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const PasswordInput = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <InputGroup>
      <Input type={isShow ? 'text' : 'password'} />
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

export default PasswordInput
