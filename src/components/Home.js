import React from "react";
import image from "../images/wp.png";

export default function Home() {
	return (
		<main>
			<img
				src={image}
				alt="loading"
				className="absolute object-cover w-full h-full"
			/>
			<section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
				<h1 className="text-6xl text-yellow-100 font-bold cursive leading-none">
					{" "}
					Hi, i am Edmond{" "}
				</h1>
			</section>
		</main>
	);
}
