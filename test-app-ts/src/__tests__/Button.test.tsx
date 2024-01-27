import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "typetailui";

describe("<Button />", () => {
  it("renders the Button", () => {
    const testId = "buttonId";
    render(<Button data-testid={testId} title="test" />);
    const indicator = screen.getByTestId(testId);
    expect(indicator).toBeInTheDocument();
  });
  test('renders button with title', () => {
    render(<Button title="Test Button" />);
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });

  test('applies additional class names', () => {
    render(<Button title="Test Button" className="extra-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('Button');
    expect(button).toHaveClass('extra-class');
  });

  test('calls onClick when button is clicked', () => {
    const mockOnClick = jest.fn();
    render(<Button title="Test Button" onClick={mockOnClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
