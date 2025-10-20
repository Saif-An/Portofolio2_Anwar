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

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* FOTO */}
      <Image
        src="/mecasenku.png"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mb-6 border-4 border-white shadow-2xl
               transition-all duration-700 ease-in-out
               hover:scale-125 hover:rotate-y-180
               hover:border-cyan-400 hover:shadow-cyan-500/50
               cursor-pointer transform-style-preserve-3d"
      />

      {/* HERO */}
      <h1 className="text-4xl font-bold mb-2">Youkoso, I am Anwar 👋</h1>
      <p className="text-gray-300 text-center max-w-md mb-12">
        Web Developer & Law Student who builds modern web applications.
      </p>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-gray-400 text-center max-w-md mb-12">
        Passionate in technology, UI/UX, and education. Currently learning
        Next.js and building LMS platform.
      </p>

      {/* SKILLS */}
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="flex gap-6 text-4xl mb-16">
        <SiHtml5
          className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_#F97316] cursor-pointer"
          size={50}
          color="#F97316"
        />
        <SiCss3
          className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_#2563EB] cursor-pointer"
          size={50}
          color="#2563EB"
        />
        <SiJavascript
          className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_#FACC15] cursor-pointer"
          size={50}
          color="#FACC15"
        />
        <SiReact
          className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_#22D3EE] cursor-pointer"
          size={50}
          color="#22D3EE"
        />
        <SiNextdotjs
          className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_#FFFFFF] cursor-pointer"
          size={50}
          color="#FFFFFF"
        />
        <SiTailwindcss
          className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_#38BDF8] cursor-pointer"
          size={50}
          color="#38BDF8"
        />
        <SiAdobeillustrator
          className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_#d80000ff] cursor-pointer"
          size={50}
          color="#d80000ff"
        />
        <SiCanva
          className="transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_#00C2FF] cursor-pointer"
          size={50}
          color="#00C2FF"
        />
      </div>

      {/* CONTACT */}
      <h2 className="text-2xl font-semibold mb-3">Contact</h2>
      <p className="text-gray-400 mb-4">Let us build something together!</p>
      <a
        href="mailto:example@email.com"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
      >
        Email Me
      </a>
    </main>
  );
}
