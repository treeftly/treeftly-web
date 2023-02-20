// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error TS(6142): Module '../../utils/test-utils' was resolved to '/... Remove this comment to see the full error message
import { render, screen } from '../../utils/test-utils';
// @ts-expect-error TS(6142): Module '../LinkText' was resolved to '/Users/matth... Remove this comment to see the full error message
import LinkText from '../LinkText';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('#LinkText', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render anchor tag', () => {
    // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
    render(<LinkText href="/">Home</LinkText>);

    const anchorComponent = screen.getByTestId('link-component');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(screen.getByText('Home')).toBeInTheDocument();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(anchorComponent).toHaveAttribute('href', '/');
  });
});
