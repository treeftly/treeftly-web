import { render } from '../../utils/test-utils';
import FormComponent from '../FormComponent';

describe('#FormComponent', () => {
  it('should render the component with the label', () => {
    const { getByText } = render(
      <FormComponent id="name" label="Full Name">
        Some input
      </FormComponent>,
    );

    expect(getByText('Full Name')).toBeInTheDocument();
  });

  it('should render the error message', () => {
    const errorMessage = 'Data is required';
    const { getByText } = render(
      <FormComponent id="name" errors={{ name: { message: errorMessage } }}>
        Some Input component
      </FormComponent>,
    );

    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
