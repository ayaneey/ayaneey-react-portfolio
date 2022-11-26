import React from "react";
// import LogoImage from "/assets/images/logo-no-background.png";

function Header() {
	return (
		<>
			<header style={{ border: "1px solid black" }}>
				<a href="#" class="logo">
					<img
						src="/assets/images/logo-no-background.png"
						height="120"
						width="155"
						alt="ayan-logo"
					/>
				</a>
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
					</ul>
				</nav>
			</header>
		</>
	);
}
export default Header;
