import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router'
import { Text } from '@chakra-ui/layout'
import { useQuery } from 'react-query'
import { Skeleton } from '@chakra-ui/skeleton'
import MainLayout from '../../components/layouts/MainLayout'
import OnboardingLayout from '../../components/layouts/OnboardingLayout'
import { verify, key } from '../../services/verification'
import LinkText from '../../components/LinkText'

const Verify = () => {
  const { token } = useParams()
  const { isLoading, isSuccess, isError } = useQuery(key, () => verify(token))

  let verifyMessage = ''

  if (isLoading) {
    verifyMessage = <Skeleton height='40px' />
  }

  if (isSuccess) {
    verifyMessage = (
      <Text>
        You have successfully verified your account. Please{' '}
        <LinkText href='/sign-in' display='inline-block'>
          sign-in
        </LinkText>{' '}
        to access your account.
      </Text>
    )
  }

  if (isError) {
    verifyMessage = <Text>Error validating your account.</Text>
  }

  return (
    <MainLayout bg='gradientBg'>
      <Helmet>
        <title>Verify Account</title>
      </Helmet>
      <OnboardingLayout headerText='Verify Account'>{verifyMessage}</OnboardingLayout>
    </MainLayout>
  )
}

export default Verify
