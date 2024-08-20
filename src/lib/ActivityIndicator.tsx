import "./templates.css";
import Container from "./Container";

export default function ActivityIndicator({...rest}): JSX.Element {
  return(
    <Container className="flex justify-center items-center">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16" />
    </Container>
  )  
}
