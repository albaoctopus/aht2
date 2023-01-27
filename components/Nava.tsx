import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Navbar.module.css";
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
        <Navbar className='bg-gray-900 mx-auto'
        
       
      >
        <Navbar.Brand href="https://www.aca-mma.com/">
          <img
            src="/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="ACA Logo"
          />
          <span className="self-center whitespace-nowrap text-3xl font-bold text-white hover:text-red-600">
            FIGHT
          </span>
        </Navbar.Brand>
        <div className="flex xl:order-2">
        <a>
          <ConnectWallet/>
          </a>
          
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link 
            href="/"
           
          >
            <span className="text-xl font-bold text-white hover:text-red-600">
            HOME
            </span>
          </Navbar.Link>
          
          <Navbar.Link 
          href="/marketplace">
             <span className="text-xl font-bold text-white hover:text-red-600">
            МАРКЕТПЛЕЙС
            </span>
          </Navbar.Link>
          <Dropdown
            
            arrowIcon={true}
            inline={true}
            label={<span className="block text-xl font-bold hover:text-red-600">
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