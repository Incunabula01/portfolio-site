export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-t from-cyan-900 to-cyan-900/0 ">
			{children}
		</div>
	);
}
