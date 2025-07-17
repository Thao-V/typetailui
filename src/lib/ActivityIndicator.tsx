import "./templates.css";
import { JSX } from "react";
import Container from "./Container";

type ActivityIndicatorProps = React.HTMLAttributes<HTMLDivElement>;

export default function ActivityIndicator(rest: ActivityIndicatorProps): JSX.Element {
  return (
    <Container className="flex justify-center items-center" {...rest}>
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16" />
    </Container>
  );
}