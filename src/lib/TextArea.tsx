import "./templates.css";
interface TextAreaProps {
  value: string;
  rows: number;
  onChangeText?: (value: string) => void;
  className?: string;
  placeholder?: string;
}
export default function TextArea({
  className = "",
  value = "",
  onChangeText = (val: string) => {},
  placeholder = "",
  ...rest
}: TextAreaProps): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    onChangeText(event.target.value);
  };

  return (
    <textarea
      placeholder={placeholder}
      className={`TextArea ${className}`}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
}
