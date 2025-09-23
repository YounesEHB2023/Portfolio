import React from "react";
import "./App.css";
import Long from "./assets/images/ShapeLong.png";
import leglift from "./assets/images/leglift.png";
import navisgo from "./assets/images/navisgo.png";
import affiche from "./assets/images/affiche.png";

function Branding() {
	return (
		<section className="branding-section" id="branding">
			<div className="branding-bg">
				<img src={Long} alt="Curve" className="branding-curve" />
				<h2 className="branding-title">Branding</h2>
			</div>
			<div className="branding-projects">
				<div className="branding-project">
					<img src={leglift} alt="Project 1" className="project-img" />
					<h3>Leglift</h3>
					<p>
						A logo for a leg excercises website that i made for my first full
						stack website.
					</p>
					<div className="project-programs">
						<span>Photoshop</span>
						<span>Illustrator</span>
						<span>Visual studio code</span>
					</div>
				</div>
				<div className="branding-project">
					<img src={navisgo} alt="Project 2" className="project-img" />
					<h3>Navisgo</h3>
					<p>
						A logo that i made for a solution app for visually impaired people.
					</p>
					<div className="project-programs">
						<span>Figma</span>
						<span>Illustrator</span>
					</div>
				</div>
				<div className="branding-project">
					<img src={affiche} alt="Project 3" className="project-img" />
					<h3>Flash Vision </h3>
					<p>
						A poster that i made for a fictional website for a imaginary
						product.
					</p>
					<div className="project-programs">
						<span>XD</span>
						<span>Photoshop</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Branding;
