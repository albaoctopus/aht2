import React from "react";
import PropTypes from  "prop-types";

function HeroRone(props) {
  return (
    <section class="bg-black text-white body-font">
  <div className="container mx-auto px-5 py-24 flex flex-wrap items-center">
    <div className="w-full md:w-1/2 lg:w-1/2 md:pr-16 lg:pr-24 mb-16 md:mb-0 text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl font-medium mb-4 title-font">
        Лучшие моменты боев<br class="hidden lg:inline-block" />
      </h1>
      <p className="leading-relaxed mb-8">
        Кульминационные моменты кумиров, Победные удары и приемы. Драма! Трагедия! Комедия! Эмоции! Вдохновение! Создай свою коллекцию! Создай свое наследие!
      </p>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/2  lg:grow">
    <video className="object-cover object-center rounded-3xl" alt="hero" src="/Suleymanov.mp4" autoPlay loop muted />
    </div>
  </div>
</section>
  );
}



export default HeroRone;