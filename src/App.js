import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Post from "./components/Post";
import Blog from "./components/Blog";
import Navbar from "./layouts/NavBar";
import Footer from "./layouts/Footer";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={About} path="/about" />
				<Route component={Blog} path="/blog" />
				<Route component={Post} path="/post/:slug" />
				<Route component={Portfolio} path="/portfolio" />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
