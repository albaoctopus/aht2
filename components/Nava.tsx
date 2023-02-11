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

const Nava = () => {
  const { pathname } = useRouter();

  return (
      <Navbar className='bg-gray-900 mx-auto flex flex-wrap items-center justify-between p-4 '
     
      style={{maxWidth: "1200px"}}
    >
      <Navbar.Brand href="https://www.aca-mma.com/">
        <img
          src="/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="ACA Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-bold text-white hover:text-red-600 md:text-2xl lg:text-3xl">
          FIGHT
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <a>
        <ConnectWallet/>
        </a>
        
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse className="hidden lg:block">
      
        
        <Navbar.Link 
        href="/marketplace"
        className="text-lg font-bold text-white hover:text-red-600 mr-1 lg:text-xl"
        >
           МАРКЕТПЛЕЙС
        </Navbar.Link>
        <Dropdown
          
          arrowIcon={true}
          inline={true}
          label={<span className="block text-lg font-bold hover:text-red-600 lg:text-xl">
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

  export default Nava;