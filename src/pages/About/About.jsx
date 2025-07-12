import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            MERN Stack Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold text-white" >Zohadur Rahman Jafri</span>, a passionate MERN Stack Developer
                specializing in creating innovative web solutions and
                user-friendly interfaces.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and accessible to all developers. Currently, I’m expanding my skills into app development to grow as a Full-Stack Web & Mobile Developer and build seamless, robust applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I’m a lifelong learner and problem solver with a strong passion for exploring new technologies. I continuously strive to enhance my skills across web and app development, including JavaScript frameworks, backend technologies, and modern development tools. My goal is to grow as a versatile developer who adapts quickly and tackles challenges with creativity and determination.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Zohadur Rahman Jafri
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
