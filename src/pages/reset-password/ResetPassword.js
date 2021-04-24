import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'

const ResetPassword = () => {
  const { token } = useParams()
  console.log('token', token)

  return (
    <MainLayout bg='gradientBg'>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <OnboardingLayout headerText='Reset Password'>Something</OnboardingLayout>
    </MainLayout>
  )
}

export default ResetPassword
