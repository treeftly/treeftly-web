import React from 'react'
import { Progress } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import zxcvbn from 'zxcvbn'

const PasswordStrength = ({ value }) => {
  let { score } = zxcvbn(value)
  let color = 'red'
  score += 1

  switch (score) {
    case 1:
      color = 'red'
      break
    case 2:
      color = 'orange'
      break
    case 3:
      color = 'yellow'
      break
    case 4:
      color = 'teal'
      break
    case 5:
      color = 'green'
      break
    default:
      color = 'red'
  }

  return <Progress value={(score / 5) * 100} size='xs' colorScheme={color} />
}

PasswordStrength.propTypes = {
  value: PropTypes.string.isRequired,
}

export default PasswordStrength
