import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Container} from 'typetailui';

describe('<Container />', () => {
  it('renders the container', () => {
    const testId = 'container';
    render(<Container data-testid={testId}/>);
    const indicator = screen.getByTestId(testId);
    expect(indicator).toBeInTheDocument();
  });
});
