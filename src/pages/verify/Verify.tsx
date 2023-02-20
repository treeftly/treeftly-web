import { Skeleton, Text } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from 'react-query';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useParams } from 'react-router-dom';

// @ts-expect-error TS(6142): Module '../../components/layouts/MainLayout' was r... Remove this comment to see the full error message
import MainLayout from '../../components/layouts/MainLayout';
// @ts-expect-error TS(6142): Module '../../components/layouts/OnboardingLayout'... Remove this comment to see the full error message
import OnboardingLayout from '../../components/layouts/OnboardingLayout';
// @ts-expect-error TS(6142): Module '../../components/LinkText' was resolved to... Remove this comment to see the full error message
import LinkText from '../../components/LinkText';
import { key, verify } from '../../services/verification';

const Verify = () => {
  const { token } = useParams();
  const { isLoading, isSuccess, isError } = useQuery(key, () => verify(token));

  let verifyMessage = '';

  if (isLoading) {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    verifyMessage = <Skeleton height="40px" />;
  }

  if (isSuccess) {
    verifyMessage = (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Text>
        You have successfully verified your account. Please // @ts-expect-error
        TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
        this comment to see the full error message
        <LinkText href="/sign-in" display="inline-block">
          sign-in
        </LinkText>{' '}
        to access your account.
      </Text>
    );
  }

  if (isError) {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    verifyMessage = <Text>Error validating your account.</Text>;
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MainLayout bg="gradientBg">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Helmet>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
        because no i... Remove this comment to see the full error message
        <title>Verify Account</title>
      </Helmet>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <OnboardingLayout headerText="Verify Account">
        {verifyMessage}
      </OnboardingLayout>
    </MainLayout>
  );
};

export default Verify;
