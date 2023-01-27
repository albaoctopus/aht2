import React from "react";
import PropTypes from  "prop-types";
import MarketHeavy from "./MarketHeavy";
import Profile from "./Profile";
import MarketFeather from "./MarketFeather";

function Feather(props) {
  return (
    
    <section className="text-gray-200 bg-black-100 body-font">
        <div className="mt-10 text-center text-7xl font-extrabold ...">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-600">
    Чемпион в полулегком весе
  </span> <br className="hidden lg:inline-block" />
  <span className="text-gray-200">
  АЛИХАН СУЛЕЙМАНОВ
  </span>
</div>
      <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:w-1/2 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Лучшие моменты боев<br className="hidden lg:inline-block" />
            
          </h1>
          <p className="mb-8 leading-relaxed">
          Кульминационные моменты кумиров.  Победные удары и приемы. Драма! Трагедия! Комедия! Эмоции! Вдохновение! Создай свою коллекцию! Создай свое наследие!
          </p>
          <div className="flex justify-center">
            <button className={`inline-flex text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}>
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="basis-1/2  lg:grow lg:w-full md:w-1/2 w-5/6">
          <video className="object-cover object-center rounded-3xl" alt="hero" src="/Suleymanov.mp4" autoPlay loop muted />
        </div>
   
      </div>
      <div className="mt-10 text-center text-7xl font-extrabold ...">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-600">
    NFT ЧЕМПИОНА
  </span> <br className="hidden lg:inline-block" />
 
</div>

<div>
  <MarketFeather/>
  
</div>
    </section>
  );
}



export default Feather;