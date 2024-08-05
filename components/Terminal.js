"use client"

import { useRef, useState } from "react"
import CommandList from "./CommandList"
import FlyIn from "./FlyAnimation"

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
			<div
				className="ml-2"
				dangerouslySetInnerHTML={{ __html: command.content }}
			></div>
		</FlyIn>
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
			{selectedCommand && (
				<CommandDetails command={selectedCommand} />
			)}
		</div>
	)
}