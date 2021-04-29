import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Post from "./components/Post";
import Blog from "./components/Blog";
import Navbar from "./layouts/NavBar";
import Footer from "./layouts/Footer";

function App() {
  const [cursorX, setCursorX] = useState(null);
  const [cursorY, setCursorY] = useState(null);

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <div className="wrapper">
      <div className="particles">
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <div className="main">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={Blog} path="/blog" />
            <Route component={Post} path="/post/:slug" />
            <Route component={Portfolio} path="/portfolio" />
          </Switch>
          <div className="cursor" style={{ left: cursorX, top: cursorY }}></div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
