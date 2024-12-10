import About from "@/components/About";
import Hero from "@/components/Hero";
import GSAPInfiniteSkillScroll from "@/components/Infinite";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <div className=" relative top-0 left-0 h-dvh w-screen overflow-x-hidden">
        <video
          src={"video-hero.mp4"}
          loop
          muted
          className=" z-10 fixed left-0 top-0 size-full object-cover object-center  "
        />
        <div className="relative z-20 top-0 left-0 h-dvh w-screen bg-gray-950/80  overflow-x-hidden ">
          <Navbar />
          <Hero />
          <GSAPInfiniteSkillScroll />
          <About />
          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
}
