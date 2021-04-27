import React from "react";

export default function Home() {

  return (
    <main className="bg-gray-900 overflow-hidden">
      <section className="flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <div className="intro">
          <h2 className="text-4xl my-4 sm:4sm text-yellow-100 font-bold cursive leading-none fast-flicker">
            {" "}
            <span className="faster-flicker">Hi,</span>{" "}
            <span className="flicker">i am a Developer</span>{" "}
          </h2>
          <div className="text-white md:w-1/2 w-full">
            <span>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </span>
          </div>
          <a
            href="mailto:gihozoedmond@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              class="focus:outline-none m-5 text-white text-sm py-2 px-5 rounded-md bg-gradient-to-r from-red-400 to-blue-900 transform hover:bg-red-600 opacity-1 hover:shadow-lg flex items-center"
            >
              <svg
                class="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              Text Me
            </button>
          </a>
        </div>
      </section>
    </main>
  );
