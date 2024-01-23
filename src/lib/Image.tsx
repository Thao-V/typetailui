import './templates.css'
interface ImageProps{
  source: string;
  alt?: string;
  className?: string;
  title?: string;
}

export default function Image({source, alt="", className="", title=""}: ImageProps): JSX.Element{
  return <img className={`Image ${className}`} src={source} alt={alt} title={title}/>
} 