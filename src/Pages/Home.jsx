import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="">
    <section
      className="relative text-center h-[100vh] flex justify-center items-center overflow-y-visible"
    >
      <img
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://media.traveler.es/photos/61376cd8652b2e41f8dce990/master/w_1600%2Cc_limit/139215.jpg"
      />
      <div className="relative bg-black bg-opacity-25 p-10 flex flex-col items-center justify-center w-96">
        <h1 className="text-4xl text-white font-bold">MyTinerary</h1>
        <p className="text-white mt-2">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>
      </div>
    </section>
  
    <section className="text-center my-8">
      <Link
        to="/cities"
        className="inline-block bg-yellow-700 text-yellow-500 px-6 py-3 rounded-sm text-xl hover:bg-blue-600"
      >
        <span>Let’s discover your next destination </span>
      </Link>
    </section>
  
    <section className="my-8">
      <h2 className="text-4xl text-center font-bold mb-4">
        Popular My Tineraries
      </h2>
      <Carousel />
    </section>
  </div>
  
  );
}

export default Home;
