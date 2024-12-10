import { Code, Server, Cloud, Terminal, GitCommitVertical } from "lucide-react";

const SkillSection = ({
  title,
  icon,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
      {icon}
      {title}
    </h2>
    <ul className="grid grid-cols-2 gap-2 ">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span>
            <GitCommitVertical />
          </span>
          <span className="w-2 h-2 bg-primary rounded-full mr-2" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default function PortfolioSkills() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-violet-200/5 rounded-2xl absolute z-30 backdrop-blur-2xl shadow-[0px_0px_5px_0px_#111] ">
      <h1 className="text-4xl font-bold mb-8 py-4  font-mono text-slate-200/90 text-center">
        Technical Expertise
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <SkillSection
          title="Frontend Development"
          icon={<Code className="w-6 h-6" />}
          skills={[
            "React.js & Next.js",
            "Redux & Zustand",
            "Tailwind CSS",
            "GSAP & Framer Motion",
            "Accessible UI/UX",
          ]}
        />
        <SkillSection
          title="Backend Development"
          icon={<Server className="w-6 h-6" />}
          skills={[
            "Next.js Server-Side",
            "Node.js & Go",
            "WebSockets & Kafka",
            "RESTful & GraphQL APIs",
            "PostgreSQL & MongoDB",
            "Auth & Authorization",
          ]}
        />
        <SkillSection
          title="DevOps & Cloud"
          icon={<Cloud className="w-6 h-6" />}
          skills={[
            "Docker",
            "CI/CD with Git",
            "AWS & GCP CloudRun",
            "Apache & Nginx",
            "Linux Administration",
          ]}
        />
        <SkillSection
          title="Programming Languages"
          icon={<Terminal className="w-6 h-6" />}
          skills={[
            "JavaScript & TypeScript",
            "Rust & Solidity",
            "Python",
            "Linux Systems",
          ]}
        />
      </div>
    </div>
  );
}
