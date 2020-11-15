import React from 'react'
import { Box } from '@chakra-ui/react'

const Container = ({ children, ...rest }) => {
  return (
    <Box gridColumn={2} {...rest}>
      {children}
    </Box>
  )
}

export default Container
