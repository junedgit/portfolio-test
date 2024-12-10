"use client";

import localFont from "next/font/local";
import Github from "@/components/icons/github";
import Twitter from "@/components/icons/twitter";
import Email from "@/components/icons/email";
import Rust from "./icons/rust";
import ReactLogo from "./icons/reactLogo";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: "../app/fonts/SaolDisplay-RegularItalic.woff2",
  variable: "--font-my-font",
});

const Hero = () => {
  const masRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.from("#sh", {
      y: 100,
      opacity: 0, // Start with opacity 0
      duration: 1.5,
      ease: "power1.out",
      delay: 0.5,
      stagger: 0.6,
    });

    timeline.from(masRef.current, {
      y: 10, // Slide down from -100px
      opacity: 0, // Start with opacity 0
      duration: 0.5,
      ease: "sine.in",
      delay: 0,
      stagger: 0.3,
    });

    gsap.from("#sdiv", {
      y: 100, // Slide down from -100px
      opacity: 0, // Start with opacity 0
      duration: 1,
      ease: "bounce.out",
      delay: 0.5,
      stagger: 0.3,
    });

    return () => {
      timeline.kill(); // Clean up on component unmount
    };
  }, []);

  return (
    <div className=" z-20 relative left-0 top-0 sm:h-dvh h-[60%] w-screen backdrop-blur-sm overflow-hidden">
      <div className="absolute md:top-[50%] top-[40%] left-8 sm:left-24  font-extrabold text-slate-50/90 ">
        <h1 id="sh" className=" font-sans sm:text-8xl text-5xl mb-3 sm:my-2  ">
          FullStack{" "}
          <span className="text-purple-200/80 font-mono">Developer</span>
        </h1>
        <h1
          id="sh"
          className={`${myFont.className} font-serif text-6xl sm:text-9xl sm:my-2 `}
        >
          <span className="text-purple-200/80">DevOps</span>{" "}
          <span className="">Engineer</span>
        </h1>
        <p
          ref={masRef}
          className="text-md sm:text-xl mt-8 ml-2 font-semibold text-zinc-100/80 sm:flex-col gap-1  "
        >
          Currently Mastering{" "}
          <span className="text-orange-600 px-1">
            Rust <Rust />
          </span>{" "}
          and{" "}
          <span className="text-blue-400 mb-4 px-1">
            React <ReactLogo />
          </span>
        </p>
      </div>

      {/* side div */}
      <div className="absolute  sm:top-[70%] sm:right-20 xl:flex hidden text-md font-semibold text-zinc-100 sm:flex-col gap-1  ">
        <a href="https://github.com/JunedGit" target="_blank" rel="noreferrer">
          <p id="sdiv">
            <span className="inline-block pr-1">
              <Github />
            </span>
            JunedGit
          </p>
        </a>
        <a
          href="https://twitter.com/anotherJuned"
          target="_blank"
          rel="noreferrer"
        >
          <p id="sdiv">
            <span className="inline-block pr-1">
              <Twitter />
            </span>
            @anotherJuned
          </p>
        </a>
        <a href="mailto:Aj215210@gmail.com" target="_blank" rel="noreferrer">
          <p id="sdiv">
            <span className="inline-block pr-1">
              <Email />
            </span>
            Aj215210@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
