import { Heading } from '@chakra-ui/react'
import React from 'react'
import Container from '../../components/layouts/Container'

const Categories = () => {
  return (
    <>
      <Container py={3}>
        <Heading size='lg'>Categories</Heading>
      </Container>
      <Container
        border='1px'
        borderColor='gray.200'
        borderRadius='base'
        boxShadow='md'
        w='100%'
        px='6'
        py='4'
        bg='white'
        height='maxContent'
        mb={3}
      >
        Categories
      </Container>
    </>
  )
}

export default Categories
