import React from "react";

export default function Home() {
  return (
    <main className="h-screen bg-gray-800 p-5 antialiased">
      <h2 className="text-5xl cursive text-white my-5">
        {" "}
        <span></span> <span>Javascript Developer </span>{" "}
      </h2>
      <section className="bg-gray-400 p-2  rounded self-center  transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-100">
        <div>
          <div>
            <span className="text-3xl sm:text-red">
              Web is under maintenence! but imma available on{" "}
              <a href="mailto:gihozoedmond@gmail.com">email</a>
            </span>
          </div>
          <a
            href="mailto:gihozoedmond@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="focus:outline-none m-5 text-white text-sm py-2 px-5 rounded-md bg-gradient-to-r from-red-400 to-blue-900 transform hover:bg-red-600 opacity-1 hover:shadow-lg flex items-center transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
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
}
