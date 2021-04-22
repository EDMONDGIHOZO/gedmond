import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
	return (
		<header className="bg-pink-400">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						activeClassName="text-white"
						className="inline-flex items-center mr-3 tracking-widest text-yellow-200 cursive hover:text-white hover:font-light"
					>
						G-EDMOND
					</NavLink>
					<NavLink
						to="/about"
						className="inline-flex items-center px-3  mr-4  rounded hover:text-white hover:font-light font-bold"
						activeClassName="text-white"
					>
						ABOUT ME
					</NavLink>
					<NavLink
						to="/portfolio"
						className="inline-flex items-center px-3 mr-4 rounded hover:text-white hover:font-light font-bold"
						activeClassName="text-white"
					>
						PORTFOLIO
					</NavLink>
					<NavLink
						to="/blog"
						className="inline-flex items-center px-3 mr-4 rounded hover:text-white hover:font-light font-bold"
						activeClassName="text-white"
					>
						BLOG
					</NavLink>
				</nav>
				<div className="inline-flex py-3 mx-3 my-6">
					<SocialIcon
						url="https://linkedin.com/EDMONDGIHOZO"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 40, width: 40 }}
					/>
					<SocialIcon
						url="https://facebook.com/EDMONDGIHOZO"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 40, width: 40 }}
					/>
					<SocialIcon
						url="https://github.com/EDMONDGIHOZO"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 40, width: 40 }}
					/>
				</div>
			</div>
		</header>
	);
}
