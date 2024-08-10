import { useRef, useState } from 'react';
import './App.css';

import { Container, Text, 
  IImage, ImageSlider, JsonEditor, TextEditor, EditorMethods ,
  GroupBox,
  Input,
  Button,
  TextArea
} from "typetailui"
function App() {
  const [text, setText] = useState("");
  const editorRef = useRef<EditorMethods>(null);
  const onSubmit = () => {
    if (editorRef.current) {
      const description = {
        data: editorRef.current.getEditorContent(),
        text: editorRef.current.getEditorText()
      };
      console.log(description);
    }
  }
  return (
    <Container>
      {/* <TextEditor ref={editorRef} /> */}
      <Text>test</Text>
      <TextArea value={""} placeholder='hello' rows={10}/>
      <Button title="Add" onClick={onSubmit} />
    </Container>
  );
}


export default App;
