import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"NEXORA PRIVILEGE",description:"Beyond Business. Beyond Ordinary."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}