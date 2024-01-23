import React, { FC, ChangeEvent } from 'react';
import "./templates.css";
import Container from './Container';
import Text from './Text';
interface SelectProps<T> {
  options: { value: T; label: T }[];
  value: T;
  disabled?: boolean;
  label?: string;
  onChange: (value: T) => void;
}

const Select: FC<SelectProps<any>> = ({ options, value, disabled = false, label = "", onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };
  const showLabel = label !== "";
  return (
    <Container className="flex flex-row justify-center items-center">
      {showLabel && <Text className='mr-2'>{label}</Text>}
      <select
        className="Select"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
