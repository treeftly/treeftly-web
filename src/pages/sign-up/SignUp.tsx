import { Box, Button, Input, Text } from '@chakra-ui/react';
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
// @ts-expect-error TS(6142): Module '../../components/LinkText' was resolved to... Remove this comment to see the full error message
import LinkText from '../../components/LinkText';
// @ts-expect-error TS(6142): Module '../../components/password/PasswordInput' w... Remove this comment to see the full error message
import PasswordInput from '../../components/password/PasswordInput';
// @ts-expect-error TS(6142): Module '../../components/password/PasswordStrength... Remove this comment to see the full error message
import PasswordStrength from '../../components/password/PasswordStrength';
import { register as authRegister } from '../../services/auth';
import { useMutate } from '../../utils/hooks';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const { register, handleSubmit, errors, setError } = useForm();
  const { mutate, isLoading, isSuccess } = useMutate({
    mutateFn: authRegister,
    successMsg: 'Account created!',
    successDescription: 'Wohoo! Verify your account to start using Treeftly.',
    onError: (err: any) => {
      if (err?.response?.status === 400) {
        const { data: resData } = err.response;
        switch (resData.message) {
          case 'Validation error':
            setError('email', { message: 'Email address already exists' });
            break;
          default:
            setError('firstName', {
              message: `Signup error: ${resData.message}`,
            });
        }
        return null;
      }

      return setError('firstName', {
        message: `Something went wrong with the request: ${err.response?.data?.message}`,
      });
    },
  });

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MainLayout bg="gradientBg">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Helmet>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
        because no i... Remove this comment to see the full error message
        <title>Sign Up</title>
      </Helmet>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <OnboardingLayout headerText={`Sign Up ${isSuccess ? 'Success' : ''}`}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Text textAlign="center" mb={4} color="gray.600" whiteSpace="pre-line">
          {isSuccess ? (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
              We have sent you a verification email. Please verify your account
              before // @ts-expect-error TS(17004): Cannot use JSX unless the
              '--jsx' flag is provided... Remove this comment to see the full
              error message
              <LinkText href="/sgin-in" as="span">
                signing-in
              </LinkText>{' '}
            </>
          ) : (
            `Hiya! We need your information so that you,
            and only you can access your data!`
          )}
        </Text>
        {!isSuccess && (
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          <form onSubmit={handleSubmit(mutate)}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <FormComponent
              id="firstName"
              isRequired
              errors={errors}
              label="First Name"
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Input
                placeholder="John"
                autoFocus
                name="firstName"
                ref={register}
              />
            </FormComponent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <FormComponent
              id="lastName"
              isRequired
              errors={errors}
              label="Last Name"
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Input placeholder="Doe" ref={register} name="lastName" />
            </FormComponent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <FormComponent
              id="email"
              isRequired
              errors={errors}
              label="Email Address"
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Input
                type="email"
                placeholder="hello@treeftly.com"
                name="email"
                ref={register}
              />
            </FormComponent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <FormComponent
              id="password"
              isRequired
              errors={errors}
              label="Password"
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <PasswordInput
                value={password}
                onChange={(evt: any) => setPassword(evt.target.value)}
                name="password"
                ref={register}
              />
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Box mt={1}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <PasswordStrength value={password} />
              </Box>
            </FormComponent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <LinkText mt={2} href="/sign-in">
              Already a member?
            </LinkText>
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
              Sign Up
            </Button>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
            because no i... Remove this comment to see the full error message
          </form>
        )}
      </OnboardingLayout>
    </MainLayout>
  );
};

export default SignUp;
