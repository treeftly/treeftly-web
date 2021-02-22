import React, { lazy, Suspense, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Protected from './components/layouts/Protected'

const SignIn = lazy(() => import('./pages/sign-in/SignIn'))
const SignUp = lazy(() => import('./pages/sign-up/SignUp'))
const ForgotPassword = lazy(() => import('./pages/forgot-password/ForgotPassword'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))

const queryClient = new QueryClient()

const App = () => {
  const [userData, setUserData] = useState({ accessToken: '', user: {} })

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <Switch>
              <Route exact path='/sign-in'>
                <SignIn onLogin={setUserData} />
              </Route>
              <Route exact path='/sign-up'>
                <SignUp />
              </Route>
              <Route exact path='/forgot-password'>
                <ForgotPassword />
              </Route>
              <Protected userData={userData}>
                <Route exact path='/'>
                  <Dashboard />
                </Route>
              </Protected>
            </Switch>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HelmetProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
