import "./templates.css";
interface H4Props {
  children: any;
  className?: string;
  enableCopy?: boolean;
}

export default function H4({
  children,
  className = "",
  enableCopy = true
}: H4Props): JSX.Element {
  const handleCopy = (event: React.ClipboardEvent<HTMLHeadingElement>) => {
    if (!enableCopy) {
      event.preventDefault();
    }
  };
  return (
    <h4 className={`H4 ${className}`} onCopy={handleCopy}>
      {children}
    </h4>
  );
}
