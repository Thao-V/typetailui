import Container from "./Container";
import "./templates.css";
interface RadioButtonProps {
  index: number;
  name: string;
  selected: boolean;
  label: string;
  disabled?: boolean;
  enableCopy?: boolean;
  handleSelectionChange: (index: number) => void;
}
export default function RadioButton({
  index,
  name,
  selected,
  label,
  disabled = false,
  enableCopy = true,
  handleSelectionChange
}: RadioButtonProps) {
  const handleCopy = (event: React.ClipboardEvent<HTMLLabelElement>) => {
    if (!enableCopy) {
      event.preventDefault();
    }
  };
  const id = `${name}-${index}`;
  return (
    <Container className="mb-2 flex items-center">
      <input
        id={id}
        type="radio"
        name={name}
        checked={selected}
        className="RadioButton"
        onChange={() => handleSelectionChange(index)}
        disabled={disabled}
      />
      <label htmlFor={id} className="ml-2 md:text-base block" onCopy={handleCopy}>
        {label}
      </label>
    </Container>
  );
}
