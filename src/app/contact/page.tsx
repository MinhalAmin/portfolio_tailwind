// app/contact/page.ts
import Image from "next/image";
export default function Contact(){
    return(
        <div className="bg-teal-950 min-h-screen min-w-fit md:h-screen max-w-screen-2xl mx-auto pt-14">
      <h1 className="text-white text-4xl md:text-6xl font-extrabold font-sans text-center">
        CONTACT ME
      </h1>
      <div className="flex flex-col space-y-7 pt-10 pl-12 md:pl-[27rem] text-white font-sans text-sm font-bold
      md:text-lg underline tracking-wider ">
        <div className="flex space-x-4 md:space-x-10">
        <Image className="" width="60" height="60" src="/linkedIn.png" alt="skills" />
        <a className="pt-3" href="http://www.linkedin.com/in/minhal-mohammed-amin-a0a0592b7"
              target="_blank"
            >
              www.linkedin.com
            </a>
            </div>
            <div className="flex space-x-4 md:space-x-10">
        <Image className="" width="60" height="60" src="/github.png" alt="skills" />
        <a className="pt-4 "
                href="https://github.com/MinhalAmin"
              >
                https://github.com
              </a>
              </div>
              <div className="flex space-x-4 md:space-x-10">
        <Image className="" width="60" height="60" src="/gmail.png" alt="skills" />
        <a className="pt-4" href="mailto:minhalmohammedamin@gmail.com"target="_blank">
            minhalmohammedamin@gmail.com</a>
            </div>
            <div className="flex space-x-4 md:space-x-10">
        <Image className="" width="60" height="60" src="/instagram.png" alt="skills" />
             <a className="pt-4 "  href="https://www.instagram.com/minhal.zariwala_?igsh=c252aGR0Y3VwNjkx"
              >
                www.instagram.com
              </a>
              </div>
              </div>
      </div>
    )
}