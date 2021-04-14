import React from 'react'
import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import theme from '../theme'

const Wrappers = ({ children }) => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>{children}</BrowserRouter>
  </ChakraProvider>
)

const customRender = (ui, options) =>
  render(ui, {
    wrapper: Wrappers,
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render }
