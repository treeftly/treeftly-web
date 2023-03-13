import React from 'react';

import { render, screen } from '../../utils/test-utils';
import LinkText from '../LinkText';

describe('#LinkText', () => {
  it('should render anchor tag', () => {
    render(<LinkText href="/">Home</LinkText>);

    const anchorComponent = screen.getByTestId('link-component');
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(anchorComponent).toHaveAttribute('href', '/');
  });
});
