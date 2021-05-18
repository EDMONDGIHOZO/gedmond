import React, {useRef} from "react";
import { motion } from 'framer-motion';



export default function Home() {

    const constraintsRef = useRef(null);

  return (
      <div className="flex flex-wrap content-center bg-gray-400 dark:bg-gray-800 w-full h-screen text-center md:flex-row">
              <motion.div
                  className="flex items-center justify-center bg-gray-200 w-full md:w-1/2 leftSide column">
                  <div className="max-w-lg transition-all ease-in-out duration-1000 transform translate-x-0 slide">
                      <div className="example-container">
                          <motion.div className="drag-area" ref={constraintsRef} />
                          <motion.div drag dragConstraints={constraintsRef}>
                              <motion.h1 animate={{ marginTop: 1, opacity: 1}} initial={{ marginTop:-400, opacity:0.2}}
                                         transition={{ type: "spring", delay:0.3, stiffness: 50, restSpeed: 0.5 }}
                                         className="text-2xl mb-4 transition duration-500 ease-in-out hover:text-gray-800 font-bold textShadow tracking-wide text-white dark:text-white md:text-7xl">
                                  EDMOND GIHOZO
                              </motion.h1>
                          </motion.div>
                      </div>
                      <p className="mt-2 text-gray-600 mx-auto md:my-6">
                          Javascript Developer - Full-Stack 💥✔
                      </p>
                  </div>
              </motion.div>

              <motion.div
                      className="flex items-center justify-center w-full md:w-1/2 rightSide column hidden md:flex">
                      <motion.div animate={{opacity:0.1, scale:1 , type:'spring', x:200}} initial={{scale:2 , x:200 }} transition={{ type: 'spring', restSpeed: 0.1 }} className='box1'></motion.div>
                      <motion.div animate={{opacity:0.3, scale:1 , type:'tween', x:40}} initial={{scale:2 , x:200 }} transition={{ type: 'tween', restSpeed: 0.2 }} className='box2'></motion.div>
                      <motion.div animate={{opacity:0.2, scale:1 , type:'spring', x:100}} initial={{scale:2 , x:200 }} transition={{ type: 'spring', restSpeed: 0.3 }} className='box3'></motion.div>
                      <motion.h2 className='md:text-4xl font-light text-left text-white titleText'
                                 initial={{fontSize:'80px'}}
                                 transition={{ type: 'spring', stiffness: 50, restSpeed: 0.5 }}
                                 animate={{
                                     color: '#ffffff', fontSize: '36px', type:'spring'
                                 }}>
                          PORTFOLIO
                      </motion.h2>
              </motion.div>
      </div>
  );
}
