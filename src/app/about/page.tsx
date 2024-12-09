// app/about/page.tsx
import Image from "next/image";
export default function About() {
  return (
    <div className="bg-teal-950 h-full md:h-screen max-w-screen-2xl mx-auto">
      <h1 className="text-white text-6xl font-extrabold font-sans text-center">
        ABOUT ME
      </h1>
      {/* text section */}
      <div
        className=" text-white text-sm font-medium font-sans pt-8 tracking-tight
            text-center text-balance"
      >
        <p>
          Hello! Allow me to introduce myself: Minhal, a promising young full
          stack web developer who enjoys creating new and exciting web
          applications. At present, I am enrolled at GIAIC Karachi, while I am
          in HSSC Part II Pre Engineering at the Aga Khan College, Kharadar.
        </p>

        <p>
          Equipped with the knowledge of different programming languages and
          frameworks, I will be able to undertake either front-end or back-end
          development. Also, since I have an interest in artificial
          intelligence, I am able to include smart solutions to my projects.
        </p>

        <p>
          One thing that makes me a dependable third party and an outstanding
          option for clients is my ability to comprehend their requirements
          well. I do make it a point to engage in effective communication and
          team work, as it is only seems reasonable to say that we will work
          together in order to get your concepts implemented. My thirst for
          gaining knowledge and the drive to change with technologies enables me
          to provide efficient solutions while keeping me in touch with the
          latest trends.
        </p>
        <br />
        <p className="font-bold text-2xl font-sans animate-pulse">
          I am looking forward to working with you on your next project and make
          it a reality!
        </p>
      </div>
      <h1 className="text-white text-4xl font-sans tracking-wider font-extrabold text-center pt-6">
        SKILLS
      </h1>
      <div className="grid grid-cols-3 pl-14 space-y-8 items-center md:flex justify-center space-x-5 pt-4
      ">
        <Image className="pt-7 pl-2" width="60" height="60" src="/typescript.png" alt="skills" />
        <Image width="60" height="60" src="/html1.png" alt="skills" />
        <Image width="60" height="60" src="/css.png" alt="skills" />
        <Image width="60" height="60" src="/java-script.png" alt="skills" />
        <Image width="60" height="60" src="/next.js.png" alt="skills" />
        <Image width="60" height="60" src="/tailwindcSS.png" alt="skills" />
        <Image width="60" height="60" src="/react.png" alt="skills" />
        <Image width="60" height="60" src="/node.js.png" alt="skills" />
        <Image width="60" height="60" src="/figma.png" alt="skills" />
      </div>
    </div>
  );
}
