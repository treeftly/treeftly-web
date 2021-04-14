import React from 'react'
import { render, screen, fireEvent } from '../../utils/test-utils'
import Footer from '../Footer'

describe('#Footer', () => {
  it('should render the footer', () => {
    const onClick = jest.fn()
    render(<Footer onNewTransaction={onClick} />)

    const footerButton = screen.getByTestId('icon-button')

    fireEvent.click(footerButton)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
