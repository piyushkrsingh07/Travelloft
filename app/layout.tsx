import { Nunito } from "next/font/google";



import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";

import RegisterModel from "./components/modals/RegisterModel";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModel";
import getCurrentUser from "./actions/getCurrentUser";


const font=Nunito({
  subsets:["latin"]
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser=await getCurrentUser()
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ClientOnly>
                <ToasterProvider/>
                <RegisterModel/>
                <LoginModal/>
                <Navbar currentUser={currentUser}/>
        </ClientOnly>
    
        {children}
      </body>
    </html>
  );
}
