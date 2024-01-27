import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BackgroundImage} from 'typetailui';

describe('<Container />', () => {
  it('renders the background image', () => {
    const testId = 'BackgroundImageId';
    render(<BackgroundImage data-testid={testId} source='https://picsum.photos/200/300'/>);
    const indicator = screen.getByTestId(testId);
    expect(indicator).toBeInTheDocument();
  });
});
