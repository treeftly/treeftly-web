// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error TS(6142): Module '../../../utils/test-utils' was resolved to... Remove this comment to see the full error message
import { fireEvent, render, screen } from '../../../utils/test-utils';
// @ts-expect-error TS(6142): Module '../ColorIcon' was resolved to '/Users/matt... Remove this comment to see the full error message
import ColorIcon from '../ColorIcon';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('#ColorIcon', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the component', () => {
    // @ts-expect-error TS(2304): Cannot find name 'jest'.
    const onClick = jest.fn();
    // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
    render(<ColorIcon label="red" color="red" onClick={onClick} />);

    const btn = screen.getByTestId('icon-button');

    fireEvent.click(btn);

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onClick).toHaveBeenCalledTimes(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(btn).toHaveAttribute('aria-label', 'color picker for red');
  });
});
