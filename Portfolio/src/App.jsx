import React from "react";
import "./App.css"; // Create this file for custom styles

import Home from "./Home";
import About from "./About";
import Branding from "./Branding";
import UiUx from "./UiUx";
import Coding from "./coding";
import ThreeD from "./ThreeD";
import Contact from "./contact";
function App() {
	return (
		<div>
			{/* Navigation */}
			<nav className="navbar">
				<ul>
					<li>
						<a href="#branding">Branding</a>
					</li>
					<li>
						<a href="#uiux">UI/UX</a>
					</li>
					<li>
						<a href="#coding">Coding</a>
					</li>
					<li>
						<a href="#3d">3D</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
			<Home />
			<About />
			<Branding />
			<UiUx />
			<Coding />
			<ThreeD />
			<Contact />
		</div>
	);
}

export default App;
