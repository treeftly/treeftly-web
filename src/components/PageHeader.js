import { Heading } from '@chakra-ui/layout'
import React from 'react'
import Container from './layouts/Container'

const PageHeader = ({ children }) => {
  return (
    <Container py='3'>
      <Heading size='lg'>{children}</Heading>
    </Container>
  )
}

export default PageHeader