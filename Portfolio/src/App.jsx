import React from "react";
import "./App.css"; // Create this file for custom styles

function App() {
	return (
		<div className="portfolio-bg">
			{/* Decorative shapes can be added as <img> or <div> with CSS */}
			<div className="star"></div>
			<div className="curve"></div>
			<div className="oval"></div>
			<div className="arrow"></div>
			<div className="portfolio-content">
				<h1>Portfolio</h1>
				<h2>
					Multimedia &amp; Creative Technology
					<br />
					Student – Designer &amp; Coder
				</h2>
			</div>
		</div>
	);
}

export default App;
