import { formatCurrency } from '../functions'

describe('#formatCurrency', () => {
  it('formats the currency', () => {
    expect(formatCurrency(25)).toEqual('₱25.00')
  })
})
