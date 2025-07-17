import './templates.css';
import { JSX } from "react";
interface ButtonProps{
  title: string;
  className?: string;
  onClick?: () => void
}

export default function Button({className = "", title, onClick, ...rest}: ButtonProps): JSX.Element{
  return <button className={`Button ${className}`} onClick={onClick} {...rest}>{title}</button>
} 