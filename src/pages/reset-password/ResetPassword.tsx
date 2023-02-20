import { Button, Text } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useParams } from 'react-router-dom';

// @ts-expect-error TS(6142): Module '../../components/FormComponent' was resolv... Remove this comment to see the full error message
import FormComponent from '../../components/FormComponent';
// @ts-expect-error TS(6142): Module '../../components/layouts/MainLayout' was r... Remove this comment to see the full error message
import MainLayout from '../../components/layouts/MainLayout';
// @ts-expect-error TS(6142): Module '../../components/layouts/OnboardingLayout'... Remove this comment to see the full error message
import OnboardingLayout from '../../components/layouts/OnboardingLayout';
// @ts-expect-error TS(6142): Module '../../components/LinkText' was resolved to... Remove this comment to see the full error message
import LinkText from '../../components/LinkText';
// @ts-expect-error TS(6142): Module '../../components/password/PasswordInput' w... Remove this comment to see the full error message
import PasswordInput from '../../components/password/PasswordInput';
import { resetPassword } from '../../services/auth';
import { useMutate } from '../../utils/hooks';

const ResetPassword = () => {
  const { token } = useParams();
  const { register, handleSubmit, errors, setError } = useForm();
  const { isLoading, mutate, isSuccess } = useMutate({
    key: 'forgot-password',
    mutateFn: resetPassword,
    successMsg: 'You have successfully reset your password',
    failureMsg: 'Failed to reset password',
    onError: (err: any) => {
      if (err?.response?.status === 400) {
        setError('password', { message: err.response.data.message });
      }
    },
  });

  const onSubmit = (data: any) => {
    if (data.password !== data.confirmPassword) {
      return setError('confirmPassword', {
        message: 'Password does not match',
      });
    }

    return mutate(token, data);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MainLayout bg="gradientBg">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Helmet>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
        because no i... Remove this comment to see the full error message
        <title>Reset Password</title>
      </Helmet>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <OnboardingLayout headerText="Reset Password">
        {isSuccess && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Text textAlign="center">
              You have successfully reset your password.
            </Text>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Text textAlign="center">
              {' '}
              Please // @ts-expect-error TS(17004): Cannot use JSX unless the
              '--jsx' flag is provided... Remove this comment to see the full
              error message
              <LinkText display="inline-block" href="/sign-in">
                sign-in
              </LinkText>{' '}
              using your new password.
            </Text>
          </>
        )}
        {!isSuccess && (
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <form onSubmit={handleSubmit(onSubmit)}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <FormComponent id="password" label="New Password" errors={errors}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <PasswordInput name="password" ref={register} />
            </FormComponent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <FormComponent
              id="confirmPassword"
              label="Confirm New Password"
              errors={errors}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <PasswordInput name="confirmPassword" ref={register} />
            </FormComponent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Button
              mt="4"
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

export default ResetPassword;
