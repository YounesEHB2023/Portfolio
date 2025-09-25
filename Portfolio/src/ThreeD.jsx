import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import threeD1 from "./assets/images/house.jpg";
import threeD2 from "./assets/images/patrick.jpg";
import threeD3 from "./assets/images/3d.png";
import "./App.css";

function ThreeDCard({ image, title, description, tools }) {
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
			className="threeD-card"
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
				<img src={image} alt={title} className="threeD-img" />
			</animated.div>
			<h3>{title}</h3>
			<p className="threeD-desc">{description}</p>
			<div className="threeD-tools">
				{tools.map((tool, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.2 }}
					>
						{tool}
					</motion.span>
				))}
			</div>
		</motion.div>
	);
}

function ThreeD() {
	return (
		<section className="threeD-section" id="3d">
			<img src={threeD3} alt="3D Shape" className="three-shape" />
			<motion.h2
				className="threeD-title"
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
			>
				3D Projects
			</motion.h2>

			<div className="threeD-grid">
				<ThreeDCard
					image={threeD1}
					title="Futuristic Laptop Render"
					description="A 3D render of a modern laptop setup with glowing effects."
					tools={["Blender", "Substance Painter", "Photoshop"]}
				/>
				<ThreeDCard
					image={threeD2}
					title="Stylized Scene"
					description="A creative 3D environment inspired by storytelling concepts."
					tools={["Cinema4D", "After Effects", "Illustrator"]}
				/>
			</div>
		</section>
	);
}

export default ThreeD;
