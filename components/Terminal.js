"use client"

import { useRef, useState } from "react"
import CommandList from "./CommandList"
import FlyIn from "./FlyAnimation"
import { COMMANDS } from "../utils/commandHelper"

const CommandDetails = ({ command }) => (
	<div className="flex flex-col mt-4">
		<div className="flex items-center space-x-2 mb-2">
			<span className="text-[#ff9e64]">λ</span>
			<span>::</span>
			<span className="text-primary">~</span>
			<span className="text-secondary">&gt;&gt;</span>
			<span>/{command.command}</span>
		</div>

		<FlyIn key={command.command} delay={0}>
			{command.command === "projects" ? (
				<div className="flex flex-col items-center">
					{command.projects.map((project, index) => (
						<ImageWithTitleAndDescription
							key={index}
							src={project.src}
							title={project.title}
							description={project.description}
						/>
					))}
				</div>
			) : (
				<div
					className="ml-2"
					dangerouslySetInnerHTML={{ __html: command.content }}
				></div>
			)}
		</FlyIn>
	</div>
)

const ImageWithTitleAndDescription = ({ src, title, description }) => (
	<div className="flex flex-col items-center mt-4 mb-5">
		<img
			src={src}
			alt={title}
			className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto shadow-md shadow-gray-900"
		/>
		<h3 className="text-primary mt-2 text-lg font-semibold">{title}</h3>
		<p className="text-center text-sm">{description}</p>
	</div>
)

export default function Terminal() {
	const [selectedCommand, setSelectedCommand] = useState(null)
	const terminalRef = useRef(null)

	const handleCommandClick = command => {
		if (command.command !== "clear") {
			setSelectedCommand(command)
		} else {
			setSelectedCommand(null)
		}
	}

	return (
		<div
			className={
				"max-h-[calc(100vh-160px)] mb-5 overflow-y-scroll scrollbar-hide"
			}
			ref={terminalRef}
		>
			<CommandList onCommandClick={handleCommandClick} />
			{selectedCommand && <CommandDetails command={selectedCommand} />}
		</div>
	)
}
