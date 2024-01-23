import './templates.css'
interface H1Props{
  children: any;
  className?: string
}

export default function H1({children, className = ""}: H1Props): JSX.Element{
  return <h1 className={`H1 ${className}`}>{children}</h1>
} 