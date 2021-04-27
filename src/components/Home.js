import React from "react";

export default function Home() {
	return (
		<main className="bg-gray-900 overflow-hidden">
			<section className="flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
				<div className="intro">
					<h2 className="text-4xl my-4 sm:4sm text-yellow-100 font-bold cursive leading-none fast-flicker">
						{" "}
						<span className="faster-flicker">Hi,</span>{" "}
						<span className="flicker text-6xl">i am a Developer</span>{" "}
					</h2>
					<div className="text-white md:w-1/3 w-full">
						<span className="faster-flicker text-3xl">
							I am passionate about building excellent software that improves
							the lives of those around me. I specialize in creating software
							for clients ranging from individuals and small-businesses all the
							way to large enterprise corporations. What would you do if you had
							a software expert available at your fingertips?
						</span>
					</div>
				</div>
			</section>
		</main>
	);
}
