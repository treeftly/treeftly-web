import { Button, Input, Text } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useHistory } from 'react-router-dom';

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
import { login } from '../../services/auth';
import { useAuth, useMutate } from '../../utils/hooks';

const SignIn = () => {
  const history = useHistory();
  const { setAuthData } = useAuth();
  const { register, handleSubmit, errors, setError } = useForm();
  const { mutate, isLoading } = useMutate({
    mutateFn: login,
    onError: (err: any) => {
      if (err?.response?.data?.className === 'not-verified') {
        return setError('email', {
          message: (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Text>
              Account not verified. Please // @ts-expect-error TS(17004): Cannot
              use JSX unless the '--jsx' flag is provided... Remove this comment
              to see the full error message
              <LinkText display="inline-block" href="/resend-verification">
                verify
              </LinkText>{' '}
              your account and try again.
            </Text>
          ),
        });
      }

      if (err?.response?.status === 401) {
        return setError('email', {
          message: 'Invalid email address or password',
        });
      }

      return setError('email', {
        message: 'Something went wrong with your request ',
      });
    },
    onSuccess: ({ accessToken, user }: any) => {
      setAuthData({ accessToken, user });
      history.push('/');
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
        <title>Sign In</title>
      </Helmet>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <OnboardingLayout headerText="Sign In">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Text textAlign="center" mb={4} color="gray.600">
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
          because no i... Remove this comment to see the full error message
          Ready to use Treeftly? <br />
          Sign in with your account otherwise register // @ts-expect-error
          TS(17004): Cannot use JSX unless the '--jsx' flag is provided...
          Remove this comment to see the full error message
          <LinkText href="/sign-up" d="inline-block" as="span">
            here
          </LinkText>
          !
        </Text>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
        because no i... Remove this comment to see the full error message
        <form onSubmit={handleSubmit(mutate)}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
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
              placeholder="hello@treeftly.com"
              autoFocus
              ref={register}
            />
          </FormComponent>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <FormComponent
            id="password"
            label="Password"
            isRequired
            errors={errors}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <PasswordInput name="password" ref={register} />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <LinkText href="/forgot-password">Forgot your password?</LinkText>
          </FormComponent>
          {/* <LinkText mt={2} href='/forgot-password'>
            Forgot password?
          </LinkText> */}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Button
            mt={4}
            isFullWidth
            variant="solid"
            colorScheme="primary"
            textTransform="uppercase"
            type="submit"
            isLoading={isLoading}
          >
            Sign In
          </Button>
          // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
          because no i... Remove this comment to see the full error message
        </form>
      </OnboardingLayout>
    </MainLayout>
  );
};

export default SignIn;
