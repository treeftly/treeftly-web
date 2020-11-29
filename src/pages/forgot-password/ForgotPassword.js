import React, { useState } from 'react'
import { Button, Input, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import FormComponent from '../../components/FormComponent'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'
import LinkText from '../../components/LinkText'
import { auth0ForgotPassword } from '../../utils/auth0'

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)

    try {
      const res = await auth0ForgotPassword({ email: data.email })
      setSuccessMsg(res)
    } catch (err) {
      console.error('err', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <MainLayout bg='gradientBg'>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <OnboardingLayout headerText='Password Reset'>
        <Text textAlign='center' mb={4} color='gray.600' whiteSpace='pre-line'>
          {successMsg ||
            `Did you manage to remember your password?
          Return to ${(
            <LinkText href='/sign-in' d='inline-block' as='span'>
              login
            </LinkText>
          )} page.`}
        </Text>
        {!successMsg && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormComponent mb={4} id='email' label='Email Address' isRequired errors={errors}>
              <Input name='email' placeholder='hello@treeftly.com' autoFocus ref={register} />
            </FormComponent>
            <Button
              mt={4}
              isFullWidth
              variant='solid'
              colorScheme='primary'
              textTransform='uppercase'
              type='submit'
              isLoading={isLoading}
            >
              Reset Password
            </Button>
          </form>
        )}
      </OnboardingLayout>
    </MainLayout>
  )
}

export default ForgotPassword
