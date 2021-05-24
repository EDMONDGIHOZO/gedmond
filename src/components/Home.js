import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";

const buttonVar = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    fontWeight: "bold",
  },
};

const containerVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0,
    transition: {
      delay: 0.8,
      duration: 0.8,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className="flex flex-wrap content-center bg-gray-400 dark:bg-gray-800 w-full h-screen text-center md:flex-row"
      varients={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="flex items-center justify-center bg-gray-200 w-full md:w-1/2 leftSide column">
        <div className="max-w-lg transition-all ease-in-out duration-1000 transform translate-x-0 slide">
          <div className="example-container">
            <motion.div className="drag-area" ref={constraintsRef} />
            <motion.div drag dragConstraints={constraintsRef}>
              <motion.h1
                animate={{ marginTop: 1, opacity: 1 }}
                initial={{ marginTop: -400, opacity: 0.2 }}
                transition={{
                  type: "spring",
                  delay: 0.3,
                  stiffness: 50,
                  restSpeed: 0.5,
                }}
                className="text-2xl mb-4 transition duration-500 ease-in-out hover:text-gray-800 font-bold textShadow tracking-wide text-white dark:text-white md:text-7xl"
              >
                EDMOND GIHOZO
              </motion.h1>
            </motion.div>
          </div>
          <p className="mt-2 text-gray-600 mx-auto md:my-6">
            a <strong className="text-3xl">💥Full-stack</strong> Developer &{" "}
            <strong className="text-3xl">Designer</strong>
          </p>
        </div>

        <div className="inline-block align-bottom bg-gray-700 p-5 rounded md:hidden hover:bg-red-200 text-white animate-bounce">
          <Link to="/portfolio">
            <span>PORTFOLIO</span>
          </Link>
        </div>
      </motion.div>

      <motion.div className="items-center justify-center w-full md:w-1/2 rightSide column hidden md:flex">
        <motion.div
          animate={{ opacity: 0.1, scale: 1, type: "spring", x: 200 }}
          initial={{ scale: 2, x: 200 }}
          transition={{ type: "spring", restSpeed: 0.1 }}
          className="box1 hover:bg-red-500 box"
          whileHover={{ scale: 2 }}
        >
          <FaBed size="3em" />
        </motion.div>
        <motion.div
          animate={{ opacity: 0.3, scale: 1, type: "tween", x: 40 }}
          initial={{ scale: 2, x: 200 }}
          transition={{ type: "tween", restSpeed: 0.2 }}
          className="box2 hover:bg-red-600 box"
          whileHover={{ scale: 2 }}
        >
          <IoFastFood size="3em" />
        </motion.div>
        <motion.div
          animate={{ opacity: 0.2, scale: 1, type: "spring", x: 100 }}
          initial={{ scale: 2, x: 200 }}
          transition={{ type: "spring", restSpeed: 0.3 }}
          className="box3 hover:bg-red-700 box"
          whileHover={{ scale: 2 }}
        >
          <IoCodeSlashSharp size="3em" />
        </motion.div>
        <Link to={"/portfolio"}>
          <motion.h2
            className="md:text-4xl p-3 font-light text-left text-white titleText"
            initial={{ fontSize: "80px", backgroundColor: "transparent" }}
            variants={buttonVar}
            transition={{ type: "spring", stiffness: 50, restSpeed: 0.5 }}
            whileHover="hover"
            animate={{
              color: "#ffffff",
              fontSize: "36px",
              type: "spring",
            }}
          >
            PORTFOLIO
          </motion.h2>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
