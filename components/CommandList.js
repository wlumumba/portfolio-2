import React from "react"
import { COMMANDS } from "../utils/commandHelper"

function CommandItem({ command, description }) {
	return (
		<div className="flex justify-between">
			<p className="text-sm">{command}</p>
			<p>{description}</p>
		</div>
	)
}

export default function CommandList() {
	return (
		<div>
			<div className="flex items-center space-x-2 mb-1">
				<span className="text-[#ff9e64]">λ</span>
				<span>::</span>
				<span className="text-primary">~</span>
				<span className="text-secondary">&gt;&gt;</span>
                <span>/options</span>
			</div>
			<div className="flex flex-col ml-1">
				{COMMANDS.map(command => (
					<CommandItem
						key={command.command}
						command={command.command}
						description={command.description}
					/>
				))}
				<br />
				<div>
					Select an option above to{" "}
					<span className="text-secondary">expand.</span>
				</div>
			</div>
		</div>
	)
}
