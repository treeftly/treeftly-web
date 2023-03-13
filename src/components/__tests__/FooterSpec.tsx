import { fireEvent, render, screen } from '../../utils/test-utils';
import Footer from '../Footer';

describe('#Footer', () => {
  it('should render the footer', () => {
    const onClick = jest.fn();
    render(<Footer onNewTransaction={onClick} />);

    const footerButton = screen.queryAllByTestId('icon-button');

    fireEvent.click(footerButton[2]);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
