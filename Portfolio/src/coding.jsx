import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import coding1 from "./assets/images/code1.png";
import coding2 from "./assets/images/code2.png";
import "./App.css";

function CodingCard({ image, title, description, tools }) {
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
			className="coding-card"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6 }}
		>
			<animated.div
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
				<img src={image} alt={title} className="coding-img" />
			</animated.div>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className="coding-tools">
				{tools.map((tool, i) => (
					<span key={i}>{tool}</span>
				))}
			</div>
		</motion.div>
	);
}

function Coding() {
	return (
		<section className="coding-section" id="coding">
			<motion.h2
				className="coding-title"
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				Coding Projects
			</motion.h2>

			<div className="coding-grid">
				<CodingCard
					image={coding1}
					title="Portfolio Website"
					description="A fully responsive portfolio website built with React."
					tools={[
						"Illustrator",
						"Photoshop",
						"HTML",
						"CSS",
						"JavaScript",
						"Render",
						"MongoDB",
						"Express",
						"NodeJS",
					]}
				/>
				<CodingCard
					image={coding2}
					title="Interactive Web App"
					description="An interactive application featuring animations and dynamic UI."
					tools={[
						"Illustrator",
						"Photoshop",
						"HTML",
						"CSS",
						"JavaScript",
						"React",
						"Framer Motion",
						"Vite",
					]}
				/>
			</div>
		</section>
	);
}

export default Coding;
