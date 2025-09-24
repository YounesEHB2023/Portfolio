import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import "./App.css";

import Me from "./assets/images/younes2.png";
import cube from "./assets/images/shape_cube.png";
import Long from "./assets/images/ShapeLong.png";
import long2 from "./assets/images/LongShape2.png";
import star from "./assets/images/shape_otherstar.png";
import softwares from "./assets/images/softwares.png";

function About() {
	const [props, set] = useSpring(() => ({
		transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
		config: { mass: 5, tension: 350, friction: 40 },
	}));

	const calc = (x, y, rect) => [
		-(y - rect.top - rect.height / 2) / 20,
		(x - rect.left - rect.width / 2) / 20,
	];

	const trans = (x, y) =>
		`perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(1.05)`;

	return (
		<section className="about-section" id="about">
			<img className="cube" src={cube} alt="Cube Shape" />
			<img className="long2" src={long2} alt="Long Shape" />

			<div className="about-grid">
				{/* Left Side */}
				<motion.div
					className="about-left"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8 }}
				>
					<div className="about-avatar">
						<animated.img
							className="avatarMe"
							src={Me}
							alt="Avatar"
							onMouseMove={(e) => {
								const rect = e.currentTarget.getBoundingClientRect();
								const [x, y] = calc(e.clientX, e.clientY, rect);
								set({ transform: trans(x, y) });
							}}
							onMouseLeave={() =>
								set({
									transform:
										"perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
								})
							}
							style={props}
						/>
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
				</motion.div>

				{/* Right Side */}
				<motion.div
					className="about-right"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<h1>Hello !</h1>
					<p>
						My name is Younes Ben Ali, a creative graphic designer, 3D artist,
						and coder with a strong eye for detail and a love for visual
						storytelling. I enjoy helping brands and entrepreneurs bring their
						ideas to life through unique and meaningful designs.
					</p>
					<p>
						I'm always open to new ideas and believe that the best results come
						from working together. Each project is a chance to learn, grow, and
						create something special.
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
							<img src={softwares} alt="Softwares" className="software" />
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default About;
