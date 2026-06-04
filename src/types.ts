export interface SystemInfo {
  label: string;
  value: string;
}

export interface TodoItem {
  done: boolean;
  text: string;
}

export interface ActivityData {
  status: 'in_progress' | 'paused' | 'planned';
  projectName: string;
  description: string;
  repoUrl: string;
  preview?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
  isAchievement?: boolean;
}

export interface LearningTopic {
  topic: string;
  note: string;
}

export interface SectionPhoto {
  src: string;
  label: string;
}

export interface TrackerProject {
  status: 'in_progress' | 'paused' | 'planned';
  projectName: string;
  description: string;
  repoUrl: string;
  todos: TodoItem[];
  photos: SectionPhoto[];
}

export interface LanguageData {
  hero: {
    name: string;
    systemInfo: SystemInfo[];
    since: string;
  };
  story: string[];
  currentlyLearning: LearningTopic[];
  skillCategories: SkillCategory[];
  tracker: TrackerProject[];
  footerLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
  githubStats: {
    repos: number;
    followers: number;
  };
  labels: {
    tracker: string;
    story: string;
    skills: string;
    achievements: string;
    status: string;
    viewOnGitHub: string;
    previous: string;
    next: string;
  };
}
