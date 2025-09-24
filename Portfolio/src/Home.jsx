import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import Long from "./assets/images/ShapeLong.png";
import Arrow from "./assets/images/arrow_shape.png";
import Star from "./assets/images/shape_star.png";
import Coin from "./assets/images/shape_coin.png";
import "./App.css";

const float = (x, y) =>
	useSpring({
		from: { transform: `translateY(${x}px)` },
		to: { transform: `translateY(${y}px)` },
		loop: { reverse: true },
		config: { duration: 4000 },
	});

const Home = () => {
	const float1 = float(0, -30);
	const float2 = float(0, 20);

	return (
		<motion.div
			className="portfolio-bg"
			id="home"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<animated.img
				className="image"
				src={Long}
				alt="Long Shape"
				style={float1}
			/>
			<animated.img className="image" src={Arrow} alt="Arrow" style={float2} />
			<animated.img className="image" src={Star} alt="Star" style={float1} />
			<animated.img className="image" src={Coin} alt="Coin" style={float2} />

			<motion.div
				className="portfolio-content"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3 }}
			>
				<motion.h1
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
				>
					Portfolio
				</motion.h1>
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9 }}
				>
					Multimedia & Creative Technology <br />
					Student – Designer & Coder
				</motion.h2>
			</motion.div>
		</motion.div>
	);
};

export default Home;
