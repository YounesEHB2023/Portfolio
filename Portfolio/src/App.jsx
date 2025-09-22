import React from "react";
import "./App.css"; // Create this file for custom styles

import Home from "./Home";
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

			
			{/* Branding Section */}
			<section id="branding" className="section">
				<h2>Branding</h2>
				<p>Showcase your branding projects here.</p>
			</section>

			{/* UI/UX Section */}
			<section id="uiux" className="section">
				<h2>UI/UX</h2>
				<p>Showcase your UI/UX projects here.</p>
			</section>

			{/* Coding Section */}
			<section id="coding" className="section">
				<h2>Coding</h2>
				<p>Showcase your coding projects here.</p>
			</section>

			{/* 3D Section */}
			<section id="3d" className="section">
				<h2>3D</h2>
				<p>Showcase your 3D projects here.</p>
			</section>

			{/* Contact Section */}
			<section id="contact" className="section">
				<h2>Contact</h2>
				<p>Let people reach out to you here.</p>
			</section>
		</div>
	);
}

export default App;
