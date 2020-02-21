import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../Routes";

const Home = () => {
	return <Link to={routes.PRODUCTS}>Products</Link>;
};

export default Home;
