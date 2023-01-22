import { Heading } from '@chakra-ui/react'
import React from 'react'
import Container from './layouts/Container'

const PageHeader = ({ children }) => {
  return (
    <Container py='3'>
      <Heading size='lg' data-testid='page-header'>
        {children}
      </Heading>
    </Container>
  )
}

export default PageHeader
