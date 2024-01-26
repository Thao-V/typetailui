import Container from "./Container";
import "./templates.css";
interface CheckBoxButtonProps {
  index: number;
  prefix: string;
  selected: boolean;
  label: string;
  disabled?: boolean;
  enableCopy?: boolean;
  handleSelectionChange: (index: number) => void;
}
export default function CheckBoxButton({
  index,
  prefix,
  selected,
  label,
  disabled = false,
  enableCopy = true,
  handleSelectionChange
}: CheckBoxButtonProps) {
  const handleCopy = (event: React.ClipboardEvent<HTMLLabelElement>) => {
    if (!enableCopy) {
      event.preventDefault();
    }
  };
  const id = `${prefix}-${index}`;
  const name = `${prefix}-${index}`;
  return (
    <Container className="mb-2 flex items-center">
      <input
        id={id}
        type="checkbox"
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