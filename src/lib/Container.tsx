import './templates.css'
interface ContainerProps{
  children?: React.ReactNode
  className?: string;
}

export default function Container({children, className="", ...rest}: ContainerProps): JSX.Element{
  return <div className={`Container ${className}`} {...rest}>{children}</div>
} 