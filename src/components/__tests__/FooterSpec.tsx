// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error TS(6142): Module '../../utils/test-utils' was resolved to '/... Remove this comment to see the full error message
import { fireEvent, render, screen } from '../../utils/test-utils';
// @ts-expect-error TS(6142): Module '../Footer' was resolved to '/Users/matthew... Remove this comment to see the full error message
import Footer from '../Footer';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('#Footer', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the footer', () => {
    // @ts-expect-error TS(2304): Cannot find name 'jest'.
    const onClick = jest.fn();
    // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
    render(<Footer onNewTransaction={onClick} />);

    const footerButton = screen.queryAllByTestId('icon-button');

    fireEvent.click(footerButton[2]);

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
