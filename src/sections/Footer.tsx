import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { GithubIcon } from '../icons';

interface FooterLink {
  name: string;
  url: string;
  icon: string;
}

interface FooterProps {
  links: FooterLink[];
  githubStats: { repos: number; followers: number };
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const slideSmall = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

export default function Footer({ links, githubStats: fallback }: FooterProps) {
  const [stats, setStats] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch('https://api.github.com/users/Neonerka')
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.public_repos != null && data.followers != null) {
          setStats({ repos: data.public_repos, followers: data.followers });
        }
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="max-w-3xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-500 mb-8">
          <span className="text-neutral-400">$</span> cat links.cfg
        </motion.p>

        <div className="space-y-3">
          {links.map((link) => {
            const IconComponent = link.icon === 'Github'
              ? GithubIcon
              : (Icons as any)[link.icon] || Icons.Link;
            return (
              <motion.a
                key={link.name}
                variants={slideSmall}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm md:text-base text-neutral-600 hover:text-neutral-300 transition-colors duration-200"
              >
                <IconComponent className="w-4 h-4 stroke-[1.5] text-neutral-500" />
                <span className="w-20 md:w-28 text-neutral-500">{link.name}</span>
                <span className="text-neutral-600">→</span>
                <span className="text-neutral-500 truncate">{link.url}</span>
              </motion.a>
            );
          })}
        </div>

        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-500 mt-10 mb-4">
          <span className="text-neutral-400">$</span> curl -s "https://api.github.com/users/Neonerka"
        </motion.p>

        {loading ? (
          <motion.p variants={slideSmall} className="text-sm md:text-base text-neutral-500 ml-5">
            <span className="text-neutral-600">&gt;</span> <span className="animate-pulse">...</span>
          </motion.p>
        ) : (
          <>
            <motion.p variants={slideSmall} className="text-sm md:text-base text-neutral-500 ml-5">
              <span className="text-neutral-600">&gt;</span> {stats.repos} public repos
            </motion.p>
            <motion.p variants={slideSmall} className="text-sm md:text-base text-neutral-500 ml-5">
              <span className="text-neutral-600">&gt;</span> {stats.followers} followers
            </motion.p>
          </>
        )}

        <motion.p variants={fadeIn} className="text-sm md:text-base text-neutral-600 mt-10">
          $<span className="inline-block w-2.5 h-4 md:w-3 md:h-5 bg-neutral-500 align-middle ml-1 animate-cursor-blink" />
        </motion.p>
      </motion.div>
    </div>
  );
}
