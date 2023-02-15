import React from "react";
import PropTypes from  "prop-types";
import MarketMarketplace from "./MarketMarketplace";
import Profile from "./Profile";

function HeroMarketplace(props) {
  return (
    
    <section className="text-gray-200 bg-black-100 body-font">
        <div className="mt-10 text-center text-5xl font-extrabold md:text-7xl">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-600">
   МАРКЕТПЛЕЙС NFT
  </span> <br className="hidden lg:inline-block" />
  
</div>
      <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:w-1/2 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Лучшие моменты боев<br className="hidden lg:inline-block" />
            
          </h1>
          <p className="mb-8 leading-relaxed">
          Кульминационные моменты кумиров.  Победные удары и приемы. Драма! Трагедия! Комедия! Эмоции! Вдохновение! Создай свою коллекцию! Создай свое наследие!
          </p>
         
        </div>
        <div className="basis-1/2  lg:grow lg:w-full md:w-1/2 w-5/6">
          <video className="object-cover object-center rounded-3xl" alt="hero" src="/videoB.mp4" autoPlay loop muted />
        </div>
   
      </div>
      <div className="mt-10 text-center text-7xl font-extrabold">
<h1 className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-600">ACA FIGHT</h1>
<p className="mb-6 mt-9 text-xl font-bold text-white-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">Стань ближе к своему кумиру
Мы Блокчейн платформа взаимодействия фанатов и бойцов.
Новые технологии дают новые возможности. И теперь у Тебя есть возможность быть ближе к Кумиру. И влиять на развитие лиги.
Сделаем Лучшую лигу в Мире Вместе.</p>

</div>

<div>
  <MarketMarketplace/>
</div>


    </section>
  );
}



export default HeroMarketplace;