import { useRef, useState } from 'react';
import './App.css';

import { Container, Text, 
  IImage, ImageSlider, JsonEditor, TextEditor, EditorMethods ,
  GroupBox,
  Input,
  Button,
  TextArea,
  YouTubeVideo,
  ActivityIndicator,
  ProgressTracker
} from "typetailui"
const topics = [
  { title: 'Introduction to Asymptotic Analysis and Big O', completed: true },
  { title: 'Useful Formulae', completed: true },
  { title: 'Common Complexity Scenarios', completed: false },
  { title: 'Challenge: Big (O) of Nested Loop with Addition', completed: false },
  { title: 'Solution: Big O of a Nested Loop with Addition', completed: false },
];
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
  //return <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16"></div>
  //return <ProgressTracker topics={topics} />;
  return <ActivityIndicator/>
  const url = "https://www.youtube.com/watch?v=4rZlzk-r8BI";
  return (
    <Container>
      {/* <TextEditor ref={editorRef} /> */}
      {/* <Text>test</Text>
      <TextArea value={""} placeholder='hello' rows={10}/>
      <Button title="Add" onClick={onSubmit} /> */}
      <YouTubeVideo url={url} title='Sample Video'/>
    </Container>
  );
}


export default App;
