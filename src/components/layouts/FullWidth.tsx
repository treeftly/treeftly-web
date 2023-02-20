import { Box } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

const FullWidth = ({ children, ...rest }: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box width="100%" gridColumn="1/4" {...rest}>
      {children}
    </Box>
  );
};

export default FullWidth;
