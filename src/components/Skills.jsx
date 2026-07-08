
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../data/constants';

/**
 * Skills Component
 * Interactive skills dashboard with tabs and animations.
 */
export default function Skills() {
  const [activeTab, setActiveTab] = useState('comfortable');
  const [animatedDots, setAnimatedDots] = useState({});
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate dots when section comes into view
            const newAnimated = {};
            SKILLS[activeTab].forEach((item, index) => {
              newAnimated[`${activeTab}-${index}`] = item.dots;
            });
            setAnimatedDots(newAnimated);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [activeTab]);

  const tabs = [
    { key: 'comfortable', label: 'Comfortable', color: 'green' },
    { key: 'building', label: 'Actively Building', color: 'orange' },
    { key: 'exploring', label: 'Future Exploration', color: 'purple' }
  ];

  const getTabColor = (color) => {
    switch (color) {
      case 'green': return 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200';
      case 'orange': return 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200';
      case 'purple': return 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDotColor = (level, filled) => {
    if (!filled) return 'bg-gray-200';
    switch (level) {
      case 'comfortable': return filled ? 'bg-green-500' : 'bg-green-200';
      case 'building': return filled ? 'bg-orange-500' : 'bg-orange-200';
      case 'exploring': return filled ? 'bg-purple-500' : 'bg-purple-200';
      default: return 'bg-gray-400';
    }
  };

  const getBrightDotColor = (level) => {
    switch (level) {
      case 'comfortable': return 'bg-green-400 shadow-green-400/50 shadow-lg';
      case 'building': return 'bg-orange-400 shadow-orange-400/50 shadow-lg';
      case 'exploring': return 'bg-purple-400 shadow-purple-400/50 shadow-lg';
      default: return 'bg-gray-400';
    }
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto bg-slate-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 font-inter">
          Technical Skills
        </h2>
        <div className="h-1 w-16 bg-blue-600 rounded-full mx-auto"></div>
        <p className="text-slate-600 mt-4">A transparent look at my technical journey and my commitment to growth.</p>
      </div>

      {/* Interactive Skills Card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/60 rounded-3xl border border-white/20 shadow-xl p-8"
      >
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white/50 rounded-full p-1 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeTab === tab.key
                    ? getTabColor(tab.color) + ' shadow-md'
                    : 'text-slate-600 hover:bg-white/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6"
          >
            {SKILLS[activeTab].map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 rounded-xl p-4 border border-white/30 hover:bg-white/80 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-800">{item.name}</span>
                    {item.lightbulb && (
                      <motion.span
                        className="text-yellow-500 text-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        💡
                      </motion.span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, dotIndex) => (
                      <motion.div
                        key={dotIndex}
                        initial={{ scale: 0 }}
                        animate={{
                          scale: animatedDots[`${activeTab}-${index}`] > dotIndex ? 1 : 0,
                          backgroundColor: animatedDots[`${activeTab}-${index}`] > dotIndex
                            ? getDotColor(activeTab, true)
                            : getDotColor(activeTab, false)
                        }}
                        whileHover={{
                          backgroundColor: dotIndex < item.dots ? getBrightDotColor(activeTab) : undefined,
                          scale: 1.2
                        }}
                        transition={{ delay: dotIndex * 0.1, duration: 0.3 }}
                        className="w-3 h-3 rounded-full"
                      ></motion.div>
                    ))}
                  </div>
                </div>
                {item.description && (
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Growth Mindset Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 bg-gradient-to-r from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200 text-center"
      >
        <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center justify-center gap-2">
          <span className="text-2xl">🌱</span>
          Growth Mindset
        </h3>
        <p className="text-slate-700 max-w-4xl mx-auto leading-relaxed">
          I'm committed to continuous learning and improvement. Every challenge is an opportunity to grow, and I'm excited about building a strong foundation in web development while exploring the fascinating world of intelligent systems. My journey is just beginning, and I'm passionate about creating meaningful solutions through code.
        </p>
      </motion.div>
    </section>
  );
}