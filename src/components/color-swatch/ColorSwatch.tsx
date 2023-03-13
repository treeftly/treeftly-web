import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../utils/constants';
import { noop } from '../../utils/functions';
import ColorIcon from './ColorIcon';

const ColorSwatch = ({ selected = '#CBD5E0', onSelect = noop, ...rest }) => {
  return (
    <Menu {...rest}>
      <MenuButton as="div">
        <ColorIcon color={selected} />
      </MenuButton>
      <MenuList p={4} display="grid" gridTemplateColumns="repeat(4, 1fr)">
        {colors.map((color, idx) => (
          <MenuItem key={idx} as="div">
            <ColorIcon
              color={color}
              size="sm"
              isActive={selected === color}
              onClick={(evt: any) => onSelect(color, evt)}
            />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

ColorSwatch.propTypes = {
  selected: PropTypes.string,
  onSelect: PropTypes.func,
};

export default ColorSwatch;
