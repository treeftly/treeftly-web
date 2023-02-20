import { Heading, Image, Link } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link as RLink } from 'react-router-dom';

// @ts-expect-error TS(2307): Cannot find module '../../assets/logo-with-text.pn... Remove this comment to see the full error message
import LogoWithText from '../../assets/logo-with-text.png';
// @ts-expect-error TS(6142): Module './Container' was resolved to '/Users/matth... Remove this comment to see the full error message
import Container from './Container';

const OnboardingLayout = ({ children, headerText }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Container height={['80px', '120px']} mt={['8', '16']} mb="4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Link to="/" as={RLink}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Image height="100%" mx="auto" src={LogoWithText} />
        </Link>
      </Container>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Container
        border="1px"
        borderColor="gray.200"
        borderRadius="base"
        boxShadow="md"
        mx="auto"
        mb={['16', '20']}
        minW={['100%', '100%', '650px']}
        px="6"
        py="4"
        bg="white"
        height="maxContent"
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Heading
          as="h1"
          textAlign="center"
          mb={2}
          color="primary.600"
          fontFamily="montserrat"
          textTransform="uppercase"
          fontWeight="300"
        >
          {headerText}
        </Heading>
        {children}
      </Container>
    </>
  );
};

OnboardingLayout.propTypes = {
  headerText: PropTypes.string,
};

export default OnboardingLayout;
