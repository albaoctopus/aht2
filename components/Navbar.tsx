import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Navbar.module.css";
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dropdown } from "flowbite-react";


const Navbar = () => {
    const { pathname } = useRouter();

    return (
    <nav className="bg-gray-900 border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="https://flowbite.com" className="flex items-center">
          <img
            src="/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center font-bold text-4xl whitespace-nowra text-white">
            FIGHT
          </span>
        </a>
        <div className="flex items-center md:order-2">
          <a>
          <ConnectWallet/>
          </a>
      
        </div>
        <div
          id="mega-menu"
          className="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3  text-base text-white-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-base text-white-700 font-bold border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                МАРКЕПЛЕЙС
              </a>
            </li>
            <li>
              <div>
              <Dropdown 
              className="bg-red-500 text-xl hover: text-red-500"
  label="КЛУБ ЧЕМПИОНОВ"
  inline={true}
  size="lg"
  trigger="hover"
  color="failure"

  
  
>

  <Dropdown.Item className=" text-white">
    <a href="/new"> АЛИХАН ВАХАЕВ </a>
  </Dropdown.Item>
  <Dropdown.Item>
    Settings
  </Dropdown.Item>
  <Dropdown.Item>
    Earnings
  </Dropdown.Item>
  <Dropdown.Item>
    Sign out
  </Dropdown.Item>
</Dropdown>
 
</div>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
    }
  export default Navbar;
  