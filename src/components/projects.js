import React from "react";

function Projects() {
	return (
		<>
			<div id="projects-title">
				<h1>Projects</h1>
			</div>

			<div class="project-image1">
				<a
					href="https://theinfamousgrim.github.io/ZenFoci-Lifestyle-App/"
					target="_blank"
				>
					<img
						src="./assets/images/project1.gif"
						height="630px"
						width="770px"
						alt="project"
					/>
				</a>
			</div>
			<div id="text1">
				<h1>
					A fully functioning app that focuses on creating a user-friendly
					service to allow users to document their fitness and well-being as
					well as offer meal-plans.
				</h1>
				<img
					id="badges"
					src="./assets/images/html_js_css-removebg-preview.png"
					height="100px"
					width="150px"
				/>
			</div>

			<div class="project-image2">
				<a href="https://ayaneey.github.io/Top-Work-Calendar/">
					<img
						id="pic2"
						src="./assets/images/calendar.png"
						height="630px"
						width="790px"
						alt="project"
					/>
				</a>
			</div>
			<div id="text2">
				<h1>
					A straight-forward work calendar that allows users to input and save
					events for different hours of the day.
				</h1>
				<img
					id="badges"
					src="./assets/images/html_js_css-removebg-preview.png"
					height="100px"
					width="150px"
				/>
			</div>

			<div class="project-image3">
				<a href="https://ayaneey.github.io/password-generator/" target="_blank">
					<img
						id="pic3"
						src="./assets/images/password.png"
						height="530px"
						width="800px"
						alt="project"
					/>
				</a>
			</div>
			<div id="text3">
				<h1>
					The password generator is user-interface friendly and accessible as
					well as being able to adapt to multiple screen sizes.
				</h1>
				<img
					id="badges"
					src="./assets/images/html_js_css-removebg-preview.png"
					height="100px"
					width="150px"
				/>
			</div>

			<div class="project-image4">
				<a
					href="https://www.youtube.com/watch?v=T66G0MaKgjs&t=52s&ab_channel=AyanAhmed"
					alt="youtube video"
					target="_blank"
				>
					<img
						id="pic4"
						src="./assets/images/node-js.png"
						height="230px"
						width="320px"
						alt="project"
					/>
				</a>
			</div>
			<div id="text4">
				<h1>
					This project is built using a node.js command line utility. This
					project gave me an insight into installing third-party modules like
					inquirer using npm but also incorporating things like GitHub badges!
				</h1>
			</div>

			<div class="project-image5">
				<a
					href="https://stark-beach-48560.herokuapp.com/"
					alt="TheFootWorks"
					target="_blank"
				>
					<img
						id="pic5"
						src="./assets/images/TheFootWorks.jpg"
						height="530px"
						width="800px"
						alt="project"
					/>
				</a>
			</div>
			<div id="text5">
				<h1>
					The Footworks is an e-commerce site dedicated to providing the latest,
					up-to-date quality shoes that are most sought after in the market!
				</h1>
			</div>

			<div class="mini">
				<div class="mini-projects">
					<h1>Mini Projects</h1>
				</div>
				<div class="mini-project1">
					<h1 id="mini-titles">Expanding Cards</h1>
					<h2 id="mini-texts">
						In this mini-project, I was able to create expanding cards with
						background images that expand upon selecting an image.
					</h2>
					<a href="https://ayaneey.github.io/Expanding-Cards/" target="_blank">
						<img
							id="mini1"
							src="./assets/images/Expanding Cards.png"
							height="400px"
							width="600px"
						/>
					</a>
				</div>

				<div class="mini-project2">
					<h1 id="mini-titles2">Progress Steps</h1>
					<h2 id="mini-texts2">
						In this mini-project, I was able to create a progress bar that
						starts at button 1 that will go to the next button and so forth.
						Once you get to the end, the 'next' button will be disabled.
					</h2>
					<a href="https://ayaneey.github.io/Project-Steps/" target="_blank">
						<img
							id="mini2"
							src="./assets/images/progress-steps.jpg"
							height="400px"
							width="600px"
						/>
					</a>
				</div>
			</div>
		</>
	);
}
export default Projects;
