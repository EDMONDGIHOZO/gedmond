import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";
import Home from "./components/Home";



function App() {
  return (
    <div className="wrapper">
      <div className="particles">
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <div className="main">
        <BrowserRouter>
          <Switch>
            <Route component={Home} path="/" exact />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
