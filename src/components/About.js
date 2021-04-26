import React from "react";

export default function About() {
	return (
		<main>
			<div class="min-h-screen bg-gray-700 py-6 sm:py-12 flex flex-col items-center justify-center">
				<div className="bg-gray-600 rounded-lg shadow-md p-10 text-white">
					<h2 className="text-2xl font-bold text-center uppercase">
						About Me!
					</h2>
					<span className="me">
						<p>
							👩‍💻 I use python , javascript , html, nodeJs , React Js, Vue Js
						</p>
						<p>🎧 Oldies</p>
						<p>🏫 Currently finishing my Uni Modules! 😭😭</p>
					</span>
				</div>
			</div>
		</main>
	);
}
