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
		content:
			`Wycliff Lumumba currently works as a backend Software Developer for a global payments company.<br/><br/> He has more than ${new Date().getFullYear() - 2022} years of experience coding with Java, Python, Cloud Computing and building distributed systems for scale.<br/><br/> Outside of work, Wycliff enjoys 3D printing as a hobby, staying updated with the latest industry news, and connecting with aspiring developers. He is committed to continuous learning and is always looking for opportunities to expand his skill set.`,
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
		command: "projects",
		description: "My Latest Projects",
	},
	{
		command: "contact",
		description: "Contact Me",
		content: getContactContent(),
	},
	{
		command: "blog",
		description: "Visit my blog",
	},
	{
		command: "clear",
		description: "Clear terminal",
	},
]



const getProjects = async () => {
	const projects = await (await fetch("/api/projects")).json()
	const projectHTML =
		`<h3>My Projects (You can scroll)</h3>` +
		projects
			.map(
				project => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
					project.name
				}</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
			)
			.join("")
	return projectHTML
}

const getContacts = async () => {
	const contactMediums = await (await fetch("/api/contacts")).json()
	return contactMediums
		.map(
			contact => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
		)
		.join("")
}

export const CONTENTS = {
	help: () =>
		COMMANDS.map(
			command => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
		).join("") +
		`<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
	about: () => `My name is Kavin. I am ${getAge(
		"December 25, 2005"
	)} and I\'m a fullstack web developer
    <br/><br/>
    I love coding in Javascript, Typescript and Python, and have worked with frameworks like ReactJS, VueJS, Express, and Django. I currently use NextJS, Laravel, and NodeJS in a lot of my projects.
    <br /><br />
    I am a former President of <a href="https://exunclan.com" target="_blank">Exun Clan</a> ('22-23). I am a freshman at <a href="https://uwaterloo.ca/content/home" target="_blank">University of Waterloo</a>.
    <br />
    I am also the Chapter Officer at the <a href="https://new-delhi-space-society.github.io" target="_blank">New Delhi Space Society</a>, a chapter of the <a href="https://space.nss.org" target="_blank">National Space Society</a>. I am a core maintainer of <a href="https://typewind.vercel.app" target="_new">Typewind</a>
  `,
	education: () =>
		`I am a high school graduate from <a href="https://dpsrkp.net" target="_blank">Delhi Public School, R.K. Puram</a> and a freshman at <a href="https://uwaterloo.ca/content/home" target="_blank">University of Waterloo</a>.`,
	skills: () => `
  I am experienced with Javascript, Typescript and Python and the web technologies dominating at the time:<br />
  <div class="skill"><b>core</b>: HTML, CSS, Node.js and PHP<br /></div>
  <div class="skill"><b>frameworks</b>: React, NextJS, Django, Express and Laravel<br /></div>
  <div class="skill"><b>database</b>: MongoDB, PostgreSQL, MySQL, and SQLite<br /></div>
  I also have knowledge of basic shell scripting and my dotfiles can be found <a href="https://github.com/kavinvalli/.dotfiles" target="_blank">here</a>.
<br /><br />
  I also have experience with Mobile Development with Flutter.
  `,
	projects: getProjects,
	contact: getContacts,
	resume: () => {
		window.open("https://kavin.me/resume.pdf", "_blank")
		return ""
	},
	error: input =>
		`<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
	blog: () => {
		window.open("https://livecode247.com", "_blank")
		return ""
	},
	youtube: () => {
		window.open("https://youtube.com/@livecode247", "_blank")
		return ""
	},
}

function getAge(dateString) {
	const today = new Date()
	const birthDate = new Date(dateString)

	let age = today.getFullYear() - birthDate.getFullYear()
	const m = today.getMonth() - birthDate.getMonth()
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--

	return age
}