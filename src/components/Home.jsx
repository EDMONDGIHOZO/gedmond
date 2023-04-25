import React from 'react'
import Header from './header'

const Home = () => {
  return (
    <div className="main-wrapper">
      {/* header container */}
      <Header />

      {/* middle contents container  */}
      <div className="middle-container">
        <div className="introduction-container">
          <p>Hi, my name is </p>
          <h2>EDMOND GIHOZO</h2>
          <h3>Fullstack Developer </h3>
          <div className='langs'>
            <span>Typescript</span>
            <span>Python</span>
            <span>Swift</span>
            <span>Supabase</span>
          </div>
          <a
            className="get-intouch-button"
            href="mailto:gihozoedmond@gmail.com"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* separation before about me */}
        <div className="about-me-container" id="about">
          <h2>ABOUT ME</h2>
          <div className="about-text-container">
            <p>I enjoy creating things that live on internet , since 2017.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
