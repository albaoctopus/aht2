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

const Navaflo = () => {
  const { pathname } = useRouter();

  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
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
    <Button>
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

)

}

  export default Navaflo;
