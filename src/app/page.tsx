import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-teal-950 h-full md:h-screen max-w-screen-2xl mx-auto pt-14">
      <div className="flex flex-col md:flex-row items-start max-w-screen-2xl mx-auto px-8 md:px-24">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-2 pt-0 text-white">
          <h1 className="font-sans font-bold -tracking-tighter">
            <span className="text-xl block">Hi, I am Minhal</span>
            <span className="font-extrabold text-7xl block">I AM A WEB</span>
            <span className="font-extrabold text-7xl block">DEVELOPER</span>
          </h1>

          <section className="font-sans text-sm font-medium space-y-1">
            <p>A warm welcome to my portfolio! I am a full stack web</p>
            <p>developer who puts his heart into his work, transforming</p>
            <p>ideas into great digital experiences.</p>
            <p>With knowledge of both front-end and back-end</p>
            <p>technologies, I work closely with clients to understand</p>
            <p>their requirements and provide unique solutions.</p>
            <p>Let’s make a great piece together!</p>
          </section>

          {/* Button Section */}
          <div className="pt-4">
            <Link href="/#">
              <button
                className="text-white text-sm font-bold px-5 py-2 border-2 border-white 
                rounded-xl bg-teal-900 shadow-lg shadow-cyan-500/50 animate-bounce"
              >
                VIEW MY PROJECTS
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:absolute top-12 right-12">
          <Image
            width="510"
            height="510"
            src="/pfpp.png"
            alt="Portfolio image of Minhal"
          />
        </div>
      </div>
    </div>
  );
}
