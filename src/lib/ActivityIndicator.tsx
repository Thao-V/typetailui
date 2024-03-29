import "./templates.css";
import Container from "./Container";

export default function ActivityIndicator({...rest}): JSX.Element {
  return (
    <Container className="ActivityIndicator" data-testid="activity-indicator">
      <Container className="Spin" />
    </Container>
  );
}
