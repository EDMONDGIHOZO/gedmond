import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900">
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
							<i className="fas fa-bars"></i>
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
						<div className="inline-flex mx-3">
							<SocialIcon
								url="https://linkedin.com/EDMONDGIHOZO"
								className="mr-4"
								target="_blank"
								rel="noreferrer"
								fgColor="#fff"
								style={{ height: 25, width: 25 }}
							/>
							<SocialIcon
								url="https://www.facebook.com/edmondgihozo"
								className="mr-4"
								target="_blank"
								rel="noreferrer"
								fgColor="#fff"
								style={{ height: 25, width: 25 }}
							/>
							<SocialIcon
								url="https://github.com/EDMONDGIHOZO"
								className="mr-4"
								target="_blank"
								rel="noreferrer"
								fgColor="#fff"
								style={{ height: 25, width: 25 }}
							/>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
