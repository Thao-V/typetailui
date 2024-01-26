import React, { useEffect, useState, forwardRef } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  DraftHandleValue,
  convertFromRaw,
  convertToRaw
} from "draft-js";
import "draft-js/dist/Draft.css"; // Styles for Draft.js editor
import "./templates.css";
import Container from "./Container";
import Button from "./Button";

export interface EditorMethods {
  getEditorContent: () => string;
  getEditorText: () => string;
}

function convertToString(editorState: EditorState): string{
  try {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    const serializedData = JSON.stringify(raw);
    return serializedData;
  } catch (error) {}
  return "";
}
function getPlainText(editorState: EditorState): string | null {
  try {
    const contentState = editorState.getCurrentContent();
    if(contentState){
      return contentState.getPlainText();
    }
  } catch (error) {}
  return "";
}
function convertToEditorState(initial: string | undefined): EditorState | null {
  try {
    if (initial) {
      const raw = JSON.parse(initial);
      const contentState = convertFromRaw(raw);
      const editorState = EditorState.createWithContent(contentState);
      return editorState;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

interface TextEditorProps {
  initial?: string;
  readOnly?: boolean;
}
export default forwardRef(function TextEditor(
  { initial, readOnly }: TextEditorProps,
  ref
) {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const handleKeyCommand = (
    command: string,
    editorState: EditorState
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  const onInlineStyleClick = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  React.useImperativeHandle(ref, () => ({
    getEditorContent: () => {
      return convertToString(editorState);
    },
    getEditorText: () => {
      return getPlainText(editorState);
    }
  }));

  useEffect(() => {
    const ret = convertToEditorState(initial);
    if (ret) {
      setEditorState(ret);
    }
  }, []);
  if (readOnly) {
    return (
      <Container className="border-2 m-2 min-height: h-60 font-sans text-xs  overflow-auto px-4">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          readOnly={true}
        />
      </Container>
    );
  }
  return (
    <Container className="border-2 m-2">
      <Container className="flex flex-row justify-center space-x-2">
        <Button title="Bold" onClick={() => onInlineStyleClick("BOLD")} />
        <Button onClick={() => onInlineStyleClick("ITALIC")} title="Italic" />
        <Button
          onClick={() => onInlineStyleClick("UNDERLINE")}
          title="Underline"
        />
      </Container>

      <Container className="border-2 m-2 min-height: h-60 font-sans text-xs overflow-auto px-4">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </Container>
    </Container>
  );
});
