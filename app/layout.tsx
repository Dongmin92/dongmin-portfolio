import type {Metadata} from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
export const metadata:Metadata={title:{default:'이동민 | Dongmin Lee — Research Portfolio',template:'%s | 이동민'},description:'이동민의 연구자 포트폴리오. PHM, CBM+, 고장진단, 잔여수명 예측 및 신뢰성공학 연구.',robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko" suppressHydrationWarning><body><Header/><main>{children}</main><Footer/></body></html>}
