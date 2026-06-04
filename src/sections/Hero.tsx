import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { SystemInfo } from '../types';

interface HeroProps {
  name: string;
  systemInfo: SystemInfo[];
  since: string;
}

const ascii = [
  "                   ",
  "             __          ",
  "            /  \\       ",
  "           /    \\      ",
  "          /\\    /\\     ",
  "         /  0 - 0 \\    ",
  "        /   ____   \\    ",
  "       / __|    |__ \\   ",
  "      /_-''      ''-_\\   ",
];

function getUptime(since: string): string {
  const start = new Date(since);
  const diff = Date.now() - start.getTime();
  if (diff < 0) return "0y 0d 0h";
  const totalDays = Math.floor(diff / 86400000);
  const years = Math.floor(totalDays / 365.25);
  const days = Math.floor(totalDays % 365.25);
  const hours = Math.floor((diff % 86400000) / 3600000);
  return `${years}y ${days}d ${hours}h`;
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

export default function Hero({ name, systemInfo, since }: HeroProps) {
  const uptime = useMemo(() => getUptime(since), [since]);
  const allInfo = [...systemInfo, { label: "UWUPTIME", value: uptime }];

  return (
    <div className="max-w-4xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.p variants={slideSmall} className="text-sm md:text-base text-neutral-600">
          <span className="text-neutral-400">$</span> whoami
        </motion.p>

        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-300 mt-1 mb-6">
          {name.toLowerCase()}
        </motion.p>

        <motion.p variants={slideSmall} className="text-sm md:text-base text-neutral-600 mb-4">
          <span className="text-neutral-400">$</span> uwufetch
        </motion.p>

        <motion.div variants={fadeIn} className="flex gap-6 md:gap-12 items-start">
          <pre className="text-sm md:text-base text-neutral-500 leading-snug select-none font-[inherit]">
            {ascii.join('\n')}
          </pre>

          <div className="text-sm md:text-base leading-snug space-y-0.5">
            <div className="text-neutral-500 mb-2">neonerka@nyarch</div>
            {allInfo.map((info) => (
              <div key={info.label} className="text-neutral-400 whitespace-nowrap">
                <span className="text-neutral-600">{info.label}:</span>{' '}
                <span>{info.value}</span>
              </div>
            ))}
            <div className="mt-2 text-neutral-700 tracking-widest text-xs">
              {'▇'.repeat(16)}
            </div>
          </div>
        </motion.div>

        <motion.p variants={slideSmall} className="text-sm md:text-base text-neutral-600 mt-8">
          <span className="text-neutral-400">$</span> cd ~/info
        </motion.p>

        <motion.p variants={slideSmall} className="text-sm md:text-base text-neutral-600 mt-4">
          <span className="text-neutral-400">$</span> ls -la
        </motion.p>

        <motion.div variants={fadeIn} className="mt-3 text-xs md:text-sm text-neutral-600 leading-relaxed font-mono tracking-tight">
          <p>total 4</p>
          <p>-rw-r--r--  about.txt</p>
          <p>-rw-r--r--  skills.cfg</p>
          <p>-rw-r--r--  TODO.md</p>
          <p>-rw-r--r--  links.cfg</p>
        </motion.div>

        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-600 mt-8">
          $<span className="inline-block w-2.5 h-4 md:w-3 md:h-5 bg-neutral-500 align-middle ml-1 animate-cursor-blink" />
        </motion.p>
      </motion.div>
    </div>
  );
}
