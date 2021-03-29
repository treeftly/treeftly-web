import React from 'react'
import Container from './Container'

const PageLayout = ({ children }) => {
  return (
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
      mb='3'
    >
      {children}
    </Container>
  )
}

export default PageLayout
