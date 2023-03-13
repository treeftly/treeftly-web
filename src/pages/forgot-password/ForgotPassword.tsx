import { Button, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

import FormComponent from '../../components/FormComponent';
import MainLayout from '../../components/layouts/MainLayout';
import OnboardingLayout from '../../components/layouts/OnboardingLayout';
import { forgotPassword } from '../../services/auth';
import { useMutate } from '../../utils/hooks';
import SuccessMessage from './SuccessMessage';

const ForgotPassword = () => {
  const [successMsg, setSuccessMsg] = useState('');
  const { register, errors, handleSubmit } = useForm();
  const { mutate, isLoading } = useMutate({
    mutateFn: forgotPassword,
    key: 'forgot-password',
    successMsg: 'Successfully requested for password reset token',
    failureMsg: 'Failed to request for password reset token',
    onSuccess: () => {
      setSuccessMsg('Please check your email for reset password token');
    },
  });

  const onSubmit = async (data: any) => {
    mutate(data);
  };

  return (
    <MainLayout bg="gradientBg">
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <OnboardingLayout headerText="Password Reset">
        <Text textAlign="center" mb={4} color="gray.600" whiteSpace="pre-line">
          <SuccessMessage msg={successMsg} />
        </Text>
        {!successMsg && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormComponent
              mb={4}
              id="email"
              label="Email Address"
              isRequired
              errors={errors}
            >
              <Input
                name="email"
                placeholder="hello@treeftly.com"
                autoFocus
                ref={register}
              />
            </FormComponent>
            <Button
              mt={4}
              isFullWidth
              variant="solid"
              colorScheme="primary"
              textTransform="uppercase"
              type="submit"
              isLoading={isLoading}
            >
              Reset Password
            </Button>
          </form>
        )}
      </OnboardingLayout>
    </MainLayout>
  );
};

export default ForgotPassword;
