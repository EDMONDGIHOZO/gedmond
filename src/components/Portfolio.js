import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import port from "../images/185.jpg";
// import { useRef } from "react";
// import pimage from "../images/wp.png";

const containerVarients = {
	hidden: {
		opacity: 0,
		y: "-6vh",
	},
	visible: {
		opacity: 1,
		y: "0vh",
		transition: {
			delay: 0.7,
			duration: 0.3,
		},
	},
	exit: {
		y: "-100vh",
		transition: { ease: "easeInOut" },
	},
};

const Portfolio = () => {
	return (
		<motion.div
			variants={containerVarients}
			initial="hidden"
			animate="visible"
			exit="exit"
			className="bg-red-300 h-screen"
		>
			<div className="dark:bg-gray-800 p-0 md:flex w-full md:h-screen text-center md:flex-row bottom-0">
				<div className="side md:h-screen p-4 bg-red-400 top-0 w-full md:w-1/4">
					<Link to={"/"}>
						<motion.div
							className="backBtn box w-14 h-14 rounded-full"
							initial={{ backgroundColor: "#B91C1C", scale: 3 }}
							animate={{ backgroundColor: "#991B1B", scale: 1 }}
							transition={{ delay: 1, duration: 1.2 }}
							whileHover={{ scale: 1.8 }}
						>
							<BsArrowLeft size="2em" />
						</motion.div>
					</Link>

					<div className="info md:-mx-4">
						<span className="text-2xl md:text-4xl font-light"> client </span>
						<span className="text-2xl md:text-4xl font-light"> Project </span>
						<span className="text-2xl md:text-4xl font-light"> stack </span>
					</div>
				</div>

				<div className=" md:h-screen w-full md:w-3/4 cont">
					<div className="screen h-full md:border-red-500 border-solid border-l-2  shadow-4md">
						<div className="titleContainer p-5 text-left">
							<h3 className="text-2xl md:text-5xl text-red-500 align-left">
								PROJECT TITLE
							</h3>
						</div>

						<div className="project-content overflow-hidden">
							<div className="image flex content-center align-center p-4">
								<img
									src={port}
									alt="project"
									className="md:w-full rounded-2xl shadow-2md"
								/>
							</div>
						</div>
					</div>

					<motion.div
						animate={{ opacity: 0.1, scale: 1, type: "spring", x: 200 }}
						initial={{ scale: 2, x: 200 }}
						transition={{ type: "spring", restSpeed: 0.1 }}
						className="boxNext hover:bg-red-500 box"
						whileHover={{ scale: 2 }}
					></motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default Portfolio;
