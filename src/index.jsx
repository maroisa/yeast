import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./style.css";

import Home from "./pages/Home";
import Desain from "./pages/Desain";
import Musik from "./pages/Musik";
import Puisi from "./pages/Puisi";
import Header from "./components/Header";

render(
	() => <Router>
		<Route path="/" component={Home} />
		<Route path="/desain/" component={Desain} />
		<Route path="/musik/" component={Musik} />
		<Route path="/puisi/" component={Puisi} />
	</Router>, 
	document.getElementById("root")
);
