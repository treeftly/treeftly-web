import React from 'react'
import Container from './Container'

const OnboardingLayout = ({ children }) => {
  return (
    <Container
      border='1px'
      borderColor='gray.200'
      borderRadius='sm'
      boxShadow='md'
      mx='auto'
      my={['16', '40']}
      minW={['100%', '100%', '650px']}
      px='6'
      py='4'
      bg='white'
      height='maxContent'
    >
      {children}
    </Container>
  )
}

export default OnboardingLayout
