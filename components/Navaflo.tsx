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
    <span className="self-center whitespace-nowrap text-base font-bold text-white hover:text-red-600 md:text-xl lg:text-xl">
      FIGHT
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <div>
      <ConnectWallet
      accentColor="#E41942"
      />

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
          <Link href="/heavy"> Алихан Вахаев</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/lheavy">Муслим Магомедов </Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/middle">Магомедрасул Гасанов</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/welter">Абубакар Вагаев</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/light">Абдул-Азиз Абдулвахабов</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/feather">Алихан Сулейманов</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/bantam">Олег Борисов</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link href="/fly">Имран Букуев</Link>
          </Dropdown.Item>
           
          </Dropdown>
  
  </Navbar.Collapse>
</Navbar>

)

}

  export default Navaflo;
