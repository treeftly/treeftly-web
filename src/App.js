import React, { lazy, Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Protected from './components/layouts/Protected'

const SignIn = lazy(() => import('./pages/sign-in/SignIn'))
const SignUp = lazy(() => import('./pages/sign-up/SignUp'))
const Verify = lazy(() => import('./pages/verify/Verify'))
const ResendVerification = lazy(() => import('./pages/verify/ResendVerification'))
const ForgotPassword = lazy(() => import('./pages/forgot-password/ForgotPassword'))
const ResetPassword = lazy(() => import('./pages/reset-password/ResetPassword'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const Transactions = lazy(() => import('./pages/transactions/Transactions'))
const Categories = lazy(() => import('./pages/categories/Categories'))
const Profile = lazy(() => import('./pages/profile/Profile'))

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
              <Route exact path='/verify-email/:token'>
                <Verify />
              </Route>
              <Route exact path='/reset-password/:token'>
                <ResetPassword />
              </Route>
              <Route exact path='/resend-verification'>
                <ResendVerification />
              </Route>
              <Protected>
                <Route exact path='/'>
                  <Redirect to='/transactions' />
                </Route>
                <Route exact path='/dashboard'>
                  <Dashboard />
                </Route>
                <Route path='/transactions'>
                  <Transactions />
                </Route>
                <Route exact path='/categories'>
                  <Categories />
                </Route>
                <Route exact path='/profile'>
                  <Profile />
                </Route>
                <Route exact path='/something-something/mahman'>
                  <Profile />
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
