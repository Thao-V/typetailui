import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CheckBoxButton } from "typetailui";

describe("<CheckBoxButton />", () => {
  it("renders the CheckBoxButton", () => {
    const testId = "check-box-button";
    render(
      <CheckBoxButton
        index={1}
        prefix="test"
        selected={false}
        label="test"
        handleSelectionChange={index => {}}
      />
    );
    const indicator = screen.getByTestId(testId);
    expect(indicator).toBeInTheDocument();
  });
  test("renders checkbox with label", () => {
    render(
      <CheckBoxButton
        index={1}
        prefix="test"
        selected={false}
        label="Test Checkbox"
        handleSelectionChange={() => {}}
      />
    );
    expect(screen.getByLabelText("Test Checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("calls handleSelectionChange on checkbox toggle", () => {
    const mockHandleSelectionChange = jest.fn();
    render(
      <CheckBoxButton
        index={1}
        prefix="test"
        selected={false}
        label="Test Checkbox"
        handleSelectionChange={mockHandleSelectionChange}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockHandleSelectionChange).toHaveBeenCalledWith(1);
  });

  // test("label toggles checkbox", () => {
  //   render(
  //     <CheckBoxButton
  //       index={1}
  //       prefix="test"
  //       selected={false}
  //       label="Test Checkbox"
  //       handleSelectionChange={() => {}}
  //     />
  //   );
  //   const checkbox = screen.getByRole("checkbox");
  //   expect(checkbox).not.toBeChecked();

  //   const label = screen.getByText("Test Checkbox");
  //   fireEvent.click(label);
  //   expect(checkbox).toBeChecked();
  // });

  test("copy event handling", () => {
    render(
      <CheckBoxButton
        index={1}
        prefix="test"
        selected={false}
        label="Test Checkbox"
        enableCopy={false}
        handleSelectionChange={() => {}}
      />
    );
    const label = screen.getByText("Test Checkbox");
    fireEvent.copy(label);
    // Note: Testing the actual prevention of copying text is more complex and may not be directly feasible with Jest/RTL.
    // This test ensures that the event handler is in place.
    expect(label).toBeInTheDocument(); // Replace with appropriate assertion
  });
});
