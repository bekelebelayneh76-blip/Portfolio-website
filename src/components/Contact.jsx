
import { Mail, GitBranch, MapPin } from 'lucide-react';
import { INFO } from '../data/constants';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Left Column: Contact Form */}
          <div className="rounded-[32px] bg-white shadow-xl shadow-slate-200/70 border border-slate-200 p-8 lg:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4">Contact</p>
            <h2 className="text-4xl font-semibold text-slate-900 mb-6">Send a Message</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              If you'd like to discuss internships, collaboration, or technical projects, send me a quick message and I will get back to you soon.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Message</span>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition resize-none"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Professional Links */}
          <div className="rounded-[32px] bg-gradient-to-br from-white to-slate-100 border border-slate-200 p-8 lg:p-10 shadow-lg shadow-slate-200/60">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4">Let's Build Something Together</p>
            <h2 className="text-4xl font-semibold text-slate-900 mb-6">Let's Build Something Together</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              As a Computer Science student at {INFO.university}, I am open to internships, collaborations, and technical discussions.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Email</p>
                  <a href={`mailto:${INFO.email}`} className="text-base font-medium text-slate-900 hover:text-blue-600 transition">{INFO.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
                <GitBranch className="w-5 h-5 text-slate-900" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">GitHub</p>
                  <a href={INFO.github} target="_blank" rel="noreferrer" className="text-base font-medium text-slate-900 hover:text-blue-600 transition">
                    {INFO.githubUsername}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Location</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Semien+Shewa+Ethiopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-medium text-slate-900 hover:text-blue-500 transition hover:underline"
                  >
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    {INFO.location}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}