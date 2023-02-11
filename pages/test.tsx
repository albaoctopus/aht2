import { ConnectWallet } from "@thirdweb-dev/react";


import type { NextPage } from "next";
import About from "../components/About";
import { Banner } from "../components/Banner";
import Carous from "../components/Carousel";
import HeroLone from "../components/HeroLone";
import HeroRone from "../components/HeroRone";
import HeroRtwo from "../components/HeroRtwo";
import Magazin from "../components/Magazin";
import Tlineone from "../components/Tlineone";
import Tlinetwo from "../components/Tlinetwo";
import Vport from "../components/Vport";
import Vport2 from "../components/Vport2";
import Vport4 from "../components/Vport4";


const Test: NextPage = () => {
  return (
    <div>
      <main>
        <div>
        

        <Vport2/>
        <About/>
        <HeroRone/>
        <HeroLone/>
        <HeroRtwo/>
        <Tlineone/>
        
        
        </div>

         

       
      </main>
    </div>
  );
};

export default Test;