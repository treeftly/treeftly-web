import React, { lazy, Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

const SignIn = lazy(() => import('./pages/sign-in/SignIn'))
const SignUp = lazy(() => import('./pages/sign-up/SignUp'))
const ForgotPassword = lazy(() => import('./pages/forgot-password/ForgotPassword'))

const queryClient = new QueryClient()

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <Switch>
              <Route exact path='/sign-in'>
                <SignIn />
              </Route>
              <Route exact path='/sign-up'>
                <SignUp />
              </Route>
              <Route exact path='/forgot-password'>
                <ForgotPassword />
              </Route>
              <Redirect to='/sign-in' />
            </Switch>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HelmetProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
