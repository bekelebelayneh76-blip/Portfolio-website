
import Typewriter from 'typewriter-effect';
import { INFO } from '../data/constants';
import profileImage from '../assets/profile.jpg';
import HeroImage from '../assets/undraw_organizing-projects_heze.svg';
import { Link } from 'react-router-dom';

/**
 * Header Component
 * Highlights the user's identity as a Computer Science student.
 * Removes generic developer titles as per user request.
 */
export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 px-6 py-5 text-white">
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .hero-float {
          animation: heroFloat 4s ease-in-out infinite;
        }
      `}</style>

      {/* Visual background decoration */}
      <div className="pointer-events-none absolute inset-0 h-full w-full opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-indigo-500 blur-3xl"></div>
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-900/20 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-900/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-4 flex flex-col items-center gap-4 lg:items-start">
            <div className="h-75 w-75 overflow-hidden rounded-full border-6 border-slate-700/60 shadow-lg shadow-blue-500/20">
              <img src={profileImage} alt={INFO.name} className="h-full w-full object-cover" />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-blue-200">
              <div className="h-2 w-2 animate-ping rounded-full bg-green-400"></div>
              {INFO.role} @ {INFO.university}
            </div>

            <h1 className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
              <Typewriter
                options={{
                  strings: [INFO.name, ...INFO.titles],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                  pauseFor: 1500,
                }}
              />
            </h1>
          </div>

          <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-slate-200 transition-colors duration-300 hover:text-blue-400 lg:mx-0 md:text-lg">
            A {INFO.role} at {INFO.university} dedicated to bridging the gap between academic theory and real-world application. I focus on building intelligent systems and mastering modern web technologies to solve the complex challenges of tomorrow.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              to="/projects"
              className="rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-500 active:scale-95"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-white/20 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex w-full justify-center lg:justify-end">
          <img
            src={HeroImage}
            alt="Illustration of a developer organizing projects"
            className="hero-float w-full max-w-xl rounded-3xl object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
}