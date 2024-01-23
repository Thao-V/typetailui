import "./templates.css";
import Container from "./Container";
interface ActivityIndicatorProps {
  className?: string;
}

export default function ActivityIndicator({
  className = ""
}: ActivityIndicatorProps): JSX.Element {
  return (
    <Container className="ActivityIndicator">
      <Container className="Spin" />
    </Container>
  );
}
