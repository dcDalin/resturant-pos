import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Products from "./layouts/Products";
import * as routes from "./Routes";

function App() {
	return (
		<Router>
			<Switch>
				<Route path={routes.PRODUCTS} component={Products} />
				<Route exact path={routes.HOME} component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
