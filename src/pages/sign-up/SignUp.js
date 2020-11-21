import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FormControl, FormLabel, Input, Text, Link, Box } from '@chakra-ui/react'
import { Link as RLink } from 'react-router-dom'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'
import PasswordInput from '../../components/PasswordInput'
import PasswordStrength from '../../components/PasswordStrength'

const SignUp = () => {
  const [password, setPassword] = useState('')

  return (
    <MainLayout>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <OnboardingLayout>
        <form>
          <FormControl id='firstName' mb={4} isRequired>
            <FormLabel>First Name</FormLabel>
            <Input placeholder='John' autoFocus />
          </FormControl>
          <FormControl id='lastName' mb={4} isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder='Doe' />
          </FormControl>
          <FormControl id='email' mb={4} isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type='email' placeholder='hello@treeftly.com' />
          </FormControl>
          <FormControl id='password' mb={4} isRequired>
            <FormLabel>Password</FormLabel>
            <PasswordInput value={password} onChange={setPassword} />
            <Box mt={1}>
              <PasswordStrength value={password} />
            </Box>
          </FormControl>
          <Text color='brand' mt={2}>
            <Link to='/sign-in' as={RLink}>
              Already a member?
            </Link>
          </Text>
        </form>
      </OnboardingLayout>
    </MainLayout>
  )
}

export default SignUp
