import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { BrowserRouter } from 'react-router-dom';

import theme from '../theme';

const Wrappers = ({ children }: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <ChakraProvider theme={theme}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <BrowserRouter>{children}</BrowserRouter>
  </ChakraProvider>
);

const customRender = (ui: any, options: any) =>
  render(ui, {
    wrapper: Wrappers,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
