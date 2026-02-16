import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

import Home from "./Home";
import About from "./About";
import Branding from "./Branding";
import UiUx from "./UiUx";
import Coding from "./coding";
import ThreeD from "./ThreeD";
import Extras from "./Extras";
import Contact from "./contact";
import hamburgerIcon from "./assets/images/hamburger.png";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

function App() {
	const containerRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const smootherRef = useRef(null);

	useGSAP(() => {
		smootherRef.current = ScrollSmoother.create({
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
				const targetId = this.getAttribute('href');
				const target = document.querySelector(targetId);
				if (target) {
					if (smootherRef.current) {
						smootherRef.current.scrollTo(target, true, "top 80px");
					} else {
						gsap.to(window, {
							duration: 1.2,
							scrollTo: { y: target, offsetY: 80 },
							ease: "power3.out"
						});
					}
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
			<nav className="navbar">
				<a href="#home" className="nav-logo">
					<span className="logo-text">Y</span>
					<span className="logo-shine"></span>
				</a>
				<button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
					<img src={hamburgerIcon} alt="Menu" className="hamburger-icon" />
				</button>
				{menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
				<ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
					<li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
					<li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
					<li><a href="#branding" onClick={() => setMenuOpen(false)}>Branding</a></li>
					<li><a href="#uiux" onClick={() => setMenuOpen(false)}>UI/UX</a></li>
					<li><a href="#coding" onClick={() => setMenuOpen(false)}>Coding</a></li>
					<li><a href="#threeD" onClick={() => setMenuOpen(false)}>3D</a></li>
					<li><a href="#extras" onClick={() => setMenuOpen(false)}>Extra's</a></li>
					<li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
				</ul>
				<div className="nav-decoration"></div>
			</nav>
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<Home />
					<About />
					<Branding />
					<UiUx />
					<Coding />
					<ThreeD />
					<Extras />
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default App;
