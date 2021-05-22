// temporaly usage
import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import port from "../images/silc.png";
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

const Page2 = () => {
  return (
    <motion.div
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen"
    >
      <div className="p-0 md:flex w-full md:h-screen text-center md:flex-row bottom-0">
        <div className="side md:h-screen bg-green-500 p-4 top-0 w-full md:w-1/4">
          <Link to={"/"}>
            <div className="backBtn box w-14 h-14 ">
              <BsArrowLeft size="2em" className="hover:scale-50 text-white" />
            </div>
          </Link>

          <div className="info md:-mx-4">
            <span> Owner:</span>
            <span className=" font-bold"> Caritas Ewanda </span>
            <span> Type:</span>
            <span className="  font-bold"> Web applications </span>
            <span> Stack:</span>
            <span className=" font-bold">Adonis Js, VueJs, vuetify</span>
            <span> Location:</span>
            <span className=" font-bold">Private</span>
          </div>
        </div>

        <div className=" md:h-screen bg-white w-full md:w-3/4 cont">
          <div className="screen h-full md:border-white border-solid border-l-2  shadow-4md">
            <div className="project-title-container2 p-5 text-left">
              <h3 className="text-2sm md:text-4xl text-white align-left">
                SILC
              </h3>
              <div className="text-white px-6 divide-white border-l-2 border-solid hover:text-red-400">
                <Link to="/">
                  <span className="animate-pulse">Next Project</span>
                </Link>
              </div>
            </div>

            <div className="project-content overflow-scroll">
              <div className="image flex content-center align-center p-1">
                <img
                  src={port}
                  alt="project"
                  className="md:w-full rounded shadow-2md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page2;
