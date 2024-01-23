import Container from "./Container";
import Text from "./Text";
import "./templates.css";
interface InputProps {
  type: string;
  value: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  enableCopy?: boolean;
  enablePaste?: boolean;
  label?: string;
  onChangeText?: (value: string) => void;
  handleEnterKey?: () => void;
}
export default function Input({
  className = "",
  type = "text",
  placeholder = "",
  value = "",
  disabled = false,
  enableCopy = true,
  enablePaste = true,
  label = "",
  onChangeText = (val: string) => {},
  handleEnterKey = () => {}
}: InputProps): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChangeText(event.target.value);
  };
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (enablePaste) {
      const text = value + event.clipboardData.getData("text/plain");
      onChangeText(text);
    }
  };
  const handleCopy = (event: React.ClipboardEvent<HTMLInputElement>) => {
    if (!enableCopy) {
      event.preventDefault();
    }
  };
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleEnterKey();
    }
  };
  const showLabel = label !== "";
  return (
    <Container className="flex flex-row justify-center items-center">
      {showLabel &&
        <Text className="mr-2">
          {label}
        </Text>}

      <input
        type={type}
        placeholder={placeholder}
        className={`Input ${className}`}
        value={value}
        onChange={handleChange}
        onCopy={handleCopy}
        onPaste={handlePaste}
        disabled={disabled}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
}
