// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

import { colors } from '../../../utils/constants';
// @ts-expect-error TS(6142): Module '../../../utils/test-utils' was resolved to... Remove this comment to see the full error message
import { render, screen } from '../../../utils/test-utils';
// @ts-expect-error TS(6142): Module '../ColorSwatch' was resolved to '/Users/ma... Remove this comment to see the full error message
import ColorSwatch from '../ColorSwatch';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('#ColorSwatch', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the menu component with the color icons', () => {
    // @ts-expect-error TS(2304): Cannot find name 'jest'.
    const onSelect = jest.fn();
    // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
    render(<ColorSwatch onSelect={onSelect} />);

    // Need to add + 1 since the menu selector is also an icon-button
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(screen.queryAllByTestId('icon-button').length).toEqual(
      colors.length + 1,
    );
  });
});
