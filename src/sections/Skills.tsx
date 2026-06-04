import { motion } from 'framer-motion';
import type { SkillCategory } from '../types';

interface SkillsProps {
  categories: SkillCategory[];
  achievementsLabel: string;
}

const stagger = {
  visible: { transition: { staggerChildren: 0.25 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const slideSmall = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function Skills({ categories, achievementsLabel }: SkillsProps) {
  const normalCategories = categories.filter(c => !c.isAchievement);
  const achievementCategories = categories.filter(c => c.isAchievement);

  return (
    <div className="max-w-3xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-500 mb-8">
          <span className="text-neutral-400">$</span> cat skills.cfg
        </motion.p>

        {normalCategories.map((cat) => (
          <motion.div key={cat.title} variants={slideSmall} className="mb-6">
            <p className="text-xs md:text-sm text-neutral-600 mb-2 select-none">
              # {cat.title.toUpperCase()}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm md:text-base text-neutral-400">
              {cat.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}

        {achievementCategories.length > 0 && (
          <>
            <motion.div variants={slideSmall} className="mt-10 mb-4">
              <p className="text-xs md:text-sm text-neutral-600 select-none">
                $ cat .{achievementsLabel.toLowerCase()}
              </p>
            </motion.div>

            <div className="space-y-3">
              {achievementCategories.map((cat) =>
                cat.items.map((item, i) => (
                  <motion.p
                    key={i}
                    variants={slideSmall}
                    className="text-sm md:text-base text-neutral-400"
                  >
                    <span className="text-neutral-600 select-none">&gt; </span>◆ {item}
                  </motion.p>
                ))
              )}
            </div>
          </>
        )}

        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-600 mt-8">
          $<span className="inline-block w-2 h-3 md:w-2.5 md:h-4 bg-neutral-500 align-middle ml-1 animate-cursor-blink" />
        </motion.p>
      </motion.div>
    </div>
  );
}
