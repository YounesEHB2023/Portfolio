import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import warninVideo from "./assets/images/warnin.mp4";
import xenonVideo from "./assets/images/xenon.mp4";
import samuraiVideo from "./assets/images/samurai.mp4";
import keyboardImg from "./assets/images/keyboard.png";
import objectDesignImg from "./assets/images/objectDesign.png";
import miniRoomImg from "./assets/images/miniRoom.png";
import gameImg from "./assets/images/game.png";
import "./App.css";

function ExtraCard({ video }) {
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
			className="extra-card"
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
				<video
					src={video}
					className="extra-video"
					autoPlay
					loop
					muted
					playsInline
				/>
			</animated.div>
		</motion.div>
	);
}

function ExtraImageCard({ image, link }) {
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
			className="extra-card"
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
				<a href={link} target="_blank" rel="noopener noreferrer">
					<img src={image} alt="" className="extra-image" />
				</a>
			</animated.div>
		</motion.div>
	);
}

function Extras() {
	const [showShine, setShowShine] = useState(false);
	const gridRef = useRef(null);

	const scroll = (direction) => {
		if (gridRef.current) {
			const scrollAmount = 320;
			gridRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="extras-section" id="extras">
			<motion.h2
				className={`extras-title chrome-text ${showShine ? "play-shine" : ""}`}
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
				onViewportEnter={() => setShowShine(true)}
			>
				Extra's
			</motion.h2>

			<div className="extras-grid" ref={gridRef}>
				<ExtraCard video={warninVideo} />
				<ExtraCard video={xenonVideo} />
				<ExtraCard video={samuraiVideo} />
				<ExtraImageCard
					image={keyboardImg}
					link="https://my.spline.design/untitled-S6jJTppLiXhxoSmzdm14LH0U/"
				/>
				<ExtraImageCard
					image={objectDesignImg}
					link="https://my.spline.design/objectdesign-ZKTkbxHbuXBSe4NYmAojdSF9/"
				/>
				<ExtraImageCard
					image={miniRoomImg}
					link="https://my.spline.design/expertlab-cA5QxvOge085M6EDPCW0gZoG/"
				/>
				<ExtraImageCard
					image={gameImg}
					link="https://my.spline.design/gamespline-RaYehA3MgOIX0g7RA9vorcKV/"
				/>
			</div>

			<div className="extras-nav">
				<button onClick={() => scroll("left")}>&#8249;</button>
				<button onClick={() => scroll("right")}>&#8250;</button>
			</div>
		</section>
	);
}

export default Extras;
