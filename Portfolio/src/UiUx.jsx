import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./App.css";

// Import your 3 UI/UX design images
import uiux1 from "./assets/images/grow.png";
import uiux2 from "./assets/images/design.png";
import uiux3 from "./assets/images/fullprojects.png";

function PhoneCard({ image, title, description }) {
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
			<h3>{title}</h3>
			<p className="phone-desc">{description}</p>
		</animated.div>
	);
}

function UiUx() {
	return (
		<section className="branding-section" id="uiux">
			<div className="branding-bg">
				<h2 className="branding-title">UI/UX Projects</h2>
				<div className="ui-projects">
					<PhoneCard
						image={uiux1}
						title="Calmify App"
						description="A mindfulness app that helps users manage stress with breathing exercises and guided sessions."
					/>
					<PhoneCard
						image={uiux2}
						title="Journaling UI"
						description="A journaling interface designed for simplicity, making it easy for users to brain-dump and track emotions."
					/>
					<PhoneCard
						image={uiux3}
						title="Wireframe Design"
						description="Low-fidelity wireframe for early user testing, focusing on navigation and user flows."
					/>
				</div>
			</div>
		</section>
	);
}

export default UiUx;
