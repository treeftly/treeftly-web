// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error TS(6142): Module '../../utils/test-utils' was resolved to '/... Remove this comment to see the full error message
import { render, screen } from '../../utils/test-utils';
// @ts-expect-error TS(6142): Module '../FormComponent' was resolved to '/Users/... Remove this comment to see the full error message
import FormComponent from '../FormComponent';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('#FormComponent', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the component with the label', () => {
    // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
    render(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormComponent id="name" label="Full Name">
        Some input
      </FormComponent>,
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(screen.getByText('Full Name')).toBeInTheDocument();
  });

  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the error message', () => {
    const errorMessage = 'Data is required';
    // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
    render(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormComponent id="name" errors={{ name: { message: errorMessage } }}>
        Some Input component
      </FormComponent>,
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
