import React from 'react'
import { Button } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import FormComponent from '../../components/FormComponent'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'
import PasswordInput from '../../components/password/PasswordInput'
// import LinkText from '../../components/LinkText'

const ForgotPassword = () => {
  const { register, errors } = useForm()

  return (
    <MainLayout bg='gradientBg'>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <OnboardingLayout headerText='Password Reset'>
        <form>
          <FormComponent mb={4} id='password' label='Password' isRequired errors={errors}>
            <PasswordInput name='password' ref={register} />
          </FormComponent>
          <Button
            mt={4}
            isFullWidth
            variant='solid'
            colorScheme='primary'
            textTransform='uppercase'
            type='submit'
          >
            Reset Password
          </Button>
        </form>
      </OnboardingLayout>
    </MainLayout>
  )
}

export default ForgotPassword
