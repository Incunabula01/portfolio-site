export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-cyan-900 via-cyan-400/10 to-cyan-900 ">
			{children}
		</div>
	);
}
