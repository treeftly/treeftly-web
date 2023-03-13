import { Box } from '@chakra-ui/react';
import React from 'react';

const Container = ({ children, ...rest }: any) => {
  return (
    <Box gridColumn={2} {...rest}>
      {children}
    </Box>
  );
};

export default Container;
