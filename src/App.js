import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Navbar from "./layouts/NavBar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={About} path="/about" />
				<Route component={Portfolio} path="/portfolio" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
