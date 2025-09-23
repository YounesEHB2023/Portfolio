import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import "./App.css";

// Import your 2 coding project images
import coding1 from "./assets/images/code1.png";
import coding2 from "./assets/images/code2.png";
function CodingCard({ image, title, description }) {
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
			initial={{ opacity: 0, y: 50 }}
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
			<p className="coding-desc">{description}</p>
		</motion.div>
	);
}

function Coding() {
	return (
		<section className="coding-section" id="coding">
			<motion.h2
				className="coding-title"
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
			>
				Coding Projects
			</motion.h2>

			<div className="coding-grid">
				<CodingCard
					image={coding1}
					title="Freelancer Platform"
					description="A responsive platform concept where users can showcase their work and connect with clients."
				/>
				<CodingCard
					image={coding2}
					title="Aladdin Website"
					description="A themed project showcasing animations and storytelling on the web."
				/>
			</div>
		</section>
	);
}

export default Coding;
