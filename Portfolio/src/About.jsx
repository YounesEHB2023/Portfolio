import React from "react";
import "./App.css";
import Me from "./assets/images/younes2.png";
import cube from "./assets/images/shape_cube.png";
import Long from "./assets/images/ShapeLong.png";
import long2 from "./assets/images/LongShape2.png";
import star from "./assets/images/shape_otherstar.png";

function About() {
	return (
		<section className="about-section">
			<img className="cube" src={cube} alt="Cube Shape" />
			<img className="long2" src={long2} alt="Long Shape" />

			<div className="about-grid">
				<div className="about-left">
					<div className="about-avatar">
						<img className="avatarMe" src={Me} alt="Avatar" />
						<img className="MeUnderPicture" src={Long} alt="Long Shape" />
					</div>
					<div className="about-education">
						<div className="h2-star">
							<img src={star} alt="Star" className="star-icon" />
							<h2>Education</h2>
						</div>
						<p>
							Multimedia and Creative Technology student at Erasmus College at
							Campus Kaai in Brussels
						</p>
						<span className="about-years">2023-2026</span>
					</div>
					<div className="about-skills">
						<div className="h2-star">
							<img src={star} alt="Star" className="star-icon" />
							<h2>Skills</h2>
						</div>
						<ul className="skills-list">
							<li>Creative</li>
							<li>Organized</li>
							<li>Adaptable</li>
							<li>Graphic design</li>
							<li>Web development</li>
							<li>UX/UI design</li>
						</ul>
					</div>
				</div>
				<div className="about-right">
					<h1>Hello !</h1>
					<p>
						My name is Younes Ben Ali, a creative graphic designer, 3D artist,
						and coder with a strong eye for detail and a love for visual
						storytelling. I enjoy helping brands and entrepreneurs bring their
						ideas to life through unique and meaningful designs. Whether it's
						starting from scratch, modeling in 3D, or building on an idea, I aim
						to create work that feels right and looks great.
					</p>
					<p>
						I'm always open to new ideas and believe that the best results come
						from working together. Each project is a chance to learn, grow, and
						create something special. Together we can bring design, 3D and
						coding ideas to life in a way that truly stands out!
					</p>
					<div className="about-languages">
						<div className="h2-star">
							<img src={star} alt="Star" className="star-icon" />
							<h2>Languages</h2>
						</div>
						<ul>
							<li>
								Dutch <span>⭐⭐⭐⭐⭐</span>
							</li>
							<li>
								English <span>⭐⭐⭐⭐</span>
							</li>
							<li>
								French <span>⭐⭐⭐</span>
							</li>
							<li>
								Arabic <span>⭐⭐</span>
							</li>
						</ul>
					</div>
					<div className="about-softwares">
						<div className="h2-star">
							<img src={star} alt="Star" className="star-icon" />
							<h2>Softwares</h2>
						</div>
						<div className="software-icons">
							<span>Ps</span>
							<span>Ai</span>
							<span>Ae</span>
							<span>Pr</span>
							<span>VS</span>
							<span>JS</span>
							<span>Id</span>
							<span>Xd</span>
							<span>Figma</span>
							<span>Blender</span>
							<span>HTML</span>
							<span>CSS</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
