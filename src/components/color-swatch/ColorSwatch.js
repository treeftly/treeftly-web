import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import ColorIcon from './ColorIcon'
import { colors } from '../../utils/constants'

const ColorSwatch = ({ selected = '#CBD5E0', onSelect = () => {}, ...rest }) => {
  return (
    <Menu {...rest}>
      <MenuButton as='div'>
        <ColorIcon color={selected} />
      </MenuButton>
      <MenuList p={4} display='grid' gridTemplateColumns='repeat(4, 1fr)'>
        {colors.map((color, idx) => (
          <MenuItem key={idx} as='div'>
            <ColorIcon
              color={color}
              size='sm'
              isActive={selected === color}
              onClick={(evt) => onSelect(color, evt)}
            />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

ColorSwatch.propTypes = {
  selected: PropTypes.string,
  onSelect: PropTypes.func,
}

export default ColorSwatch
