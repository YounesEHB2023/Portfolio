import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";
import "./App.css";

import Long from "./assets/images/ShapeLong.png";
import leglift from "./assets/images/leglift.png";
import navisgo from "./assets/images/navisgo.png";
import affiche from "./assets/images/affiche.png";

function BrandingCard({ image, title, description, programs }) {
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
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			viewport={{ once: true }}
		>
			<animated.div
				className="branding-project"
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
			>
				<img src={image} alt={title} className="project-img" />
				<h3>{title}</h3>
				<p>{description}</p>
				<div className="project-programs">
					{programs.map((tool, index) => (
						<span key={index}>{tool}</span>
					))}
				</div>
			</animated.div>
		</motion.div>
	);
}

function Branding() {
	return (
		<section className="branding-section" id="branding">
			<div className="branding-bg">
				<motion.img
					src={Long}
					alt="Curve"
					className="branding-curve"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
				/>
				<motion.h2
					className="branding-title"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					Branding
				</motion.h2>
			</div>

			<div className="branding-projects">
				<BrandingCard
					image={leglift}
					title="Leglift"
					description="A logo for a leg excercises website that I made for my first full stack website."
					programs={["Photoshop", "Illustrator", "Visual Studio Code"]}
				/>
				<BrandingCard
					image={navisgo}
					title="Navisgo"
					description="A logo that I made for a solution app for visually impaired people."
					programs={["Figma", "Illustrator"]}
				/>
				<BrandingCard
					image={affiche}
					title="Flash Vision"
					description="A poster that I made for a fictional website for an imaginary product."
					programs={["XD", "Photoshop"]}
				/>
			</div>
		</section>
	);
}

export default Branding;
