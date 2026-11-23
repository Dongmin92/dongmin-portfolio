import {profile} from '@/content/profile';
export default function Footer(){return <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {profile.nameEn}. All rights reserved.</span><span>Built with Next.js · 서울, 대한민국</span></div></footer>}
