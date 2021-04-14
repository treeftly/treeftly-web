import { Tooltip, IconButton as CIconButton } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'

const IconButton = ({ tooltipProps = {}, label, ariaLabel, ...rest }) => {
  return (
    <Tooltip aria-label={`tooltip for ${ariaLabel} button`} label={label} {...tooltipProps}>
      <CIconButton fontSize='25px' aria-label={ariaLabel} {...rest} data-testid='icon-button' />
    </Tooltip>
  )
}

IconButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tooltipProps: PropTypes.object,
}

export default IconButton
