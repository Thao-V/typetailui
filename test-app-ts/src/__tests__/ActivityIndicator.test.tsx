import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {ActivityIndicator} from 'typetailui';

describe('<ActivityIndicator />', () => {
  it('renders the activity indicator', () => {
    const testId = 'activity-indicator';
    render(<ActivityIndicator/>);
    const indicator = screen.getByTestId(testId);
    expect(indicator).toBeInTheDocument();
  });
});
