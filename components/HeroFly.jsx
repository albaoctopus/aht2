import React from "react";
import PropTypes from  "prop-types";
import MarketHeavy from "./MarketHeavy";
import Profile from "./Profile";
import MarketFly from "./MarketFly";

function HeroFly(props) {
  return (
    
    <section className="text-gray-200 bg-black-100 body-font">
        <div className="mt-10 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-7xl...">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-600">
    Чемпион в наилегчайшем весе
  </span> <br className="inline-block" />
  <span className="text-gray-200">
  
  </span>
</div>
      <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:w-1/2 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Имран Букуев<br className="hidden lg:inline-block" />
            
          </h1>
          <p className="mb-8 leading-relaxed">
          Российский боец смешанных боевых искусств чеченского происхождения, представитель наилегчайшей весовой категории. Выступает на профессиональном уровне с 2015 года, известен по участию в турнирах престижных бойцовских организаций ACA, WFCA. Действующий чемпион ACA.
          </p>
          
        </div>
        <div className="basis-1/2  lg:grow lg:w-full md:w-1/2 w-5/6">
          <video className="object-cover object-center rounded-3xl" alt="hero" src="/Bukuev.mp4" autoPlay loop muted />
        </div>
   
      </div>
      <div className="mt-10 text-center text-4xl font-extrabold md:text-7xl ...">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-600">
    NFT ЧЕМПИОНА
  </span> <br className="hidden lg:inline-block" />
 
</div>

<div>
  <MarketFly/>
  
</div>
    </section>
  );
}



export default HeroFly;