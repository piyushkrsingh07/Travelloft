import { Nunito } from "next/font/google";



import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";

import RegisterModel from "./components/modals/RegisterModel";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModel";


const font=Nunito({
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ClientOnly>
                <ToasterProvider/>
                <RegisterModel/>
                <LoginModal/>
                <Navbar/>
        </ClientOnly>
    
        {children}
      </body>
    </html>
  );
}
