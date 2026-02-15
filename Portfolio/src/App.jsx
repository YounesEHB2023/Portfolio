import React, { useEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";

import Home from "./Home";
import About from "./About";
import Branding from "./Branding";
import UiUx from "./UiUx";
import Coding from "./coding";
import ThreeD from "./ThreeD";
import Contact from "./contact";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
	const containerRef = useRef(null);

	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 1.5,
			effects: true,
		});
	}, { scope: containerRef });

	useEffect(() => {
		ScrollTrigger.defaults({
			toggleActions: "play none none reverse"
		});

		const sections = document.querySelectorAll("section[id]");
		const navLinks = document.querySelectorAll(".nav-links a");

		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const target = document.querySelector(this.getAttribute('href'));
				if (target) {
					gsap.to(window, {
						duration: 1.2,
						scrollTo: { y: target, offsetY: 80 },
						ease: "power3.out"
					});
				}
			});
		});

		const handleScroll = () => {
			const scrollY = window.scrollY;
			
			sections.forEach((section) => {
				const sectionHeight = section.offsetHeight;
				const sectionTop = section.offsetTop - 100;
				const sectionId = section.getAttribute("id");
				
				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					navLinks.forEach((link) => {
						link.classList.remove("active");
						if (link.getAttribute("href") === `#${sectionId}`) {
							link.classList.add("active");
						}
					});
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="main-wrapper" ref={containerRef}>
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<nav className="navbar">
						<a href="#home" className="nav-logo">
							<span className="logo-text">Y</span>
							<span className="logo-shine"></span>
						</a>
						<ul className="nav-links">
							<li><a href="#home">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#branding">Branding</a></li>
							<li><a href="#uiux">UI/UX</a></li>
							<li><a href="#coding">Coding</a></li>
							<li><a href="#3d">3D</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
						<div className="nav-decoration"></div>
					</nav>
					<Home />
					<About />
					<Branding />
					<UiUx />
					<Coding />
					<ThreeD />
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default App;
