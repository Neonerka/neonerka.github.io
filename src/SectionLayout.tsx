import { useState, useEffect } from 'react';
import PhotoPanel from './sections/PhotoPanel';
import TerminalFrame from './TerminalFrame';
import type { SectionPhoto } from './types';

interface SectionLayoutProps {
  children: React.ReactNode;
  photos: SectionPhoto[];
  photoSize?: 'default' | 'icon' | 'compact';
  title?: string;
}

function useWideLayout() {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-aspect-ratio: 1/1) and (min-height: 600px)');
    setIsWide(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsWide(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isWide;
}

export default function SectionLayout({ children, photos, photoSize = 'default', title }: SectionLayoutProps) {
  const isWide = useWideLayout();

  if (!isWide) {
    return <>{children}</>;
  }

  return (
    <div className="grid grid-cols-2 gap-[4px] md:gap-[6px] min-h-dvh">
      <div className="min-h-0 overflow-hidden">
        <TerminalFrame title={title ?? 'neonerka@nyarch'}>
          {children}
        </TerminalFrame>
      </div>
      <div className="min-h-0 overflow-hidden">
        <PhotoPanel photos={photos} size={photoSize} />
      </div>
    </div>
  );
}
