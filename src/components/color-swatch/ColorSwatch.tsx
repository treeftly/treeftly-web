import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

import { colors } from '../../utils/constants';
import { noop } from '../../utils/functions';
// @ts-expect-error TS(6142): Module './ColorIcon' was resolved to '/Users/matth... Remove this comment to see the full error message
import ColorIcon from './ColorIcon';

const ColorSwatch = ({ selected = '#CBD5E0', onSelect = noop, ...rest }) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Menu {...rest}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <MenuButton as="div">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <ColorIcon color={selected} />
      </MenuButton>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <MenuList p={4} display="grid" gridTemplateColumns="repeat(4, 1fr)">
        {colors.map((color, idx) => (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <MenuItem key={idx} as="div">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <ColorIcon
              color={color}
              size="sm"
              isActive={selected === color}
              // @ts-expect-error TS(2554): Expected 0 arguments, but got 2.
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
