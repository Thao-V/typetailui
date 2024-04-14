import Container from "./Container";
import H2 from "./H2";
import Button from "./Button";

interface CopyableTextProps {
  code: string;
  title: string;
}

export default function CopyableText({ title, code }: CopyableTextProps) {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <Container className="flex flex-col h-100">
      <Container className="flex flex-row space-x-1">
        <H2 className="text-xl font-bold mb-2">
          {title}
        </H2>
        <Button title="Copy Code" onClick={copyToClipboard} />
      </Container>

      <textarea
        readOnly
        className="w-full h-64 bg-gray-100 border border-gray-300 rounded-lg p-3 font-mono text-sm"
        value={code}
      />
    </Container>
  );
}
