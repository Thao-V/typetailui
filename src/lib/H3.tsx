import './templates.css'
interface H3Props{
  children: any;
  className?: string
}

export default function H3({children, className = ""}: H3Props): JSX.Element{
  return <h3 className={`H3 ${className}`}>{children}</h3>
} 