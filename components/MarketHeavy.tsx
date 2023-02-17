
import { Table } from "flowbite-react";
import { Tabs } from "flowbite-react";
import Vakhaev from "../pages/vakhaev";
import Marketnew from "./Marketnew";
import Marketnewvone from "./Marketnewvone";
import Marketplac from "./Marketplac";
import MpAvaHeavy from "./MpAvaHeavy";
import MpMomHeavy from "./MpMomHeavy";
import MpRelHeavy from "./MpRelHeavy";
import Profile from "./Profile";

const MarketHeavy = () => {

    return (

<Tabs.Group 
  aria-label="Default tabs"
  style="default"
  
  className="bg-gray-900 mx-auto pt-9"
>
  <Tabs.Item
    
    title={<span className=" text-gray-500 text-sm font-bold sm:text-xl ">
    МОМЕНТЫ
  </span>}
  className="bg-red-300 hover:bg-red-500"
    >
        <div className="mt-10 text-center text-7xl font-extrabold">

<p className="mb-6 mt-9 text-xl font-bold text-white-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">Кульминационные моменты кумиров, Победные удары и приемы. Драма! Трагедия! Комедия! Эмоции! Вдохновение! Создай свою коллекцию! Создай свое наследие!.</p>

</div >

    <div className="bg-gray-900  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <Vakhaev/>
    <Vakhaev/>
    <Vakhaev/>
    <Vakhaev/>
    <Vakhaev/>
    <Vakhaev/>
    <Vakhaev/>
    <Vakhaev/>
    <Vakhaev/>
    </div>
  </Tabs.Item>
  <Tabs.Item title={<span className=" text-gray-500 text-sm font-bold sm:text-xl">
    АВАТАРЫ
  </span>}>
  <div className="mt-10 text-center text-7xl font-extrabold">

<p className="mb-6 mt-9 text-xl font-bold text-white-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">Создай себе настроением с аватаром в образе любимого бойца. Используй его в соцсетях. И мессенджерах. Мы постоянно будем пополнять коллекцию в современных модных стилях.</p>

</div>
    <Marketnewvone/>
  </Tabs.Item>
  <Tabs.Item title={<span className=" text-gray-500 text-sm font-bold sm:text-xl ">
    ВЗАИМОДЕЙСТВИЯ
  </span>}>
  <div className="mt-10 text-center text-7xl font-extrabold">

<p className="mb-6 mt-9 text-xl font-bold text-white-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">Встреча с кумиром! Личная тренировка или ужин в ресторане, онлайн конференция или автограф сессия. Все возможно! Купи NFT c взаимодействием с бойцом.</p>

</div>
    <MpRelHeavy/>
  </Tabs.Item>
 
</Tabs.Group>

    )

}

  export default MarketHeavy;