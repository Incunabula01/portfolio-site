// @ts-nocheck
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import { useMDXComponent } from "next-contentlayer/hooks";

function clsx(...args: any) {
	return args.filter(Boolean).join(" ");
}

const htmlElements = {
	h1: ({ className, ...props }) => (
		<h1
			className={clsx(
				"mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h2: ({ className, ...props }) => (
		<h2
			className={clsx(
				"mt-10 scroll-m-20 border-b border-b-cyan-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
				className,
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }) => (
		<h3
			className={clsx(
				"mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }) => (
		<h4
			className={clsx(
				"mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }) => (
		<h5
			className={clsx(
				"mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }) => (
		<h6
			className={clsx(
				"mt-8 scroll-m-20 text-base font-semibold tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	a: ({ className, ...props }) => (
		<Link
			className={clsx(
				"font-medium text-cyan-900 underline underline-offset-4",
				className,
			)}
			{...props}
		/>
	),
	p: ({ className, ...props }) => (
		<p
			className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)}
			{...props}
		/>
	),
	ul: ({ className, ...props }) => (
		<ul className={clsx("my-6 ml-6 list-disc", className)} {...props} />
	),
	ol: ({ className, ...props }) => (
		<ol className={clsx("my-6 ml-6 list-decimal", className)} {...props} />
	),
	li: ({ className, ...props }) => (
		<li className={clsx("mt-2", className)} {...props} />
	),
	blockquote: ({ className, ...props }) => (
		<blockquote
			className={clsx(
				"mt-6 border-l-2 border-cyan-300 pl-6 italic text-cyan-800 [&>*]:text-cyan-600",
				className,
			)}
			{...props}
		/>
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={clsx("rounded-md border border-cyan-200", className)}
			alt={alt}
			{...props}
		/>
	),
	hr: ({ ...props }) => (
		<hr className="my-4 border-cyan-200 md:my-8" {...props} />
	),
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="w-full my-6 overflow-y-auto">
			<table className={clsx("w-full", className)} {...props} />
		</div>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr
			className={clsx(
				"m-0 border-t border-cyan-300 p-0 even:bg-cyan-100",
				className,
			)}
			{...props}
		/>
	),
	th: ({ className, ...props }) => (
		<th
			className={clsx(
				"border border-cyan-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	td: ({ className, ...props }) => (
		<td
			className={clsx(
				"border border-cyan-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	pre: ({ className, ...props }) => (
		<pre
			className={clsx(
				"mt-6 mb-4 overflow-x-auto rounded-lg bg-cyan-900 py-4",
				className,
			)}
			{...props}
		/>
	),
	code: ({ className, ...props }) => (
		<code
			className={clsx(
				"relative rounded border bg-cyan-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-cyan-600",
				className,
			)}
			{...props}
		/>
	),
	Image,
	JustifyText: ({ children }) => {
		const regex = /\(([^)]+)\)/;
		const matches = children.props.children.match(regex);
		const firstText = children.props.children.replace(regex, '').trim();
		const parenthesesText = `( ${matches[1].trim()} )`;
		const textArr = [firstText, parenthesesText];

		return (
			<div className="flex items-center flex-col lg:flex-row lg:justify-between">
				{textArr.map((txt, idx) => (
					<h3 key={`text-${idx}`} className="text-center scroll-m-20 text-2xl font-semibold tracking-tight lg:mt-4 lg:text-left">{txt}</h3>
				))}
			</div>
		);
	},
	ImageCarousel: ({ children }) => (

		<Carousel>
			{children.props.children}
		</Carousel>

	)
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const MDXComponent = useMDXComponent(code);

	return (
		<div className="mdx">
			<MDXComponent components={htmlElements} />
		</div>
	);
}
