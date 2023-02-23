import React from "react";
import PropTypes from  "prop-types";

function HeroLone(props) {
  return (
    <section className="text-gray-400 bg-black-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
      <div className="w-full md:w-1/2 lg:w-1/2  lg:grow">
      <img className="object-cover object-center rounded-3xl" alt="hero" src="/rel3.gif" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Стань ближе к кумиру<br className="hidden lg:inline-block" />
            
          </h1>
          <p className="mb-8 leading-relaxed">
          Встреча с кумиром! Личная тренировка или ужин в ресторане,  онлайн конференция или автограф сессия.  Все возможно! Купи NFT c взаимодействием с бойцом. 
          </p>
         
        </div>
          

      </div>
    </section>
  );
}



export default HeroLone;