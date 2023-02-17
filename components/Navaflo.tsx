import { ConnectWallet } from "@thirdweb-dev/react";

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dropdown } from "flowbite-react";
import { Navbar } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { Button } from "flowbite-react";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import styles from "../styles/Nava.module.css";

const Navaflo = () => {
  const { pathname } = useRouter();

  return (
    <Navbar className='bg-gray-900'
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src="logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-3xl font-bold text-red-800">
      FIGHT
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <div>
      <ConnectWallet/>

    </div>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/marketplace"
      active={false}
      className={styles.navatxt}
    >
      МАРКЕТПЛЕЙС
    </Navbar.Link>
    
    <Dropdown
          
          arrowIcon={true}
          inline={true}
          label={<span className="block text-base font-bold hover:text-red-600 lg:text-xl">
          ЧЕМПИОНЫ
        </span>}
        
        >
         
          <Dropdown.Item>
          <Link href="/heavy"> АЛИХАН ВАХАЕВ</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/lheavy">МУСЛИМ МАГОМЕДОВ </Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/middle">МАГОМЕДРАСУЛ ГАСАНОВ</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/welter">АБУБАКАР ВАГАЕВ</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/light">АБДУЛ-АЗИЗ АБДУЛВАХАБОВ</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/feather">АЛИХАН СУЛЕЙМАНОВ</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/bantam">ОЛЕГ БОРИСОВ</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/fly">ИМРАН БУКУЕВ</Link>
          </Dropdown.Item>
           
          </Dropdown>
  
  </Navbar.Collapse>
</Navbar>

)

}

  export default Navaflo;
