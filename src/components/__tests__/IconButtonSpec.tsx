// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { MdAdd } from 'react-icons/md';

// @ts-expect-error TS(6142): Module '../../utils/test-utils' was resolved to '/... Remove this comment to see the full error message
import { fireEvent, render, screen } from '../../utils/test-utils';
// @ts-expect-error TS(6142): Module '../IconButton' was resolved to '/Users/mat... Remove this comment to see the full error message
import IconButton from '../IconButton';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('#IconButton', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render a button with the passed icon along with the tooltip', () => {
    // @ts-expect-error TS(2304): Cannot find name 'jest'.
    const onClick = jest.fn();

    // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
    render(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <IconButton
        label="I am a button"
        ariaLabel="icon button"
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        icon={<MdAdd data-testid="add icon" />}
        onClick={onClick}
      />,
    );

    const btn = screen.getByTestId('icon-button');

    fireEvent.click(btn);

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onClick).toHaveBeenCalledTimes(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(screen.getByTestId('add icon')).toBeInTheDocument();
  });
});
