
import { Table } from "flowbite-react";
import { Tabs } from "flowbite-react";
import Abdulvakhabov from "../pages/abdul";
import Borisov from "../pages/borisov";
import Bukuev from "../pages/bukuev";
import Gasanov from "../pages/gasanov";
import Magomedov from "../pages/magomedov";
import Suleymanov from "../pages/suleymanov";
import Test2 from "../pages/test2";
import Test3 from "../pages/test3";
import Vagaev from "../pages/vagaev";
import Vakhaev from "../pages/vakhaev";


import Marketnew from "./Marketnew";
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
    
    title={<span className=" text-gray-500 text-xl font-bold md:text-lg">
    ЗОЛОТЫЕ МОМЕНТЫ
  </span>}
  >

<div className="mt-10 text-center text-7xl font-extrabold">

<p className="mb-6 mt-9 text-xl font-bold text-white-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">Стань ближе к своему кумиру
Мы Блокчейн платформа взаимодействия фанатов и бойцов.
Новые технологии дают новые возможности. И теперь у Тебя есть возможность быть ближе к Кумиру. И влиять на развитие лиги.
Сделаем Лучшую лигу в Мире Вместе.</p>

</div>

      <div className="bg-gray-900  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <Vagaev/>    
    <Suleymanov/>
    <Abdulvakhabov/>
    <Bukuev/>
    <Borisov/>
    <Vakhaev/>
    <Magomedov/>
    <Gasanov/>
    </div>

  </Tabs.Item>

  
  <Tabs.Item title={<span className=" text-gray-500 text-xl font-bold ">
    СЕРЕБРЯННЫЕ МОМЕНТЫ
  </span>}>

  <div className="mt-10 text-center text-7xl font-extrabold">

<p className="mb-6 mt-9 text-xl font-bold text-white-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">Стань ближе к своему кумиру
Мы Блокчейн платформа взаимодействия фанатов и бойцов.
Новые технологии дают новые возможности. И теперь у Тебя есть возможность быть ближе к Кумиру. И влиять на развитие лиги.
Сделаем Лучшую лигу в Мире Вместе.</p>

</div>

  <div className="bg-gray-900  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  <Vagaev/>    
    <Suleymanov/>
    <Abdulvakhabov/>
    <Bukuev/>
    <Borisov/>
    <Vakhaev/>
    <Magomedov/>
    <Gasanov/>
    </div>

    


  </Tabs.Item>
  <Tabs.Item title={<span className=" text-gray-500 text-xl font-bold ">
    БРОНЗОВЫЕ МОМЕНТЫ
  </span>}>

  <div className="mt-10 text-center text-7xl font-extrabold">

<p className="mb-6 mt-9 text-xl font-bold text-white-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">Стань ближе к своему кумиру
Мы Блокчейн платформа взаимодействия фанатов и бойцов.
Новые технологии дают новые возможности. И теперь у Тебя есть возможность быть ближе к Кумиру. И влиять на развитие лиги.
Сделаем Лучшую лигу в Мире Вместе.</p>

</div>
    
  <div className="bg-gray-900  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <Vagaev/>    
    <Suleymanov/>
    <Abdulvakhabov/>
    <Bukuev/>
    <Borisov/>
    <Vakhaev/>
    <Magomedov/>
    <Gasanov/>
    </div>



  </Tabs.Item>
 
</Tabs.Group>

    )

}

  export default MarketMarketplace;