
import { Table } from "flowbite-react";
import { Tabs } from "flowbite-react";
import Borisov from "../pages/borisov";
import Marketplac from "./Marketplac";
import MpAvaBantam from "./MpAvaBantam";
import MpAvaHeavy from "./MpAvaHeavy";
import MpMomHeavy from "./MpMomHeavy";
import MpRelHeavy from "./MpRelHeavy";
import Profile from "./Profile";

const MarketBantam = () => {

    return (

<Tabs.Group 
  aria-label="Default tabs"
  style="default"
  
  className="bg-black-900 mx-auto pt-9"
>
  <Tabs.Item
    
    title={<span className=" text-gray-500 text-xl font-bold ">
    МОМЕНТЫ
  </span>}
  className="bg-red-300 hover:bg-red-500"
    >
        <div className="mt-10 text-center text-7xl font-extrabold">

<p className="mb-6 mt-9 text-xl font-bold text-white-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">Стань ближе к своему кумиру
Мы Блокчейн платформа взаимодействия фанатов и бойцов.
Новые технологии дают новые возможности. И теперь у Тебя есть возможность быть ближе к Кумиру. И влиять на развитие лиги.
Сделаем Лучшую лигу в Мире Вместе.</p>

</div>

<div className="container mx-auto pt-10 justify-center flex flex-row flex-wrap">
    <Borisov/>
    <Borisov/>
    <Borisov/>
    <Borisov/>
    <Borisov/>
    <Borisov/>
    <Borisov/>
    <Borisov/>
    </div>


  </Tabs.Item>
  <Tabs.Item title={<span className=" text-gray-500 text-xl font-bold ">
    АВАТАРЫ
  </span>}>
  <div className="mt-10 text-center text-7xl font-extrabold">

<p className="mb-6 mt-9 text-xl font-bold text-white-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">Стань ближе к своему кумиру
Мы Блокчейн платформа взаимодействия фанатов и бойцов.
Новые технологии дают новые возможности. И теперь у Тебя есть возможность быть ближе к Кумиру. И влиять на развитие лиги.
Сделаем Лучшую лигу в Мире Вместе.</p>

</div>
    <MpAvaBantam/>
  </Tabs.Item>
  <Tabs.Item title={<span className=" text-gray-500 text-xl font-bold ">
    ВЗАИМОДЕЙСТВИЯ
  </span>}>
  <div className="mt-10 text-center text-7xl font-extrabold">

<p className="mb-6 mt-9 text-xl font-bold text-white-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">Стань ближе к своему кумиру
Мы Блокчейн платформа взаимодействия фанатов и бойцов.
Новые технологии дают новые возможности. И теперь у Тебя есть возможность быть ближе к Кумиру. И влиять на развитие лиги.
Сделаем Лучшую лигу в Мире Вместе.</p>

</div>
    <MpRelHeavy/>
  </Tabs.Item>
 
</Tabs.Group>

    )

}

  export default MarketBantam;