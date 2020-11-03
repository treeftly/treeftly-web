import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const SignIn = lazy(() => import('./pages/sign-in/SignIn'))
const SignUp = lazy(() => import('./pages/sign-up/SignUp'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
      <Switch>
        <Route exact path='/sign-in'>
          <SignIn />
        </Route>
        <Route exact path='/sign-up'>
          <SignUp />
        </Route>
      </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
