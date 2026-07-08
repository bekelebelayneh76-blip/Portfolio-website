
import { PROJECTS } from '../data/constants';
import ProjectImageOne from '../assets/undraw_organizing-projects_heze.svg';
import ProjectImageTwo from '../assets/undraw_code-contribution_8k0x.svg';
import ProjectImageThree from '../assets/undraw_personal-email_hfut.svg';
import ProjectImageFour from '../assets/undraw_portfolio-feedback_4iok.svg';

const projectImages = [ProjectImageOne, ProjectImageTwo, ProjectImageThree, ProjectImageFour];

/**
 * Projects Component
 * Displays key software engineering projects in a structured grid.
 */
export default function Projects() {
  const showcaseProjects = PROJECTS;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .project-illustration-float {
          animation: heroFloat 4s ease-in-out infinite;
        }
      `}</style>

      <div className="mb-16 text-center">
        <h2 className="mb-4 inline-block border-b-4 border-blue-600 pb-2 text-3xl font-bold text-blue-900">
          Project Portfolio
        </h2>
        <p className="text-slate-600">
          A collection of software systems developed to solve academic and real-world challenges.
        </p>
      </div>

      <div className="grid items-stretch gap-8 md:grid-cols-2">
        {showcaseProjects.map((project, index) => (
          <div
            key={index}
            className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
              border: '1px solid transparent',
              backgroundClip: 'padding-box',
              WebkitBackgroundClip: 'padding-box'
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 p-[1px]">
              <div className="h-full w-full rounded-2xl bg-white"></div>
            </div>
            <div className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

            <div className="relative z-10 flex flex-1 flex-col p-8">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-800">
                  {project.title}
                </h3>
                <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-tighter text-blue-600">
                  {project.title === 'AI Resume Screening System' ? 'Active Project' : 'Core System Developed'}
                </span>
              </div>

              <div className="mb-6 rounded-2xl border border-slate-100 bg-slate-50/70 p-3 shadow-sm">
                <div className="flex justify-center">
                  <div className="project-illustration-float w-full max-w-[260px] rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100 sm:max-w-[280px]">
                    <img
                      src={projectImages[index]}
                      alt={`${project.title} illustration`}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <div className="text-sm">
                  <span className="mb-1 block font-bold text-red-600">The Challenge:</span>
                  <p className="italic text-slate-600">"{project.problem}"</p>
                </div>
                <div className="text-sm">
                  <span className="mb-1 block font-bold text-green-600">The Solution:</span>
                  <p className="text-slate-700">{project.solution}</p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={project.liveDemoUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-blue-700"
                >
                  Live Demo
                </a>
                {project.title === 'AI Resume Screening System' && (
                  <p className="mt-2 text-center text-xs italic text-slate-500">
                    (Note: If the app is sleeping, please click 'Wake up' to start the demo)
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}