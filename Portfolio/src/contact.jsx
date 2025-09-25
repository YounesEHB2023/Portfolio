import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";
import "./App.css";
function Contact() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);

	const fadeIn = useSpring({
		from: { opacity: 0, transform: "translateY(40px)" },
		to: { opacity: 1, transform: "translateY(0px)" },
		config: { tension: 180, friction: 20 },
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 3000);
		setForm({ name: "", email: "", message: "" });
	};

	return (
		<section className="contact-section" id="contact">
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="contact-title"
			>
				Contact Me
			</motion.h2>
			<animated.form
				style={fadeIn}
				className="contact-form"
				onSubmit={handleSubmit}
			>
				<input
					id="name"
					type="text"
					name="name"
					placeholder="Your Name"
					value={form.name}
					onChange={handleChange}
					required
				/>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Your Email"
					value={form.email}
					onChange={handleChange}
					required
				/>
				<textarea
					id="message"
					name="message"
					placeholder="Your Message"
					value={form.message}
					onChange={handleChange}
					required
				/>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					type="submit"
					className="contact-btn"
				>
					Send
				</motion.button>
				{submitted && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="contact-success"
					>
						Thank you! Your message has been sent.
					</motion.div>
				)}
			</animated.form>
		</section>
	);
}

export default Contact;
