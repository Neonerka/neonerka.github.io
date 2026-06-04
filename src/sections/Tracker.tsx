import { motion } from 'framer-motion';
import { GithubIcon } from '../icons';
import type { ActivityData, TodoItem } from '../types';

interface TrackerProps {
  data: ActivityData;
  todos: TodoItem[];
  viewOnGitHub: string;
}

const statusIcon: Record<string, { char: string; color: string }> = {
  in_progress: { char: '●', color: 'text-neutral-300' },
  paused: { char: '○', color: 'text-neutral-600' },
  planned: { char: '◌', color: 'text-neutral-700' },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const slideSmall = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function Tracker({ data, todos, viewOnGitHub }: TrackerProps) {
  const status = statusIcon[data.status];

  return (
    <div className="max-w-3xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-500 mb-8">
          <span className="text-neutral-400">$</span> systemctl status {data.projectName.toLowerCase()}.service
        </motion.p>

        <motion.div variants={slideSmall} className="mb-1">
          <p className="text-sm md:text-base text-neutral-300">
            <span className={`${status.color} mr-2`}>{status.char}</span>
            <span className="text-neutral-500">{data.projectName.toLowerCase()}.service — </span>
            {data.projectName}
          </p>
        </motion.div>

        <motion.p variants={slideSmall} className="text-xs md:text-sm text-neutral-600 mb-6 ml-5">
          Status: active (running)
        </motion.p>

        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-500 mb-4">
          <span className="text-neutral-400">$</span> cat TODO.md
        </motion.p>

        <div className="space-y-1 ml-5 mb-6">
          {todos.map((todo, i) => (
            <motion.p
              key={i}
              variants={slideSmall}
              className={`text-sm md:text-base ${todo.done ? 'text-neutral-500' : 'text-neutral-600'}`}
            >
              <span className={todo.done ? 'text-neutral-500' : 'text-neutral-700'}>
                [{todo.done ? 'x' : ' '}]
              </span>{' '}
              {todo.text}
            </motion.p>
          ))}
        </div>

        <motion.p
          variants={slideSmall}
          className="text-sm md:text-base text-neutral-400 leading-relaxed mb-6"
        >
          <TypewriterText text={data.description} />
        </motion.p>

        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-500 mt-4">
          <span className="text-neutral-400">$</span> gh repo view Neonerka/{data.projectName}
        </motion.p>

        <motion.a
          variants={slideSmall}
          href={data.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm md:text-base text-neutral-500 hover:text-white transition-colors duration-200 mt-1 ml-5"
        >
          <GithubIcon className="w-4 h-4" />
          {viewOnGitHub}
        </motion.a>

        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-600 mt-8">
          $<span className="inline-block w-2.5 h-4 md:w-3 md:h-5 bg-neutral-500 align-middle ml-1 animate-cursor-blink" />
        </motion.p>
      </motion.div>
    </div>
  );
}

function TypewriterText({ text }: { text: string }) {
  const chars = Array.from(text);

  return (
    <span>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.02, duration: 0 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: chars.length * 0.02 + 0.3, duration: 0.3, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-2 h-3 md:w-2.5 md:h-4 bg-neutral-500 align-middle ml-1"
      />
    </span>
  );
}
