import Link from 'next/link';
export default function SectionTitle({title, description, href, linkText}:{title:string;description?:string;href?:string;linkText?:string}){return <div className="section-heading"><div><h2>{title}</h2>{description&&<p>{description}</p>}</div>{href&&<Link className="quiet-link" href={href}>{linkText||'더 보기'} <span aria-hidden>↗</span></Link>}</div>}
