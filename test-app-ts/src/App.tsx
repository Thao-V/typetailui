import { useState } from 'react';
import './App.css';

import { Container, Text, 
  IImage, ImageSlider, JsonEditor, TextEditor, EditorMethods ,
  GroupBox,
  Input

} from "typetailui"
function App() {
  const [text, setText] = useState("")
  return (
    <Container>
      <Input type="text" value={text} onChangeText={setText} enableCopy></Input>
    </Container>
  );
}

export default App;
