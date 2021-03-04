import React, { lazy, Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Protected from './components/layouts/Protected'

const SignIn = lazy(() => import('./pages/sign-in/SignIn'))
const SignUp = lazy(() => import('./pages/sign-up/SignUp'))
const ForgotPassword = lazy(() => import('./pages/forgot-password/ForgotPassword'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const Expenses = lazy(() => import('./pages/expenses/Expenses'))
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
              <Protected>
                <Route exact path='/'>
                  <Dashboard />
                </Route>
                <Route exact path='/expenses'>
                  <Expenses />
                </Route>
                <Route exact path='/categories'>
                  <Categories />
                </Route>
                <Route exact path='/profile'>
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
