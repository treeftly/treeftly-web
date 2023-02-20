import { Button, Input, Text } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

// @ts-expect-error TS(6142): Module '../../components/FormComponent' was resolv... Remove this comment to see the full error message
import FormComponent from '../../components/FormComponent';
// @ts-expect-error TS(6142): Module '../../components/layouts/MainLayout' was r... Remove this comment to see the full error message
import MainLayout from '../../components/layouts/MainLayout';
// @ts-expect-error TS(6142): Module '../../components/layouts/OnboardingLayout'... Remove this comment to see the full error message
import OnboardingLayout from '../../components/layouts/OnboardingLayout';
import { forgotPassword } from '../../services/auth';
import { useMutate } from '../../utils/hooks';
// @ts-expect-error TS(6142): Module './SuccessMessage' was resolved to '/Users/... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MainLayout bg="gradientBg">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Helmet>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
        because no i... Remove this comment to see the full error message
        <title>Forgot Password</title>
      </Helmet>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <OnboardingLayout headerText="Password Reset">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Text textAlign="center" mb={4} color="gray.600" whiteSpace="pre-line">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <SuccessMessage msg={successMsg} />
        </Text>
        {!successMsg && (
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <form onSubmit={handleSubmit(onSubmit)}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <FormComponent
              mb={4}
              id="email"
              label="Email Address"
              isRequired
              errors={errors}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Input
                name="email"
                placeholder="hello@treeftly.com"
                autoFocus
                ref={register}
              />
            </FormComponent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
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
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
            because no i... Remove this comment to see the full error message
          </form>
        )}
      </OnboardingLayout>
    </MainLayout>
  );
};

export default ForgotPassword;
