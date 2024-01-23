import Input from "./Input";
import "./templates.css";
import React, { useState } from "react";

interface NumericInputProps {
  className?: string;
  placeholder?: string;
  initial?: string;
  label?: string;
  onChangeNumber?: (value: number) => void;
  handleEnterKey?: () => void;
}

export default function NumericInput({
  className = "",
  initial = "",
  placeholder = "Enter a number",
  label,
  onChangeNumber = (val: number) => {},
  handleEnterKey = () => {}
}: NumericInputProps): JSX.Element {
  const [value, setValue] = useState(initial);

  const handleChangeText = (val: string) => {
    // Check if the current value is a number or empty before setting it
    if (val === "" || /^[0-9\b]+$/.test(val)) {
      setValue(val);
      const numericValue = val === "" ? 0 : Number(val);
      onChangeNumber(numericValue);
    }
  };

  return (
    <Input
      type="text"
      className={`Input ${className}`}
      value={value}
      onChangeText={handleChangeText}
      placeholder={placeholder}
      handleEnterKey={handleEnterKey}
      label={label}
    />
  );
}
