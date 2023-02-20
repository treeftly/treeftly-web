// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error TS(6142): Module '../../utils/test-utils' was resolved to '/... Remove this comment to see the full error message
import { render, screen } from '../../utils/test-utils';
// @ts-expect-error TS(6142): Module '../PageHeader' was resolved to '/Users/mat... Remove this comment to see the full error message
import PageHeader from '../PageHeader';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('#PageHeader', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the page header', () => {
    // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
    render(<PageHeader>Header</PageHeader>);

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(screen.getByTestId('page-header')).toBeInTheDocument();
  });
});
