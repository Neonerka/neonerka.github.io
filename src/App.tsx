import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { localization } from './data';

const fadeInUpVariants: any = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function App() {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const currentData = localization[lang];
  const bioChars = Array.from(currentData.personalInfo.bio);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-[#030303] overflow-hidden">
      
      <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-[130px] animate-bg-float-1 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-neutral-800/[0.15] rounded-full blur-[140px] animate-bg-float-2 pointer-events-none" />
      
      <div className="absolute top-6 right-6 z-20 flex gap-1 p-1 rounded-md border border-white/[0.05] bg-white/[0.01] backdrop-blur-md">
        {(['ru', 'en'] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-2.5 py-1 text-[10px] font-black tracking-widest uppercase rounded transition-all duration-300 cursor-pointer ${
              lang === l 
                ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                : 'text-neutral-600 hover:text-neutral-400'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.96, y: 25 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
              duration: 0.8, 
              ease: "easeOut",
              delayChildren: 0.15, 
              staggerChildren: 0.12 
            }
          }
        }}
        className="relative z-10 w-full max-w-2xl rounded-3xl p-8 md:p-12 border border-white/[0.07] bg-black/[0.3] shadow-[0_0_80px_rgba(0,0,0,0.9)]"
        style={{ backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)' }}
      >
        
        <motion.div variants={fadeInUpVariants} className="flex justify-center mb-8">
          <motion.div 
            whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
            transition={{ rotate: { duration: 0.3 } }}
            className="relative w-50 h-50 rounded-2xl overflow-hidden border border-white/20 bg-white/[0.02] shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 cursor-pointer group"
          >
            <img 
              src="/avatar.jpg" 
              alt="Avatar"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:animate-[scanline_1.5s_infinite_linear] pointer-events-none" />
          </motion.div>
        </motion.div>

<motion.div variants={fadeInUpVariants} className="text-center mb-8">
  <motion.h1 
    initial={{ letterSpacing: "0.1em" }}
    whileHover={{ letterSpacing: "0.2em" }}
    transition={{ duration: 0.5 }}
    className="text-3xl text-white uppercase font-black cursor-default drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
  >
    {currentData.personalInfo.name}
  </motion.h1>
  <div className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase font-bold mt-1.5 mb-5 select-none">
    [ Denis K. ]
  </div>
          <AnimatePresence mode="wait">
            <motion.p 
              key={lang}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: { opacity: 1, transition: { staggerChildren: 0.01 } }
              }}
              className="text-neutral-500 text-xs leading-relaxed max-w-md mx-auto font-sans text-justify sm:text-center min-h-[110px] sm:min-h-[80px]"
            >
              {bioChars.map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, display: "none" },
                    visible: { opacity: 1, display: "inline" }
                  }}
                >
                  {char}
                </motion.span>
              ))}
              
              <motion.span
                variants={{
                  hidden: { opacity: 1, display: "inline" },
                  visible: { 
                    opacity: 0,
                    transition: { delay: bioChars.length * 0.01 + 0.4, duration: 0.2 },
                    transitionEnd: { display: "none" }
                  }
                }}
                className="inline-block w-1.5 h-3 bg-neutral-500 ml-0.5 align-middle font-mono animate-cursor-blink"
              >
                _
              </motion.span>
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div variants={fadeInUpVariants} className="mb-10">
          <motion.div 
            key={lang} // Смена ключа заставляет их красиво перерисовываться при переключении
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="flex flex-wrap justify-center gap-2"
          >
            {currentData.skills.map((skill) => (
              <motion.span 
                key={skill}
                variants={{
                  hidden: { opacity: 0, scale: 0.85, y: 5 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
                }}
                whileHover={{ y: -3, scale: 1.03, borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff' }}
                className="px-3 py-1.5 text-[11px] font-medium rounded-md border border-white/[0.04] bg-white/[0.02] text-neutral-400 transition-colors duration-200 cursor-default select-none"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUpVariants}>
          <h2 className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.25em] text-center mb-4 select-none">
            {currentData.labels.nodes}
          </h2>
          <motion.div 
            key={lang}
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            className="grid grid-cols-2 gap-2.5"
          >
            {currentData.socialLinks.map((link) => {
              const IconComponent = (Icons as any)[link.icon] || Icons.Link;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`shine-effect flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] text-neutral-400 transition-all duration-300 ${link.color}`}
                >
                  <div className="p-2 rounded bg-white/[0.03] text-neutral-300 group-hover:text-white transition-colors">
                    <IconComponent className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <span className="text-xs font-bold tracking-widest">{link.name}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
