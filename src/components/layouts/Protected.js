import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const Protected = ({ userData, children }) => {
  const history = useHistory()

  if (!userData.accessToken) {
    history.push('/sign-in')
  }

  return children
}

Protected.propTypes = {
  userData: PropTypes.object,
}

export default Protected
