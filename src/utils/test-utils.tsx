import { ChakraProvider } from '@chakra-ui/react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import theme from '../theme';

const Wrappers = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>{children}</BrowserRouter>
  </ChakraProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => ({
  user: userEvent.setup(),
  ...render(ui, { wrapper: Wrappers, ...options }),
});

export * from '@testing-library/react';
export { customRender as render };
