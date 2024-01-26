import "./templates.css";
interface GroupBoxProps {
  children?: React.ReactNode;
  className?: string;
  title: string;
}

export default function GroupBox({
  children,
  className = "",
  title
}: GroupBoxProps): JSX.Element {
  return (
    <fieldset className="p-4 border border-gray-200 rounded-md">
      <legend className="text-lg font-semibold text-gray-700">
        {title}
      </legend>
      {children}
    </fieldset>
  );
}