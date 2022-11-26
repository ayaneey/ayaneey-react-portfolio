import React from "react";

function Title() {
	return (
		<>
			<div class="container">
				<img
					class="me"
					src="./assets/images/new-pic.png"
					alt="myself"
					height="500"
					width="400"
				/>
			</div>

			<div class="text-box">
				<p>I'M</p>
				<h1>AYAN</h1>
				<h3>A SOFTWARE DEVELOPER</h3>

				<div class="row">
					<a href="./assets/images/Ayan Ahmed - CV 2022.pdf" Download>
						Download my CV
					</a>
					<a href="connect.html">
						Connect With Me <span>&#x27F6; </span>
					</a>
				</div>
			</div>
		</>
	);
}
export default Title;
