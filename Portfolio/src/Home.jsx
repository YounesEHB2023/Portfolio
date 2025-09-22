import React from "react";
import Long from "./assets/images/ShapeLong.png";
import Arrow from "./assets/images/arrow_shape.png";
import Star from "./assets/images/shape_star.png";
import Coin from "./assets/images/shape_coin.png";
import "./App.css";

const Home = () => (
	<div className="portfolio-bg" id="home">
		<img className="image" src={Long} alt="Long Shape" />
		<img className="image" src={Arrow} alt="Arrow" />
		<img className="image" src={Star} alt="Star" />
		<img className="image" src={Coin} alt="Coin" />
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

export default Home;
