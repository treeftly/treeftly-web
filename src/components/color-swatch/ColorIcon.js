import React from 'react'
import { MdBrightness1 } from 'react-icons/md'
import PropTypes from 'prop-types'
import IconButton from '../IconButton'

const ColorIcon = ({ color }) => {
  return (
    <IconButton
      label={color}
      ariaLabel={`color picker for ${color}`}
      variant='ghost'
      icon={<MdBrightness1 />}
      color={color}
      isRound
    />
  )
}

ColorIcon.propTypes = {
  color: PropTypes.string.isRequired,
}

export default ColorIcon
