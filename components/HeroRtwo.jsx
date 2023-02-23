import React from "react";
import PropTypes from  "prop-types";

function HeroRtwo(props) {
  return (
    <section className="text-gray-200 bg-black-100 body-font">
      <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:w-1/2 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Цифровые аватары<br className="hidden lg:inline-block" />
            
          </h1>
          <p className="mb-8 leading-relaxed">
          Создай себе настроением с аватаром в образе любимого бойца. Используй его в соцсетях. И мессенджерах. Мы постоянно будем пополнять коллекцию в современных модных стилях.
          </p>
         
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2  lg:grow">
          <img className="object-cover object-center rounded-3xl" alt="hero" src="/ava.gif" />
        </div>
      </div>
    </section>
  );
}



export default HeroRtwo;