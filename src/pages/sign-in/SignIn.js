import React from 'react'
import { Button, Input, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import FormComponent from '../../components/FormComponent'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'
import PasswordInput from '../../components/password/PasswordInput'
import LinkText from '../../components/LinkText'
import { login } from '../../services/auth'

const SignIn = () => {
  const { register, handleSubmit, errors, setError } = useForm()

  const onSubmit = async (data) => {
    try {
      const payload = await login(data)
      console.info('data', payload)
      return null
    } catch (err) {
      if (err?.response?.status === 401) {
        return setError('email', { message: 'Invalid email address or password' })
      }

      console.error(err.response?.data)
      return setError('email', { message: 'Something went wrong with your request ' })
    }
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormComponent mb={4} id='email' label='Email Address' isRequired errors={errors}>
            <Input name='email' placeholder='hello@treeftly.com' autoFocus ref={register} />
          </FormComponent>
          <FormComponent mb={4} id='password' label='Password' isRequired errors={errors}>
            <PasswordInput name='password' ref={register} />
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
          >
            Sign In
          </Button>
        </form>
      </OnboardingLayout>
    </MainLayout>
  )
}

export default SignIn
