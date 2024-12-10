"use client";

import gsap from "gsap";

import React, { useEffect, useRef } from "react";
import Menu from "./icons/menu";
import Book from "./icons/book";
import Projects from "./icons/projects";
import User from "./icons/user";
import Link from "next/link";
import localFont from "next/font/local";

const tiny7 = localFont({
  src: "../app/fonts/Tiny5-Regular.ttf",
  variable: "--font-tiny",
});

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .from(navRef.current, {
        y: -100, // Slide down from -100px

        opacity: 0, // Start with opacity 0
        duration: 1,
        ease: "power3.out",
        delay: 0.7,
      })
      .to(navRef.current, {
        y: 0, // Position at the original place
        opacity: 1, // Fully visible
        // Wait for 0.5 seconds before starting the animation
      });

    return () => {
      timeline.kill(); // Clean up on component unmount
    };
  }, []);

  return (
    <div className="z-50 fixed left-0 top-0 w-screen">
      <nav
        ref={navRef}
        className="bg-slate-400-200 md:mx-28  mx-20  mt-8 flex justify-between bg-violet-200/10 backdrop-blur-lg py-1 rounded-2xl"
      >
        <h1
          className={`inline-block text-4xl ${tiny7.className} font-mono text-slate-300/60  pl-6 py-1`}
        >
          JUNED
        </h1>
        <div className="md:pr-6 pr-3  gap-5 items-center text-md sm:text-xl font-bold md:flex hidden text-purple-50/70">
          <Link href="#about">
            <span className="inline-block pr-1">
              <Book />
            </span>
            About
          </Link>
          <Link href="#projects">
            <span className="inline-block pr-1">
              <Projects />
            </span>
            Projects
          </Link>
          <Link href="#contact">
            <span className="inline-block pr-1">
              <User />
            </span>
            Contact
          </Link>
        </div>
        <div className=" items-center pr-8 pb-1 opacity-90 md:hidden flex">
          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
