import './templates.css'
interface ButtonProps{
  title: string;
  className?: string;
  onClick?: () => void
}

export default function Button({className = "", title, onClick}: ButtonProps): JSX.Element{
  return <button className={`Button ${className}`} onClick={onClick}>{title}</button>
} 