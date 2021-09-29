import React from 'react'

const Home = () => {
  const navigate = (section) => {
    window.location.replace(`/#${section}`)
  }

  return (
    <div className="main-wrapper">
      {/* header container */}
      <div className="header-container">
        <div className="logo-container">
          <img src="/logo.svg" alt="G" />
        </div>
        <div className="menu-links-container">
          <ul>
            <li onClick={() => navigate('about')}>about me</li>
            <li>experience</li>
            <li>work</li>
            <li>contact</li>
          </ul>
        </div>
      </div>

      {/* middle contents container  */}
      <div className="middle-container">
        <div className="introduction-container">
          <p>Hi, my name is </p>
          <h2>EDMOND GIHOZO</h2>
          <h3>Fullstack Developer & UX/UI Designer </h3>
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
            <p>
              I enjoy creating things that live on internet , my interest on web
              development started by in 2014, when i liked yo creating things
              using html, fast forward to today i’ve had privillage of working
              as web developer consultant for different companies. my focus
              today is building accessible , inclusive products and digital
              experience that can be useful in society.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
