import React, {useState, useEffect} from "react";
import { Button, Container, H1 } from ".";
interface ErrorBoundaryProps {
  children: any;
}
interface ErrorObject {
  message: string;
  preventDefault: () => void;
}
export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [error, setError] = useState("");

  useEffect(() => {
    function handleError(event: ErrorObject){
      event.preventDefault();
      setError(event.message);
    }
    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);
  const reload = () => {
    window.location.href = '/';
    window.location.reload();
  }
  if(error){
    return (
      <Container className="flex items-center justify-center">
        <H1> {error} </H1>
        <Button title="Reload" onClick={reload}/>
      </Container>
    );
  }

  return children;
}