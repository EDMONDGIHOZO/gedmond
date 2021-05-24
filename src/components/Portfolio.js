import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import Prismic from "@prismicio/client";

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

class Portfolio extends Component {
  state = {
    loaded: false,
    projectNumber: 2,
    all: 0,
    mainColor: "black",
  };

  apiEndpoint = "https://portfolio-eddy.cdn.prismic.io/api/v2";
  Client = Prismic.client(this.apiEndpoint);

  componentDidMount = async () => {
    const response = await this.Client.query(
      Prismic.Predicates.at("document.type", "project")
    );

    if (response) {
      this.setState({
        all: response.results.length,
        project: response.results[this.state.projectNumber].data,
        mainColor: response.results[this.state.projectNumber].data.color,
        loaded: true,
      });
    }
  };

  GoNext = () => {
    const current = this.state.projectNumber;
    const number = this.state.all - 1;

    if (current === number) {
      this.setState({
        loaded: false,
        projectNumber: 0,
      });
      this.componentDidMount();
    } else {
      this.setState({
        loaded: false,
        projectNumber: current + 1,
      });
      this.componentDidMount();
    }
  };

  render() {
    if (!this.state.loaded) {
      return (
        <div>
          <div className="loader h-screen text-center flex flex-center justify-center items-center p-4 space-y-10">
            <h3 className="m-4 text-4xl animate-pulse text-purple-700">
              {" "}
              Hey 😯 <span className="animate-ping">📡</span> , please wait!{" "}
              <span className="animate-ping">...</span>
            </h3>
          </div>
        </div>
      );
    }
    return (
      <motion.div
        variants={containerVarients}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-screen"
      >
        <div className="p-0 md:flex w-full md:h-screen text-center md:flex-row bottom-0">
          <div
            // className={`side md:h-screen bg-${this.state.mainColor} p-4 top-0 w-full md:w-1/4`}
            className={`side md:h-screen bg-${this.state.mainColor} p-4 top-0 w-full md:w-1/4`}
          >
            <Link to={"/"}>
              <div className="backBtn box w-14 h-14 ">
                <BsArrowLeft size="2em" className="hover:scale-50 text-white" />
              </div>
            </Link>

            <div className="info md:-mx-4">
              <span className="font-light"> Owner:</span>
              <span className="text-2md font-bold">
                {" "}
                {this.state.project.owner_name}{" "}
              </span>
              <span className="font-light"> Category:</span>
              <span className="text-md  font-bold">
                {" "}
                {this.state.project.category}{" "}
              </span>
              <span className="font-light"> Stack:</span>
              <span className="text-md font-bold">
                {this.state.project.proroject_stacks}
              </span>

              <a
                href={this.state.project.project_location.url}
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-md font-bold animate-pulse">view</span>
              </a>
            </div>
          </div>

          <div className=" md:h-screen bg-white w-full md:w-3/4 cont">
            <div className="screen h-full md:border-white border-solid border-l-2  shadow-4md">
              <div
                className={`project-title-container p-5 text-left bg-${this.state.mainColor}`}
              >
                <h3 className="text-2sm md:text-4xl text-white align-left">
                  {this.state.project.project_name}
                </h3>
                <div className="text-white px-6 divide-white border-l-2 border-solid hover:bg-black p-4 transition-all">
                  <button onClick={() => this.GoNext()}>
                    <span className="font-bold">Next Project</span>
                  </button>
                </div>
              </div>

              <div className="project-content overflow-scroll">
                <motion.div
                  animate={{ width: "100%" }}
                  initial={{ width: "30%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="image flex content-center align-center p-1"
                >
                  <img
                    src={this.state.project.main_image.url}
                    alt="project"
                    className="md:w-full rounded shadow-2md"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Portfolio;
