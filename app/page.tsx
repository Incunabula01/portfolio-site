"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import Particles from "./components/particles";
import { Card } from "./components/card";
import { ChevronDown } from "lucide-react";
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import Image from "next/image";

import { allPages } from '@/.contentlayer/generated';
import { Mdx } from "./components/mdx";

interface NavConfig {
  name: string;
  href: string;
}
interface IconConfig {
  name: string;
  component: IconType;
}

const navigation: NavConfig[] = [
  { name: "Projects", href: "/projects" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

const icons: IconConfig[] = [
  { name: 'HTML5', component: FaHtml5 },
  { name: 'CSS3', component: FaCss3Alt },
  { name: 'JavaScript', component: IoLogoJavascript },
  { name: 'TypeScript', component: SiTypescript },
  { name: 'React', component: FaReact },
  { name: 'GitHub', component: FaGithub },
];

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const router = useRouter();
  const handleNav = () => {
    router.push('/projects');
  }

  const getPage = allPages.find(el => el.title === 'about-me');
  return (
    <>
      <section className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-[#0F172A] via-cyan-900 from-[#0F172A]">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-cyan-500 hover:text-cyan-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-cyan-300/0 via-cyan-300/50 to-cyan-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={1000}
        />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-amber-50 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Joe Widener
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-cyan-300/0 via-cyan-300/50 to-cyan-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-xl text-cyan-500 ">
            UI/UX Developer
          </h2>
        </div>
        <div className="animate-fade-in">
          <Card>
            <div onClick={() => handleScroll()} className="cursor-pointer p-2 md:p-4 text-cyan-300">
              <ChevronDown className="w-8 h-8 " />
            </div>

          </Card>
        </div>

      </section>
      <section className="flex flex-col items-center justify-center w-screen bg-amber-50">
        <div ref={targetRef} className="md:flex md:flex-row">
          <div className="p-12 md:p-24 flex flex-col gap-8  items-center w-full md:w-1/2">
            <Image src="/profile.jpg"
              width={300}
              height={300}
              alt="profile image"
              className="rounded-full"
            />
            <Mdx code={getPage?.body.code ?? ''} />
          </div>

          <div className="relative my-14 hidden md:block">
            <div className="absolute inset-y-0 left-0 bg-cyan-500 w-px"></div>
          </div>
          <div className="md:hidden mx-7">
            <hr className="bg-cyan-500 w-full h-px" />
          </div>

          <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4">
            <div className="py-4">
              <h2 className="text-xl text-cyan-600">My Tech Stack:</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {icons.map((icon, index) => {
                const IconComponent = icon.component;
                return (
                  <Card key={icon.name}>
                    <div className="p-2 md:p-4 text-cyan-600" title={icon.name}>
                      <IconComponent key={index} className="w-24 h-24" />
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-4">
          <div className="text-cyan-500 md:translate-x-0.5">
            <ChevronDown className="w-8 h-8 " />
          </div>
        </div>


      </section>
      <div className="flex items-center justify-center py-8">
        <Card>
          <div onClick={() => handleNav()} className="cursor-pointer p-2 md:p-4 text-cyan-300">
            <p className="text-cyan-400">Learn More</p>
          </div>

        </Card>
      </div>
    </>


  );

}
