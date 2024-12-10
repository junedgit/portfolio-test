"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import {
  Code,
  Server,
  Cloud,
  Terminal,
  Zap,
  Layers,
  Cpu,
  Database,
  Key,
  DockIcon as Docker,
  GitGraphIcon as Git,
  Cog,
  FileCode,
  Workflow,
} from "lucide-react";

const skills = [
  { name: "Next.js", icon: Zap },
  { name: "Tailwind", icon: Layers },
  { name: "Redux", icon: Workflow },
  { name: "Node.js", icon: Server },
  { name: "Git", icon: Git },
  { name: "Go", icon: Cpu },
  { name: "MongoDB", icon: Database },
  { name: "Redux", icon: Workflow },
  { name: "Auth", icon: Key },
  { name: "Linux", icon: Terminal },
  { name: "Tailwind", icon: Layers },
  { name: "Docker", icon: Docker },
  { name: "Git", icon: Git },
  { name: "GCP", icon: Cloud },
  { name: "Redux", icon: Workflow },
  { name: "JavaScript", icon: Code },
  { name: "TypeScript", icon: FileCode },
  { name: "Rust", icon: Cog },
];

const SkillIcon = ({ Icon }: { Icon: React.ElementType; name: string }) => (
  <div className="flex flex-col items-center  w-5 h-5 sm:w-10 sm:h-10  rounded-lg shadow-md m-2">
    <Icon className="w-10 h-10 " />
  </div>
);

export default function GSAPInfiniteSkillScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    const scrollTween = gsap.to(scrollerRef.current, {
      x: "-18%",
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    const handleResize = () => {
      scrollTween.kill();
      gsap.set(scrollerRef.current, { x: 0 });
      gsap.to(scrollerRef.current, {
        x: "-18%",
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      scrollTween.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden backdrop-blur-sm mb-16 sm:mb-auto md:mb-auto sm:h-28 h-48 flex items-center ">
      <div ref={containerRef} className="relative ">
        <div ref={scrollerRef} className="flex">
          {skills.map((skill, index) => (
            <SkillIcon
              key={`${skill.name}-${index}`}
              Icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
