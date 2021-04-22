import React from "react";
import image from "../images/wp.jpg";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <img src={image} alt="loading" className="absolute object-cover w-full" />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <div className="sign">
          <h1 className=" md:text-6md xl:text-5xl sm:text-2sm text-yellow-100 font-bold cursive leading-none fast-flicker">
            {" "}
            <span className="faster-flicker">Hi,</span>{" "}
            <span className="flicker">i am a Developer</span>{" "}
          </h1>
        </div>
      </section>
    </main>
  );
}
