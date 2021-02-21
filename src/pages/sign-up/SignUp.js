import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Input, Text, Box, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'
import PasswordInput from '../../components/password/PasswordInput'
import PasswordStrength from '../../components/password/PasswordStrength'
import useToast from '../../utils/toast'
import { register as authRegister } from '../../services/auth'
import FormComponent from '../../components/FormComponent'
import LinkText from '../../components/LinkText'
import { errorLog } from '../../utils/logger'

const SignUp = () => {
  const [password, setPassword] = useState('')
  const toast = useToast()
  const { register, handleSubmit, errors, setError } = useForm()
  const { mutate, isLoading, isSuccess } = useMutation(authRegister, {
    onError: (err) => {
      if (err?.response?.status === 400) {
        const { data: resData } = err.response
        switch (resData.message) {
          case 'Validation error':
            setError('email', { message: 'Email address already exists' })
            break
          default:
            errorLog('Signup error 400', JSON.stringify(err))
            setError('firstName', { message: `Signup error: ${resData.message}` })
        }
        return null
      }

      errorLog('Signup error', err.response?.data)
      return setError('firstName', {
        message: `Something went wrong with the request: ${err.response?.data?.message}`,
      })
    },
    onSuccess: () => {
      toast({
        title: 'Account created!',
        description: 'Wohoo! You can now start using Treeftly.',
        status: 'success',
      })
    },
  })

  return (
    <MainLayout bg='gradientBg'>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <OnboardingLayout headerText={`Sign Up ${isSuccess ? 'Success' : ''}`}>
        <Text textAlign='center' mb={4} color='gray.600' whiteSpace='pre-line'>
          {isSuccess ? (
            <>
              Please{' '}
              <LinkText href='/sgin-in' as='span'>
                sign in
              </LinkText>{' '}
              with your new account
            </>
          ) : (
            `Hiya! We need your information so that you,
            and only you can access your data!`
          )}
        </Text>
        {!isSuccess && (
          <form onSubmit={handleSubmit(mutate)}>
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
