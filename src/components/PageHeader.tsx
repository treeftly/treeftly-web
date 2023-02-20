import { Heading } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error TS(6142): Module './layouts/Container' was resolved to '/Use... Remove this comment to see the full error message
import Container from './layouts/Container';

const PageHeader = ({ children }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container py="3">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Heading size="lg" data-testid="page-header">
        {children}
      </Heading>
    </Container>
  );
};

export default PageHeader;
