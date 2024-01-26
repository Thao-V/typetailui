import JSONInput from "react-json-editor-ajrm";
import Container from "./Container";
import Button from "./Button";
const locale: any = require("react-json-editor-ajrm/locale/en");

interface JsonEditorProps {
  jsonData: any;
  setJsonData: (data: any) => void;
}
export default function JsonEditor({ jsonData, setJsonData }: JsonEditorProps) {
  const handleJsonChange = (data: any) => {
    if (data.jsObject) {
      setJsonData(data.jsObject);
    }
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then(text => {
      try {
        const jsonData = JSON.parse(text);
        setJsonData(jsonData);
      } catch (e) {
        console.error("Error parsing JSON:", e);
      }
    });
  };
  const handleClear = () => {
    setJsonData({})
  }

  return (
    <Container className="flex flex-col justify-center w-full">
      <Container className="flex flex-row space-x-2 items-center justify-center">
        <Button title="Paste JSON" onClick={handlePaste} className="mb-2" />
        <Button title="Clear" onClick={handleClear} className="mb-2" />
      </Container>

      <JSONInput
        id="json-editor"
        placeholder={jsonData}
        locale={locale}
        onChange={handleJsonChange}
        height="500px"
        width="100%"
      />
    </Container>
  );
}
