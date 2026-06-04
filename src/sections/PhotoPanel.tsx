import { motion } from 'framer-motion';
import type { SectionPhoto } from '../types';

interface PhotoPanelProps {
  photos: SectionPhoto[];
  size?: 'default' | 'icon' | 'compact';
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export default function PhotoPanel({ photos, size = 'default' }: PhotoPanelProps) {
  return (
    <div className="h-full flex flex-col">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 border border-neutral-800 bg-black/40 flex flex-col overflow-hidden"
      >
        <div className="px-4 py-3 border-b border-neutral-800 shrink-0">
          <p className="text-xs text-neutral-600 font-mono">
            <span className="text-neutral-500">$</span> ls photos/
          </p>
          <p className="text-xs text-neutral-600 mt-1">
            <span className="text-neutral-700">&gt; </span>
            {photos.map((p) => p.label).join('  ')}
          </p>
        </div>

        {size === 'icon' ? (
          <div className="flex-1 overflow-y-auto p-4 flex flex-wrap content-start">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="w-1/3 p-2"
              >
                <div className="border border-neutral-800 overflow-hidden">
                  <div className="relative flex items-center justify-center bg-black/60 p-3 aspect-square">
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className="w-full h-full object-contain"
                      style={{ filter: 'grayscale(100%)' }}
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_4px)]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : size === 'compact' ? (
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="flex flex-col border border-neutral-800 overflow-hidden shrink-0"
              >
                <div className="px-3 py-1.5 border-b border-neutral-800 bg-neutral-900/30">
                  <p className="text-[10px] text-neutral-700 font-mono">
                    <span className="text-neutral-600">$</span> cat {photo.label}
                  </p>
                </div>
                <div className="relative flex items-center justify-center bg-black/60 p-2">
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="max-h-48 w-full object-contain"
                    style={{ filter: 'grayscale(100%)' }}
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_4px)]" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="flex-1 flex flex-col border border-neutral-800 overflow-hidden min-h-0"
              >
                <div className="px-3 py-1.5 border-b border-neutral-800 bg-neutral-900/30 shrink-0">
                  <p className="text-[10px] text-neutral-700 font-mono">
                    <span className="text-neutral-600">$</span> cat {photo.label}
                  </p>
                </div>
                <div className="flex-1 relative flex items-center justify-center bg-black/60 min-h-0">
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="max-w-full max-h-full object-contain"
                    style={{ filter: 'grayscale(100%)' }}
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_4px)]" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="px-4 py-2 border-t border-neutral-800 shrink-0">
          <p className="text-[10px] text-neutral-700 font-mono">
            <span className="inline-block w-2 h-3 bg-neutral-700 align-middle animate-cursor-blink" />
          </p>
        </div>
      </motion.div>
    </div>
  );
}
