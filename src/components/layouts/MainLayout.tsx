import { Grid } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

const MainLayout = ({ children, ...rest }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Grid
      templateColumns="1fr min(90ch, 98%) 1fr"
      templateRows="min-content"
      minH="fullVH"
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default MainLayout;
