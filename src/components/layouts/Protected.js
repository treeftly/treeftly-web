import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import { Route, useHistory } from 'react-router-dom'

const Dashboard = lazy(() => import('../../pages/dashboard/Dashboard'))

const Protected = ({ userData }) => {
  const history = useHistory()

  if (!userData.accessToken) {
    history.push('/sign-in')
  }

  return (
    <>
      <Route path='/' exact>
        <Dashboard />
      </Route>
      <Route path='/sample' exact>
        <div>Sample page</div>
      </Route>
    </>
  )
}

Protected.propTypes = {
  userData: PropTypes.object,
}

export default Protected
