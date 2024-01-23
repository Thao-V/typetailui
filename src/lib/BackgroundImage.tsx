import "./templates.css";
interface BackgroundImageProps {
  source: string;
  children?: React.ReactNode;
  className?: string;
}

export default function BackgroundImage({
  source,
  children = null,
  className = ""
}: BackgroundImageProps): JSX.Element {
  return (
    <div
      style={{backgroundImage: `url(${source})`}}
      className={`BackgroundImage ${className}`}
    >
      {children}
    </div>
  );
}
