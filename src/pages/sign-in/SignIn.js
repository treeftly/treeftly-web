import React from 'react'
import { Button, Input, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import FormComponent from '../../components/FormComponent'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'
import PasswordInput from '../../components/password/PasswordInput'
import LinkText from '../../components/LinkText'
import { login } from '../../services/auth'
import { useAuth, useMutate } from '../../utils/hooks'

const SignIn = () => {
  const history = useHistory()
  const { setAuthData } = useAuth()
  const { register, handleSubmit, errors, setError } = useForm()
  const { mutate, isLoading } = useMutate({
    mutateFn: login,
    onError: (err) => {
      if (err?.response?.data?.className === 'not-verified') {
        return setError('email', {
          message: (
            <Text>
              Account not verified. Please{' '}
              <LinkText display='inline-block' href='/resend-verification'>
                verify
              </LinkText>{' '}
              your account and try again.
            </Text>
          ),
        })
      }

      if (err?.response?.status === 401) {
        return setError('email', { message: 'Invalid email address or password' })
      }

      return setError('email', { message: 'Something went wrong with your request ' })
    },
    onSuccess: ({ accessToken, user }) => {
      setAuthData({ accessToken, user })
      history.push('/')
    },
  })

  return (
    <MainLayout bg='gradientBg'>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <OnboardingLayout headerText='Sign In'>
        <Text textAlign='center' mb={4} color='gray.600'>
          Ready to use Treeftly? <br />
          Sign in with your account otherwise register{' '}
          <LinkText href='/sign-up' d='inline-block' as='span'>
            here
          </LinkText>
          !
        </Text>
        <form onSubmit={handleSubmit(mutate)}>
          <FormComponent id='email' label='Email Address' isRequired errors={errors}>
            <Input name='email' placeholder='hello@treeftly.com' autoFocus ref={register} />
          </FormComponent>
          <FormComponent id='password' label='Password' isRequired errors={errors}>
            <PasswordInput name='password' ref={register} />
            <LinkText href='/forgot-password'>Forgot your password?</LinkText>
          </FormComponent>
          {/* <LinkText mt={2} href='/forgot-password'>
            Forgot password?
          </LinkText> */}
          <Button
            mt={4}
            isFullWidth
            variant='solid'
            colorScheme='primary'
            textTransform='uppercase'
            type='submit'
            isLoading={isLoading}
          >
            Sign In
          </Button>
        </form>
      </OnboardingLayout>
    </MainLayout>
  )
}

export default SignIn
