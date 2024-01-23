import './templates.css'
interface H2Props{
  children: any;
  className?: string
}

export default function H2({children, className = ""}: H2Props): JSX.Element{
  return <h2 className={`H2 ${className}`}>{children}</h2>
} 