import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      {/* HERO SECTION - FULL SCREEN */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
          {/* Gambar */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/mecasenku.png"
              alt="Profile"
              width={250}
              height={250}
              className="rounded-full mb-6 border-4 border-white shadow-2xl
               transition-all duration-700 ease-in-out
               hover:scale-125 hover:rotate-y-180
               hover:border-cyan-400 hover:shadow-cyan-500/50
               cursor-pointer transform-style-preserve-3d"
            />
          </div>

          {/* Teks */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              WELCOME!!!!
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              I am Anwar 👋
            </h1>
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-md mb-8 leading-relaxed">
              Web Developer & Informatics Student who builds modern web
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - FULL SCREEN */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-900">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            About Me
          </h2>
          <div className=" transition-all duration-700 ease-in-out hover:scale-115 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl p-8 md:p-12 shadow-2xl">
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
              Passionate in technology, UI/UX, and education. Currently learning
              Next.js and building LMS platform.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - FULL SCREEN */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-6xl text-center w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center group">
              <SiHtml5
                className="transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_#F97316] cursor-pointer mb-4"
                size={80}
                color="#F97316"
              />
              <span className="text-lg font-medium">HTML5</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiCss3
                className="transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_#2563EB] cursor-pointer mb-4"
                size={80}
                color="#2563EB"
              />
              <span className="text-lg font-medium">CSS3</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiJavascript
                className="transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_#FACC15] cursor-pointer mb-4"
                size={80}
                color="#FACC15"
              />
              <span className="text-lg font-medium">JavaScript</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiReact
                className="transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_#22D3EE] cursor-pointer mb-4"
                size={80}
                color="#22D3EE"
              />
              <span className="text-lg font-medium">React</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiNextdotjs
                className="transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_#FFFFFF] cursor-pointer mb-4"
                size={80}
                color="#FFFFFF"
              />
              <span className="text-lg font-medium">Next.js</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiTailwindcss
                className="transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_#38BDF8] cursor-pointer mb-4"
                size={80}
                color="#38BDF8"
              />
              <span className="text-lg font-medium">Tailwind</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiAdobeillustrator
                className="transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_#d80000ff] cursor-pointer mb-4"
                size={80}
                color="#d80000ff"
              />
              <span className="text-lg font-medium">Illustrator</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiCanva
                className="transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_#00C2FF] cursor-pointer mb-4"
                size={80}
                color="#00C2FF"
              />
              <span className="text-lg font-medium">Canva</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - FULL SCREEN */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-900">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's build something amazing
            together!
          </p>
          <a
            href="mailto:example@email.com"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 rounded-lg font-medium text-lg hover:opacity-90 transition transform hover:scale-105 inline-block"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
