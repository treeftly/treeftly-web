import { Button } from '@chakra-ui/button'
import { Text } from '@chakra-ui/layout'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import FormComponent from '../../components/FormComponent'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'
import LinkText from '../../components/LinkText'
import PasswordInput from '../../components/password/PasswordInput'
import { resetPassword } from '../../services/auth'
import { useMutate } from '../../utils/hooks'

const ResetPassword = () => {
  const { token } = useParams()
  const { register, handleSubmit, errors, setError } = useForm()
  const { isLoading, mutate, isSuccess } = useMutate({
    key: 'forgot-password',
    mutateFn: resetPassword,
    successMsg: 'You have successfully reset your password',
    failureMsg: 'Failed to reset password',
    onError: (err) => {
      if (err?.response?.status === 400) {
        setError('password', { message: err.response.data.message })
      }
    },
  })

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      return setError('confirmPassword', { message: 'Password does not match' })
    }

    return mutate(token, data)
  }

  return (
    <MainLayout bg='gradientBg'>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <OnboardingLayout headerText='Reset Password'>
        {isSuccess && (
          <>
            <Text textAlign='center'>You have successfully reset your password.</Text>
            <Text textAlign='center'>
              {' '}
              Please{' '}
              <LinkText display='inline-block' href='/sign-in'>
                sign-in
              </LinkText>{' '}
              using your new password.
            </Text>
          </>
        )}
        {!isSuccess && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormComponent id='password' label='New Password' errors={errors}>
              <PasswordInput name='password' ref={register} />
            </FormComponent>
            <FormComponent id='confirmPassword' label='Confirm New Password' errors={errors}>
              <PasswordInput name='confirmPassword' ref={register} />
            </FormComponent>
            <Button
              mt='4'
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

export default ResetPassword
