import React from 'react';
import { MdAdd } from 'react-icons/md';

import { fireEvent, render, screen } from '../../utils/test-utils';
import IconButton from '../IconButton';

describe('#IconButton', () => {
  it('should render a button with the passed icon along with the tooltip', () => {
    const onClick = jest.fn();

    render(
      <IconButton
        label="I am a button"
        ariaLabel="icon button"
        icon={<MdAdd data-testid="add icon" />}
        onClick={onClick}
      />,
    );

    const btn = screen.getByTestId('icon-button');

    fireEvent.click(btn);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('add icon')).toBeInTheDocument();
  });
});
