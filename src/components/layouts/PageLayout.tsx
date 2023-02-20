// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error TS(6142): Module './Container' was resolved to '/Users/matth... Remove this comment to see the full error message
import Container from './Container';

const PageLayout = ({ children }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container
      border="1px"
      borderColor="gray.200"
      borderRadius="base"
      boxShadow="md"
      w="100%"
      px="6"
      py="4"
      bg="white"
      height="maxContent"
      mb="3"
    >
      {children}
    </Container>
  );
};

export default PageLayout;
