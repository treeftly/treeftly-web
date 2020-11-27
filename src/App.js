import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

const SignIn = lazy(() => import('./pages/sign-in/SignIn'))
const SignUp = lazy(() => import('./pages/sign-up/SignUp'))
const ForgotPassword = lazy(() => import('./pages/forgot-password/ForgotPassword'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <HelmetProvider>
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
          </Switch>
        </HelmetProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
