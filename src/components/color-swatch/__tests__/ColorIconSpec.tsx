import React from 'react';

import { fireEvent, render, screen } from '../../../utils/test-utils';
import ColorIcon from '../ColorIcon';

describe('#ColorIcon', () => {
  it('should render the component', () => {
    const onClick = jest.fn();
    render(<ColorIcon label="red" color="red" onClick={onClick} />);

    const btn = screen.getByTestId('icon-button');

    fireEvent.click(btn);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(btn).toHaveAttribute('aria-label', 'color picker for red');
  });
});
