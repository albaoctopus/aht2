import { ConnectWallet } from "@thirdweb-dev/react";

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dropdown } from "flowbite-react";


export const Navbars = () => (
  <nav className="bg-red-200 border-green-800 px-2 sm:px-4 py-2.5 rounded">
    <div className="container border-green-800 bg-red-900 flex flex-wrap items-center justify-between mx-auto">
      <a href="https://flowbite.com/" className="flex items-center">
        <img
          src="logo.svg"
          className="h-6 mr-3 sm:h-9"
          alt="ACA Logo"
        />
        <span className="self-center text-3xl font-bold text-white whitespace-nowrap">
          FIGHT
        </span>
      </a>
      <div className="flex sm:order-2">
      <a>
        <ConnectWallet/>
        </a>
        
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-cta"
          aria-expanded="true"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className="items-center justify-between w-full md:flex lg:w-auto lg:order-1"
        id="navbar-cta"
      >
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-500 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-red-400 ">
          <li>
            <a
              href="#"
              className="text-xl font-bold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0"
              aria-current="page"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-xl font-bold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
            >
              МАРКЕТПЛЕЙС
            </a>
          </li>
          
          <li>
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
          </li>
        </ul>
      </div>
    </div>
  </nav>
)