
import { Table } from "flowbite-react";
import { Tabs } from "flowbite-react";
import Marketplac from "./Marketplac";
import MpMomHeavy from "./MpMomHeavy";
import Profile from "./Profile";

const MarketMarketplace = () => {

    return (

<Tabs.Group 
  aria-label="Default tabs"
  style="default"
  
  className="bg-gray-900 mx-auto pt-9"
>
  <Tabs.Item
    
    title={<span className=" text-gray-500 text-xl font-bold ">
    ЗОЛОТЫЕ МОМЕНТЫ
  </span>}
  className="bg-red-300 hover:bg-red-500"
    >
    <MpMomHeavy/>
  </Tabs.Item>
  <Tabs.Item title={<span className=" text-gray-500 text-xl font-bold ">
    СЕРЕБРЯННЫЕ МОМЕНТЫ
  </span>}>
    <Marketplac/>
  </Tabs.Item>
  <Tabs.Item title={<span className=" text-gray-500 text-xl font-bold ">
    БРОНЗОВЫЕ МОМЕНТЫ
  </span>}>
    Один
  </Tabs.Item>
 
</Tabs.Group>

    )

}

  export default MarketMarketplace;