import React from "react";
// import LogoImage from "/assets/images/logo-no-background.png";

function Header() {
	return (
		<>
			<header style={{ border: "1px solid black" }}>
				<nav>
					<ul>
						<li>
							<a href="#about-me">About Me</a>
						</li>

						<li>
							<a href="#projects-title"> Projects</a>
						</li>

						<li>
							<a href="#contact">Contact</a>
						</li>

						<li>
							<a
								href="./assets/images/Ayan Ahmed - CV 2022 without address.pdf"
								Download
							>
								Download CV
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
export default Header;
