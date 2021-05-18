import "./shared/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {

  return (
    <div className="wrapper">
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
