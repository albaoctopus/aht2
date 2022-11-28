import { ReactNode } from 'react'
import Foote from './Foote';
import Footer from './Foote';
import Footone from './Footone';
import Nava from './Nava';

import Navbar from './Navbar';


interface LayoutProps {
  children: ReactNode;
}


export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nava />
      <main>{children}</main>
      <Footone/>
      <Foote/>
      
    </>
  )
}