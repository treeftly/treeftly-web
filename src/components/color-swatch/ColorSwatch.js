import { Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import ColorIcon from './ColorIcon'

const colors = [
  '#CBD5E0',
  '#1A202C',
  '#E53E3E',
  '#63171B',
  '#FBD38D',
  '#DD6B20',
  '#FAF089',
  '#D69E2E',
  '#9AE6B4',
  '#38A169',
  '#81E6D9',
  '#319795',
  '#90cdf4',
  '#3182ce',
  '#9DECF9',
  '#00B5D8',
  '#D6BCFA',
  '#805AD5',
  '#FBB6CE',
  '#D53F8C',
]

const ColorSwatch = ({ selected, ...rest }) => {
  return (
    <Menu {...rest}>
      <MenuButton as='div'>
        <ColorIcon color={selected} />
      </MenuButton>
      <MenuList p={4} display='grid' gridTemplateColumns='repeat(4, 1fr)'>
        {colors.map((color, idx) => (
          <ColorIcon color={color} key={idx} size='sm' isActive={selected === color} />
        ))}
      </MenuList>
    </Menu>
  )
}

ColorSwatch.propTypes = {
  selected: PropTypes.string.isRequired,
}

export default ColorSwatch