import React from "react";
import PropTypes from  "prop-types";
import MarketMarketplace from "./MarketMarketplace";
import Profile from "./Profile";

function HeroMarketplace(props) {
  return (
    
    <section className="text-gray-200 bg-black-100 body-font">
        <div className="mt-10 text-center text-5xl font-extrabold lg:text-7xl">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-600">
   МАРКЕТПЛЕЙС NFT
  </span> <br className="hidden lg:inline-block" />
  
</div>
<div className="container mx-auto px-5 py-10 md:py-24 flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 md:pr-16 lg:pr-24 flex flex-col items-center md:items-start md:text-left mb-16 md:mb-0">
    <h1 className="title-font sm:text-4xl text-3xl font-medium text-white mb-4 text-center md:text-left">
      Лучшие моменты боев<br class="hidden lg:inline-block" />
    </h1>
    <p className="mb-8 leading-relaxed text-center md:text-left">
      Кульминационные моменты кумиров. Победные удары и приемы. Драма! Трагедия! Комедия! Эмоции! Вдохновение! Создай свою коллекцию! Создай свое наследие!
    </p>
  </div>
  <div class="md:w-1/2 w-full">
    <div class="aspect-w-16 aspect-h-9">
      <video class="rounded-3xl object-cover object-center w-full h-full" src="/videoB.mp4" autoplay loop muted></video>
    </div>
  </div>
</div>

      <div className="mt-10 text-center text-7xl font-extrabold">
<h1 className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-600">ACA FIGHT</h1>


</div>

<div>
  <MarketMarketplace/>
</div>


    </section>
  );
}



export default HeroMarketplace;