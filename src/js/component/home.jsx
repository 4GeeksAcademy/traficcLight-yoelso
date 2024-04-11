import React from "react";
import { useState } from "react";
import { TraficcLight } from "./TraficcLight";

/*
 - Create a div that contain the traffict light structure
	- Create a component that have the traffict light
	- 

*/

//create your first component
const Home = () => {



	return (
		<div className="container d-flex flex-column align-items-center">
			<h2 className="display-4 fw-bolder"> Traffic Light </h2>
			<TraficcLight/>
		</div>
	);
};

export default Home;
