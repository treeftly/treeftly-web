// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// @ts-expect-error TS(6142): Module './components/layouts/Protected' was resolv... Remove this comment to see the full error message
import Protected from './components/layouts/Protected';

// @ts-expect-error TS(6142): Module './pages/sign-in/SignIn' was resolved to '/... Remove this comment to see the full error message
const SignIn = lazy(() => import('./pages/sign-in/SignIn'));
// @ts-expect-error TS(6142): Module './pages/sign-up/SignUp' was resolved to '/... Remove this comment to see the full error message
const SignUp = lazy(() => import('./pages/sign-up/SignUp'));
// @ts-expect-error TS(6142): Module './pages/verify/Verify' was resolved to '/U... Remove this comment to see the full error message
const Verify = lazy(() => import('./pages/verify/Verify'));
const ResendVerification = lazy(
  // @ts-expect-error TS(6142): Module './pages/verify/ResendVerification' was res... Remove this comment to see the full error message
  () => import('./pages/verify/ResendVerification'),
);
const ForgotPassword = lazy(
  // @ts-expect-error TS(6142): Module './pages/forgot-password/ForgotPassword' wa... Remove this comment to see the full error message
  () => import('./pages/forgot-password/ForgotPassword'),
);
const ResetPassword = lazy(
  // @ts-expect-error TS(6142): Module './pages/reset-password/ResetPassword' was ... Remove this comment to see the full error message
  () => import('./pages/reset-password/ResetPassword'),
);
// @ts-expect-error TS(6142): Module './pages/dashboard/Dashboard' was resolved ... Remove this comment to see the full error message
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
// @ts-expect-error TS(6142): Module './pages/transactions/Transactions' was res... Remove this comment to see the full error message
const Transactions = lazy(() => import('./pages/transactions/Transactions'));
// @ts-expect-error TS(6142): Module './pages/categories/Categories' was resolve... Remove this comment to see the full error message
const Categories = lazy(() => import('./pages/categories/Categories'));
// @ts-expect-error TS(6142): Module './pages/profile/Profile' was resolved to '... Remove this comment to see the full error message
const Profile = lazy(() => import('./pages/profile/Profile'));

const queryClient = new QueryClient();

const App = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <BrowserRouter>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Suspense fallback={null}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <HelmetProvider>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <QueryClientProvider client={queryClient}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Switch>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Route exact path="/sign-in">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <SignIn />
              </Route>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Route exact path="/sign-up">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <SignUp />
              </Route>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Route exact path="/forgot-password">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <ForgotPassword />
              </Route>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Route exact path="/verify-email/:token">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <Verify />
              </Route>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Route exact path="/reset-password/:token">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <ResetPassword />
              </Route>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Route exact path="/resend-verification">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <ResendVerification />
              </Route>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Protected>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <Route exact path="/">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the
                  '--jsx' flag is provided... Remove this comment to see the
                  full error message
                  <Redirect to="/transactions" />
                </Route>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <Route exact path="/dashboard">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the
                  '--jsx' flag is provided... Remove this comment to see the
                  full error message
                  <Dashboard />
                </Route>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <Route path="/transactions">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the
                  '--jsx' flag is provided... Remove this comment to see the
                  full error message
                  <Transactions />
                </Route>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <Route exact path="/categories">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the
                  '--jsx' flag is provided... Remove this comment to see the
                  full error message
                  <Categories />
                </Route>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <Route exact path="/profile">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the
                  '--jsx' flag is provided... Remove this comment to see the
                  full error message
                  <Profile />
                </Route>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <Route exact path="/something-something/mahman">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the
                  '--jsx' flag is provided... Remove this comment to see the
                  full error message
                  <Profile />
                </Route>
              </Protected>
            </Switch>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HelmetProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
