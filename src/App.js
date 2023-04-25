import "./shared/App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

import { AnimatePresence } from "framer-motion";
import PayPage from "./components/PayPage";

function App() {
  let location = useLocation();
  return (
    <div className="wrapper">
      <div className="main">
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route component={Home} path="/" exact />
            <Route component={Portfolio} path="/portfolio" exact />
            <Route component={PayPage} path="/pay" exact />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
