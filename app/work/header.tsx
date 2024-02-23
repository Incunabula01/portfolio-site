"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	work: {
		title: string;
		date: string;
	};
};

export const Header: React.FC<Props> = ({ work }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);



	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={ref}
			className="relative isolate overflow-hidden bg-gradient-to-t  from-cyan-900 from-[#0F172A]"
		>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${isIntersecting
					? "bg-cyan-900/0 border-transparent"
					: "bg-white/10  border-cyan-200 lg:border-transparent"
					}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{/* Todo: Download Resume Link */}
					</div>

					<Link
						href="/projects"
						className={`duration-200 hover:font-medium ${isIntersecting
							? " text-cyan-400 hover:text-cyan-100"
							: "text-cyan-600 hover:text-cyan-900"
							} `}
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
			<div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h1 className="text-4xl font-bold  text-white sm:text-6xl font-display capitalize">
							{work.title}
						</h1>
						<p className="mt-6 text-lg leading-8 text-cyan-300">
							{`Last updated: ${Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
								new Date(work.date),
							)}`}
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};
