// services
import Image from "next/image";
export default function Services() {
  return (
    <div className="bg-teal-950 md:h-screen max-w-screen-2xl mx-auto 
     px-32 md:grid grid-cols-3 md:space-x-16 ">
        <div className="md:flex flex-col pt-16">
     <Image className="place-self-center"
      width="150" height="150" src="/webdev.png" alt="services" />
       <h1 className="text-white font-sans font-extrabold text-2xl pt-3 text-centre md:pl-12 ">
       Web Development</h1>
       <p className=" text-white text-xs font-thin md:text-sm md:font-medium font-sans tracking-tighter
             pt-4">
            I provide responsive, aesthetically appealing web development services to make 
            sure that your websites are looking good and working right on every device.
             Dedicated to the vision of every client, I ensure that the quality, accessibility, 
             and scalability of the solution create an impact. Committed to collaboration, reliability,
              and attention to detail, I look forward to bringing your ideas to life.</p>
              </div>
              <div className="md:flex flex-col pt-14">
        <Image className="place-self-center"
         width="150" height="150" src="/ui.png" alt="services" />
          <h2 className="text-white font-sans font-extrabold  text-2xl pt-3 pl-5 md:pl-14">
            UI/UX Design
        </h2>
        <p className=" text-white text-xs font-thin md:text-sm md:font-medium font-sans 
        tracking-tighter pt-4 pl-4">
              I provide intuitive, visually rich UI/UX designs in accordance with the
               requirements ofthe clients so as to create better user experience. 
               Creativity in terms of the behavior of a user and coming up with beautiful 
               designs that work all come together for me, which is as it should be.
               Quality coupled with effective communication makes me a prime candidate for
                impact-based, user-centric design.
              </p>
              </div>
              <div className="md:flex flex-col pt-16">
        <Image className="place-self-center"
         width="150" height="150" src="/seo.png" alt="services" />
        <h3 className="text-white font-sans font-extrabold text-2xl pt-3 md:pl-6">
            SEO Optimization
        </h3>
        <p className=" text-white text-xs font-thin md:text-sm md:font-medium font-sans  tracking-tighter
              pt-4">
              Effective SEO optimization to increase visibility, drive traffic, and improve search
               rankings. I tailor my strategies, data-driven methods, and results to become a reliable
                choice for impactful SEO solutions that will help clients reach their target audience.
              </p>
              </div>
    </div>
  );
}
