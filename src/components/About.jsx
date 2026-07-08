
import { INFO } from '../data/constants';
import profileImage from '../assets/profile.jpg';
import { GraduationCap, User, Globe, MapPin } from 'lucide-react';

/**
 * About Component
 * Modern dashboard-style layout with Bento Grid cards.
 */
export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">About Me</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Biography Card - Large */}
        <div className="lg:col-span-2 backdrop-blur-md bg-white/70 p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all h-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Belayneh Bekele"
                className="w-60 h-60 rounded-full object-cover border-2 border-slate-200 shadow-sm"
              />
            </div>
            <div className="space-y-4">
              <div className="text-black leading-relaxed space-y-4 hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">
                <p>
                  I am a Computer Science student at {INFO.university} with a deep-rooted passion for web development and building intelligent systems. My academic journey is driven by a fascination with how complex logic can be transformed into tools that simplify human life.
                </p>
                <p>
                  Beyond the classroom, I thrive on collaborative engineering and developing innovative projects—like AI-driven screening tools and management systems—that address real-world needs. I believe that good code isn't just about functionality; it's about reliability and creating a great user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts Card - Square */}
        <div className="backdrop-blur-md bg-white/70 p-6 rounded-2xl border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all h-full">
          <h3 className="text-xl font-bold text-black mb-6 text-center hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">Quick Facts</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-black uppercase font-bold hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">Major</p>
                <p className="font-medium text-black hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">Computer Science</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-black uppercase font-bold hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">Age</p>
                <p className="font-medium text-black hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">{INFO.age}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-black uppercase font-bold hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">Languages</p>
                <p className="font-medium text-black hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">Amharic (Native/Excellent), English (Basic/Learning)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Focus Card */}
        <div className="backdrop-blur-md bg-white/70 p-6 rounded-2xl border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all h-full">
          <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2 hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-pulse opacity-75"></div>
            </div>
            Current Focus
          </h3>
          <p className="text-black leading-relaxed hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">
            Deepening proficiency in <span className="bg-blue-50 text-black px-2 py-1 rounded-md font-semibold">React</span> and <span className="bg-blue-50 text-black px-2 py-1 rounded-md font-semibold">Python</span> while exploring modern web frameworks and AI integration.
          </p>
        </div>

        {/* Academic Background Card */}
        <div className="backdrop-blur-md bg-white/70 p-6 rounded-2xl border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all h-full">
          <h3 className="text-xl font-bold text-black mb-4 hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">Academic Background</h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-black uppercase font-bold hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">University</p>
              <p className="font-medium text-black hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">{INFO.university}</p>
            </div>
            <div>
              <p className="text-xs text-black uppercase font-bold hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">Focus</p>
              <p className="font-medium text-black hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">MERN Stack Development</p>
            </div>
          </div>
        </div>

        {/* Location Badge */}
        <div className="backdrop-blur-md bg-white/70 p-4 rounded-2xl border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all text-center h-full">
          <p className="text-xs text-black uppercase font-bold hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">Location</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Semien+Shewa+Ethiopia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-2 mt-3 text-black hover:text-amber-500 transition-colors duration-300 hover:underline selection:bg-amber-400 selection:text-black"
          >
            <MapPin className="w-6 h-6" />
            <span className="font-medium text-black hover:text-amber-500 transition-colors duration-300 selection:bg-amber-400 selection:text-black">{INFO.location}</span>
          </a>
        </div>
      </div>
    </section>
  );
}