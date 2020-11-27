import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Input, Text, Box, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'
import PasswordInput from '../../components/password/PasswordInput'
import PasswordStrength from '../../components/password/PasswordStrength'
import { auth0Signup } from '../../utils/auth0'
import useToast from '../../utils/toast'
import FormComponent from '../../components/FormComponent'
import LinkText from '../../components/LinkText'

const SignUp = () => {
  const [password, setPassword] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, errors, setError } = useForm()
  const toast = useToast()

  const onSubmit = async (data) => {
    setIsLoading(true)
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
            const message = err?.policy || err.description
            setError('password', { message })
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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <MainLayout bg='gradientBg'>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <OnboardingLayout headerText={`Sign Up ${isSuccess ? 'Success' : ''}`}>
        <Text textAlign='center' mb={4} color='gray.600' whiteSpace='pre-line'>
          {isSuccess
            ? `We should've sent you a verification link to verify your account!
            Let's verify it and start using Treeftly!`
            : `Hiya! We need your information so that you,
            and only you can access your data!`}
        </Text>
        {!isSuccess && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormComponent id='firstName' mb={4} isRequired errors={errors} label='First Name'>
              <Input placeholder='John' autoFocus name='firstName' ref={register} />
            </FormComponent>
            <FormComponent id='lastName' mb={4} isRequired errors={errors} label='Last Name'>
              <Input placeholder='Doe' ref={register} name='lastName' />
            </FormComponent>
            <FormComponent id='email' mb={4} isRequired errors={errors} label='Email Address'>
              <Input type='email' placeholder='hello@treeftly.com' name='email' ref={register} />
            </FormComponent>
            <FormComponent id='password' mb={4} isRequired errors={errors} label='Password'>
              <PasswordInput
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                name='password'
                ref={register}
              />
              <Box mt={1}>
                <PasswordStrength value={password} />
              </Box>
            </FormComponent>
            <LinkText mt={2} href='/sign-in'>
              Already a member?
            </LinkText>
            <Button
              mt={4}
              isFullWidth
              variant='solid'
              colorScheme='primary'
              textTransform='uppercase'
              type='submit'
              isLoading={isLoading}
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
