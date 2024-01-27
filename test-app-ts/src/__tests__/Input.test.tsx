import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Input} from 'typetailui'; // Adjust the import path as needed

describe('<Input />', () => {
  // test('renders input and label', () => {
  //   render(<Input label="Test Label" type="text" value="" />);
  //   expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  //   expect(screen.getByRole('textbox')).toBeInTheDocument();
  // });

  test('calls onChangeText on user input', () => {
    const mockOnChange = jest.fn();
    render(<Input onChangeText={mockOnChange} type="text" value="hello" />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(mockOnChange).toHaveBeenCalledWith('Hello');
  });

  test('handles paste event correctly', () => {
    const mockOnChange = jest.fn();
    render(<Input value="Test" enablePaste={true} onChangeText={mockOnChange} type="text"/>);
    const input = screen.getByRole('textbox');
    fireEvent.paste(input, { clipboardData: { getData: () => ' Paste' } });
    expect(mockOnChange).toHaveBeenCalledWith('Test Paste');
  });

  test('calls handleEnterKey on Enter key press', () => {
    const mockOnEnter = jest.fn();
    render(<Input handleEnterKey={mockOnEnter} type="text" value="" />);
    const input = screen.getByRole('textbox');
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });
    expect(mockOnEnter).toHaveBeenCalled();
  });
});
