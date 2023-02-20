import { Button, Input, Text } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

// @ts-expect-error TS(6142): Module '../../components/FormComponent' was resolv... Remove this comment to see the full error message
import FormComponent from '../../components/FormComponent';
// @ts-expect-error TS(6142): Module '../../components/layouts/MainLayout' was r... Remove this comment to see the full error message
import MainLayout from '../../components/layouts/MainLayout';
// @ts-expect-error TS(6142): Module '../../components/layouts/OnboardingLayout'... Remove this comment to see the full error message
import OnboardingLayout from '../../components/layouts/OnboardingLayout';
// @ts-expect-error TS(6142): Module '../../components/LinkText' was resolved to... Remove this comment to see the full error message
import LinkText from '../../components/LinkText';
import { key, resendVerification } from '../../services/verification';
import { useMutate } from '../../utils/hooks';

const successMsg = 'We have sent your verification token to your email.';

const ResendVerification = () => {
  const { register, handleSubmit, errors, setError } = useForm();
  const { mutate, isLoading, isSuccess } = useMutate({
    key,
    mutateFn: resendVerification,
    successMsg,
    failureMsg: 'Failed to resend verification token',
    onError: (err: any) => {
      if (err?.response?.status === 404) {
        return setError('email', { message: 'Email address not found.' });
      }

      if (err?.response?.status === 400) {
        return setError('email', { message: err.response?.data?.message });
      }

      return setError('email', {
        message: 'Something went wrong with the request.',
      });
    },
  });

  const onSubmit = (data: any) => {
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
        <title>Resend Verification</title>
      </Helmet>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <OnboardingLayout headerText="Resend Verification">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Text textAlign="center" mb={6} color="gray.600">
          {!isSuccess
            ? 'Please input your email address to resend your verification code.'
            : successMsg}
        </Text>
        {isSuccess && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Text textAlign="center" mb={6}>
            After verification, // @ts-expect-error TS(17004): Cannot use JSX
            unless the '--jsx' flag is provided... Remove this comment to see
            the full error message
            <LinkText href="/sign-in" display="inline-block">
              sign-in
            </LinkText>{' '}
            with your account
          </Text>
        )}
        {!isSuccess && (
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <form onSubmit={handleSubmit(onSubmit)}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <FormComponent
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
                type="email"
                placeholder="hello@treeftly.com"
                autoFocus
                ref={register}
              />
            </FormComponent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Button
              mb={4}
              isFullWidth
              variant="solid"
              colorScheme="primary"
              textTransform="uppercase"
              type="submit"
              isLoading={isLoading}
            >
              Submit
            </Button>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
            because no i... Remove this comment to see the full error message
          </form>
        )}
      </OnboardingLayout>
    </MainLayout>
  );
};

export default ResendVerification;
