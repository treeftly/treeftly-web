import { formatCurrency } from '../functions';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('#formatCurrency', () => {
  // @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('formats the currency', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(formatCurrency(25)).toEqual('$25.00');
  });
});
