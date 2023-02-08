import { ReactNode } from 'react'
import Foote from './Foote';
import Footer from './Foote';
import Footone from './Footone';
import Nava from './Nava';
import { Navbars } from './Navbars';
import Navgpt from './Navgpt';




interface LayoutProps {
  children: ReactNode;
}


export default function Layout({ children }: LayoutProps) {
  return (
    <>
       <Navgpt/>
       
      <main>{children}</main>
     
      <Foote/>
      
    </>
  )
}