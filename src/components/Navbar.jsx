import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-900/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="text-xl tracking-tight text-white transition-colors hover:text-blue-300">
          <span className="font-bold">Belayneh</span>
          <span className="ml-1 font-medium text-blue-300">.dev</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-none border-b-2 px-1 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition-all ${
                  isActive
                    ? 'border-blue-400 text-blue-400'
                    : 'border-transparent text-white/90 hover:border-white/40 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800/70 bg-slate-900/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-left text-sm font-semibold uppercase tracking-[0.2em] transition-colors ${
                    isActive ? 'text-blue-400' : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}