import React from 'react'
import { useAuth } from '../../utils/hooks'

const Dashboard = () => {
  const { clearAuth } = useAuth()

  return (
    <div>
      Dashboard <button onClick={clearAuth}>Logout</button>
    </div>
  )
}

export default Dashboard
