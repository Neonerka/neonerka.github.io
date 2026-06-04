import { motion } from 'framer-motion';
import type { LearningTopic } from '../types';

interface StoryProps {
  paragraphs: string[];
  currentlyLearning: LearningTopic[];
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

export default function Story({ paragraphs, currentlyLearning }: StoryProps) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-500 mb-6">
          <span className="text-neutral-400">$</span> cat about.txt
        </motion.p>

        <div className="space-y-5">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              variants={slideSmall}
              className="text-sm md:text-base text-neutral-400 leading-relaxed"
            >
              <span className="text-neutral-600 select-none">&gt; </span>
              {text}
            </motion.p>
          ))}
        </div>

        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-500 mt-8 mb-4">
          <span className="text-neutral-400">$</span> cat ~/currently.txt
        </motion.p>

        <div className="space-y-2">
          {currentlyLearning.map((item, i) => (
            <motion.p
              key={i}
              variants={slideSmall}
              className="text-sm md:text-base text-neutral-400"
            >
              <span className="text-neutral-600">&gt; </span>
              <span className="text-neutral-300">{item.topic}</span>
              <span className="text-neutral-600 mx-2">—</span>
              {item.note}
            </motion.p>
          ))}
        </div>

        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-600 mt-8">
          $<span className="inline-block w-2.5 h-4 md:w-3 md:h-5 bg-neutral-500 align-middle ml-1 animate-cursor-blink" />
        </motion.p>
      </motion.div>
    </div>
  );
}
