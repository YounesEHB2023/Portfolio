import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";
import "./App.css";

// Import your 3 UI/UX design images
import uiux1 from "./assets/images/grow.png";
import uiux2 from "./assets/images/design.png";
import uiux3 from "./assets/images/fullprojects.png";
import phone1 from "./assets/images/phone1.png";
import phone2 from "./assets/images/phone2.png";
function PhoneCard({ image, title, description }) {
	const [props, set] = useSpring(() => ({
		transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
		config: { mass: 5, tension: 350, friction: 40 },
	}));

	const calc = (x, y, rect) => [
		-(y - rect.top - rect.height / 2) / 8,
		(x - rect.left - rect.width / 2) / 8,
	];

	const trans = (x, y) =>
		`perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(1.05)`;

	return (
		<animated.div
			className="phone-card"
			onMouseMove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				const [x, y] = calc(e.clientX, e.clientY, rect);
				set({ transform: trans(x, y) });
			}}
			onMouseLeave={() =>
				set({
					transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
				})
			}
			style={props}
		>
		<img src={image} alt={title} className="phone-img" />
			<h3 className="chrome-text">{title}</h3>
			<p className="phone-desc">{description}</p>
		</animated.div>
	);
}

function UiUx() {
	const [showShine, setShowShine] = useState(false);

	return (
		<section className="branding-section" id="uiux">
			<div className="branding-bg">
				{/* <img src={uiux} alt="Curve" className="ui-bg" /> */}
				<motion.h2 
					className={`branding-title chrome-text ${showShine ? "play-shine" : ""}`}
					onViewportEnter={() => setShowShine(true)}
					viewport={{ once: true }}
				>
					UI/UX Projects
				</motion.h2>
				<div className="ui-projects">
					<PhoneCard
						image={uiux1}
						title="Calmify App"
						description="A mindfulness app that helps users manage stress with breathing exercises and guided sessions."
					/>
					<PhoneCard
						image={uiux2}
						title="Navigation App"
						description="A application that serves as navigation for visually impaired people."
					/>
					<PhoneCard
						image={uiux3}
						title="BIFFF guide"
						description="A seperate app for the Brussels International Fantastic Film Festival (BIFFF) to help users navigate the event."
					/>
					<PhoneCard
						image={phone1}
						title="Music Player App"
						description="A music player app where creativity has launched itself to a unique design!"
					/>
				</div>
			</div>
		</section>
	);
}

export default UiUx;
