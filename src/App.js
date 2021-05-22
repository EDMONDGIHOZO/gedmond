import "./shared/App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Page2 from "./components/page2.js";
import { AnimatePresence } from "framer-motion";

function App() {
  let location = useLocation();
  return (
    <div className="wrapper">
      <div className="main">
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route component={Home} path="/" exact />
            <Route component={Portfolio} path="/portfolio" exact />
            <Route component={Page2} path="/portfolio2" exact />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
