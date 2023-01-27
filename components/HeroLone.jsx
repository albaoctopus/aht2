import React from "react";
import PropTypes from  "prop-types";

function HeroLone(props) {
  return (
    <section className="text-gray-400 bg-black-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="basis-1/2  lg:grow lg:w-full md:w-1/2 w-5/6">
          <video className="object-cover object-center rounded-3xl" alt="hero" src="/Gasanov.mp4" autoPlay loop muted />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Стань ближе к кумиру<br className="hidden lg:inline-block" />
            
          </h1>
          <p className="mb-8 leading-relaxed">
          Встреча с кумиром! Личная тренировка или ужин в ресторане,  онлайн конференция или автограф сессия.  Все возможно! Купи NFT c взаимодействием с бойцом. 
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
      </div>
    </section>
  );
}



export default HeroLone;