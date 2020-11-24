import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  Box,
  Button,
  Heading,
  FormErrorMessage,
} from '@chakra-ui/react'
import { Link as RLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'
import PasswordInput from '../../components/password/PasswordInput'
import PasswordStrength from '../../components/password/PasswordStrength'
import { auth0Signup } from '../../utils/auth0'
import useToast from '../../utils/toast'

const SignUp = () => {
  const [password, setPassword] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, errors, setError } = useForm()
  const toast = useToast()

  const onSubmit = async (data) => {
    try {
      await auth0Signup(data)
      toast({
        title: 'Account created!',
        description: 'Wohoo! Verify your email to start using Treeftly.',
        status: 'success',
      })
      return setIsSuccess(true)
    } catch (err) {
      if (err?.statusCode === 400) {
        switch (err.code) {
          case 'invalid_signup':
            setError('email', { message: 'Email is already in use.' })
            break
          case 'invalid_password':
            setError('password', { message: err.policy })
            break
          default:
            console.error('Signup error', JSON.stringify(err))
            setError('firstName', { message: `Signup error: ${err.name}` })
        }
        return null
      }

      return setError('firstName', {
        message: `Something went wrong with the request: ${err.name}`,
      })
    }
  }

  return (
    <MainLayout bg='gradientBg'>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <OnboardingLayout>
        <Heading as='h1' textAlign='center' mb={2} color='primary.600'>
          Sign Up {isSuccess && ` Success`}
        </Heading>
        <Text textAlign='center' mb={4} color='gray.600' whiteSpace='pre-line'>
          {isSuccess
            ? `We should've sent you a verification link to verify your account!
            Let's verify it and start using Treeftly!`
            : `Hiya! We need your information so that you,
            and only you can access your data!`}
        </Text>
        {!isSuccess && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id='firstName' mb={4} isRequired isInvalid={errors?.firstName}>
              <FormLabel>First Name</FormLabel>
              <Input placeholder='John' autoFocus name='firstName' ref={register} />
              <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id='lastName' mb={4} isRequired isInvalid={errors?.lastName}>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder='Doe' ref={register} name='lastName' />
              <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id='email' mb={4} isRequired isInvalid={errors?.email}>
              <FormLabel>Email Address</FormLabel>
              <Input type='email' placeholder='hello@treeftly.com' name='email' ref={register} />
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id='password' mb={4} isRequired isInvalid={errors?.password}>
              <FormLabel>Password</FormLabel>
              <PasswordInput
                value={password}
                onChange={setPassword}
                name='password'
                ref={register}
              />
              <Box mt={1}>
                <PasswordStrength value={password} />
              </Box>
              <FormErrorMessage whiteSpace='pre-line'>{errors?.password?.message}</FormErrorMessage>
            </FormControl>
            <Text color='primary.600' mt={2}>
              <Link to='/sign-in' as={RLink}>
                Already a member?
              </Link>
            </Text>
            <Button
              mt={4}
              isFullWidth
              variant='solid'
              colorScheme='primary'
              textTransform='uppercase'
              type='submit'
            >
              Sign Up
            </Button>
          </form>
        )}
      </OnboardingLayout>
    </MainLayout>
  )
}

export default SignUp
