import { motion } from 'framer-motion';

interface Balloon {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  sway: number;
  side: 'left' | 'right';
}

const balloons: Balloon[] = [
  { id: 1, x: 5, y: 90, size: 48, delay: 0, duration: 8, sway: 30, side: 'left' },
  { id: 2, x: 8, y: 70, size: 36, delay: 1.5, duration: 10, sway: 25, side: 'left' },
  { id: 3, x: 3, y: 50, size: 42, delay: 3, duration: 9, sway: 35, side: 'left' },
  { id: 4, x: 6, y: 30, size: 32, delay: 4.5, duration: 11, sway: 20, side: 'left' },
  { id: 5, x: 95, y: 85, size: 44, delay: 0.8, duration: 9, sway: 28, side: 'right' },
  { id: 6, x: 92, y: 65, size: 34, delay: 2.5, duration: 8.5, sway: 22, side: 'right' },
  { id: 7, x: 97, y: 45, size: 40, delay: 4, duration: 10.5, sway: 30, side: 'right' },
  { id: 8, x: 94, y: 25, size: 30, delay: 5.5, duration: 9.5, sway: 18, side: 'right' },
];

export const Balloons: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {balloons.map((b) => (
        <div
          key={b.id}
          style={{
            position: 'absolute',
            left: b.side === 'left' ? `${b.x}%` : undefined,
            right: b.side === 'right' ? `${100 - b.x}%` : undefined,
            top: `${b.y}%`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '2px',
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)',
              marginBottom: '-4px',
            }}
          />
          <motion.div
            initial={{ y: 0, x: 0, opacity: 0.6 }}
            animate={{
              y: [0, -(b.y + 50)],
              x: [0, b.sway * (b.side === 'left' ? 1 : -1), 0, b.sway * (b.side === 'left' ? 0.7 : -0.7), 0],
              opacity: [0.6, 1, 1, 1, 0.3],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              delay: b.delay,
              ease: 'easeInOut',
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            style={{
              fontSize: b.size,
              lineHeight: 1,
              filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.1))',
              transformOrigin: 'bottom center',
            }}
          >
            🎈
          </motion.div>
        </div>
      ))}
    </div>
  );
};
