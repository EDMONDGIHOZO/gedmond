import React from "react";
import image from "../images/wp.jpg";

export default function Home() {
	return (
		<main>
			<img
				src={image}
				alt="loading"
				className="absolute object-cover w-full h-full"
			/>
			<section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 sign">
				<h1 className="text-6xl text-yellow-100 font-bold cursive leading-none fast-flicker">
					{" "}
					<span className="faster-flicker">Hi,</span>{" "}
					<span className="flicker">i am Edmond</span>{" "}
				</h1>
			</section>
		</main>
	);
}
