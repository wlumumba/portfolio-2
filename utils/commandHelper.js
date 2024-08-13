const getContactContent = () => `
  <div class="flex justify-between">
    <p>GitHub</p>
    <a href="https://github.com/wlumumba" target="_blank" class="text-secondary">github/wlumumba</a>
  </div>
  <div class="flex justify-between">
    <p>LinkedIn</p>
    <a href="https://www.linkedin.com/in/wlumumba/" target="_blank" class="text-secondary">linkedin/wlumumba</a>
  </div>
`

export const COMMANDS = [
	{
		command: "about",
		description: "About Me",
		content: `
			Wycliff Lumumba currently works as a backend Software Developer for a global payments company.<br/><br/> He has more than ${new Date().getFullYear() - 2022} years of experience coding with Java, Python, Cloud Computing and building distributed systems for scale.<br/><br/> Outside of work, Wycliff enjoys 3D printing as a hobby, staying updated with the latest industry news, and connecting with aspiring developers. He is committed to continuous learning and is always looking for opportunities to expand his skill set.
		`,
	},
	{
		command: "projects",
		description: "Projects",
		projects: [
			{
				src: "/images/providers.jpeg",
				title: "StreamEZ Streaming Service",
				description: "An API-driven, dynamic web application designed to help users find which streaming platforms host their favorite movies and shows.",
			},
			{
				src: "/images/sorting.gif",
				title: "Algorithm Sorting Visualizer",
				description: "Developed a Java application for visualizing common sorting algorithms in real-time via Java",
			},
			{
				src: "/images/traffic.jpeg",
				title: "Traffic Simulator",
				description: "Visually demonstrated cars moving through road intersections using graph and stack data structures to reach their destination.",
			},
		],
	},
	{
		command: "education",
		description: "My Education",
		content:
			"Wycliff graduated with a Bachelor's degree in Computer Science from the University of Texas in 2022, with a focus on Software Engineering.<br/><br/> While pursuing his undergraduate degree, Wycliff enjoyed attending hackathons and participating in International Collegiate Programming Contests (ICPC).<br >",
	},
	{
		command: "skills",
		description: "My Tech Skills",
		content:
			"Wycliff is highly proficient working with Python, Java and C. Beyond that, his technical expertise includes the following technologies:<br/><br/><span class=\"text-secondary\">Languages: </span>Python, Java, C/C++, JavaScript, Bash, SQL, PHP, CSS<br /><span class=\"text-secondary\">Frameworks: </span>React, NodeJS, Express, Elasticsearch, Git, Jenkins, Nginx<br /><span class=\"text-secondary\">Database: </span>Redis, MongoDB, Postgres, mySQL, Aurora, DynamoDB",
	},
	{
		command: "contact",
		description: "Contact Me",
		content: getContactContent(),
	},
	{
		command: "blog",
		description: "See my blog",
		content: "Coming Soon!",
	},
	{
		command: "clear",
		description: "Clear terminal",
	},
]