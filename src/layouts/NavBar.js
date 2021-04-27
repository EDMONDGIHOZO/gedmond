import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 navy">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<a
							className="inline-flex items-center mr-3 tracking-widest text-gray-200 cursive hover:text-white hover:font-light"
							href="/"
						>
							G-EDMOND
						</a>

						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<FontAwesomeIcon icon={faBars} />
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>
						<nav className="flex">
							<NavLink
								to="/about"
								className="inline-flex items-center text-gray-500 px-3  mr-4  rounded hover:text-white hover:font-light font-bold"
								activeClassName="text-white"
							>
								ABOUT ME
							</NavLink>
							<NavLink
								to="/portfolio"
								className="inline-flex items-center text-gray-500 px-3 mr-4 rounded hover:text-white hover:font-light font-bold"
								activeClassName="text-white"
							>
								PORTFOLIO
							</NavLink>
							<NavLink
								to="/blog"
								className="inline-flex items-center text-gray-500 px-3 mr-4 rounded hover:text-white hover:font-light font-bold"
								activeClassName="text-white"
							>
								BLOG
							</NavLink>
						</nav>
					</div>
				</div>
			</nav>
		</>
	);
}
