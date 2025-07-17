import "./templates.css";
import { JSX } from "react";
interface TextProps {
  className?: string;
  children?: any;
  enableCopy?: boolean;
}

export default function Text({
  children = "",
  className = "",
  enableCopy = true
}: TextProps): JSX.Element {
  const handleCopy = (event: React.ClipboardEvent<HTMLParagraphElement>) => {
    if (!enableCopy) {
      event.preventDefault();
    }
  };
  return (
    <p
      className={`Text ${className}`}
      onCopy={handleCopy}
    >
      {children}
    </p>
  );
}
