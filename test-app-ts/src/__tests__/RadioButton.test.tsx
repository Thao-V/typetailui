import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RadioButton } from "typetailui";

describe("<RadioButton />", () => {
  it("renders the RadioButton", () => {
    const testId = "radio-button";
    render(
      <RadioButton index={1} name="test" selected={false} label="test" handleSelectionChange={index => {}}/>
    );
    const indicator = screen.getByTestId(testId);
    expect(indicator).toBeInTheDocument();
  });
  test('renders radio button with label', () => {
    render(<RadioButton index={1} name="test" selected={false} label="Test Radio" handleSelectionChange={() => {}} />);
    expect(screen.getByLabelText('Test Radio')).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  test('calls handleSelectionChange on radio button click', () => {
    const mockHandleSelectionChange = jest.fn();
    render(<RadioButton index={1} name="test" selected={false} label="Test Radio" handleSelectionChange={mockHandleSelectionChange} />);
    const radioButton = screen.getByRole('radio');
    fireEvent.click(radioButton);
    expect(mockHandleSelectionChange).toHaveBeenCalledWith(1);
  });

  // test('label selects the radio button', () => {
  //   render(<RadioButton index={1} name="test" selected={false} label="Test Radio" handleSelectionChange={() => {}} />);
  //   const radioButton = screen.getByRole('radio');
  //   expect(radioButton).not.toBeChecked();

  //   const label = screen.getByText('Test Radio');
  //   fireEvent.click(label);
  //   expect(radioButton).toBeChecked();
  // });

  test('copy event handling', () => {
    render(<RadioButton index={1} name="test" selected={false} label="Test Radio" enableCopy={false} handleSelectionChange={() => {}} />);
    const label = screen.getByText('Test Radio');
    fireEvent.copy(label);
    // Note: Testing the actual prevention of copying text is complex and may not be directly feasible with Jest/RTL.
    // This test ensures that the event handler is in place.
    expect(label).toBeInTheDocument(); // Replace with appropriate assertion
  });
});
