import { useState, useEffect } from 'react';
import { localization, sectionPhotos } from './data';
import SectionWrapper from './SectionWrapper';
import SectionLayout from './SectionLayout';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Skills from './sections/Skills';
import Tracker from './sections/Tracker';
import Footer from './sections/Footer';
import AppMobile from './AppMobile';

function useMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return mobile;
}

export default function App() {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const [trackerIdx, setTrackerIdx] = useState(0);
  const data = localization[lang];
  const isMobile = useMobile();

  const handleSetLang = (l: 'ru' | 'en') => {
    setLang(l);
    if (!isMobile) setTrackerIdx(0);
  };

  if (isMobile) {
    return <AppMobile data={data} lang={lang} onLangChange={setLang} />;
  }

  return (
    <div className="relative w-full min-h-screen bg-[#050505]">
      <div className="fixed top-6 right-6 z-50 flex gap-0.5 p-0.5 border border-white/[0.06] bg-black/80">
        {(['ru', 'en'] as const).map((l) => (
          <button
            key={l}
            onClick={() => handleSetLang(l)}
            className={`px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
              lang === l
                ? 'bg-white text-black'
                : 'text-neutral-600 hover:text-neutral-400'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="relative z-10">
        <SectionWrapper key={`hero-${lang}`} id="hero">
          <SectionLayout photos={sectionPhotos.hero} photoSize="default">
            <Hero
              name={data.hero.name}
              systemInfo={data.hero.systemInfo}
              since={data.hero.since}
            />
          </SectionLayout>
        </SectionWrapper>

        <SectionWrapper key={`story-${lang}`} id="story">
          <SectionLayout photos={sectionPhotos.story} photoSize="default">
            <Story
              paragraphs={data.story}
              currentlyLearning={data.currentlyLearning}
            />
          </SectionLayout>
        </SectionWrapper>

        <SectionWrapper key={`skills-${lang}`} id="skills">
          <SectionLayout photos={sectionPhotos.skills} photoSize="icon">
            <Skills
              categories={data.skillCategories}
              achievementsLabel={data.labels.achievements}
            />
          </SectionLayout>
        </SectionWrapper>

        <SectionWrapper key={`tracker-${lang}-${trackerIdx}`} id="tracker">
          <SectionLayout photos={data.tracker[trackerIdx].photos} photoSize="default">
            <Tracker
              projects={data.tracker}
              currentIdx={trackerIdx}
              onSelect={(idx) => setTrackerIdx(idx)}
              viewOnGitHub={data.labels.viewOnGitHub}
            />
          </SectionLayout>
        </SectionWrapper>

        <SectionWrapper key={`footer-${lang}`} id="footer">
          <SectionLayout photos={sectionPhotos.footer} photoSize="compact">
            <Footer
              links={data.footerLinks}
              githubStats={data.githubStats}
            />
          </SectionLayout>
        </SectionWrapper>
      </div>
    </div>
  );
}
