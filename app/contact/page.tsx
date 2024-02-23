"use client";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:jwidener08@gmail.com",
		label: "Email",
		handle: "jwidener08@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/incunabula01",
		label: "Github",
		handle: "incunabula01",
	},
];

export default function Contact() {
	return (
		<div className=" bg-gradient-to-t from-cyan-900 to-cyan-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className={`grid w-full grid-cols-${socials.length} gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16`}>
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-cyan-200 group-hover:text-white group-hover:bg-cyan-900 border-cyan-500 bg-cyan-900 group-hover:border-cyan-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-cyan-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-cyan-400 group-hover:text-cyan-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
