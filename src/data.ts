export interface LanguageData {
  personalInfo: {
    name: string;
    role: string;
    bio: string;
  };
  skills: string[];
  socialLinks: {
    name: string;
    url: string;
    icon: string;
    color: string;
  }[];
  labels: {
    nodes: string;
  };
}

export const localization: Record<'ru' | 'en', LanguageData> = {
  ru: {
    personalInfo: {
      name: "neonerka",
      role: "Энтузиаст систем на базе Linux/Unix",
      bio: "Малый обучающийся программаторный компьютерный гений и магистр линукс-технологий. Изучаю высокотехнологичные веб-интерфейсы, среднеуровневые языки программирования, системы на базе ядра Unix и графические окружения в виде тайлинговых оконных менеджеров. Пишу скрипты на Bash/Sh/Python, занимаюсь глубокой кастомизацией окружения и обучаюсь на системного администратора.",
    },
    skills: [
      "Системы Linux/Unix", 
      "Системы на базе Arch", 
      "Редактор Vim / Vi", 
      "Скрипты на SH", 
      "Утилита Git", 
      "Контейнеры Docker", 
      "Сервер Nginx", 
      "Туннели Cloudflare"
    ],
    socialLinks: [
      { name: "Мысли | Блог", url: "https://t.me/logovoneonerki", icon: "Send", color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "Связь | ТГ", url: "https://t.me/neonerka", icon: "MessageSquare", color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "ТикТок | Профиль", url: "https://tiktok.com/neonerka", icon: "Video", color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "Стим | Игры", url: "https://steamcommunity.com/profiles/76561199193561885/", icon: "Gamepad2", color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "Шикимори | Аниме", url: "https://shikimori.io/neonerka", icon: "Tv", color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "ГитХаб | Профиль", url: "https://github.com/Neonerka", icon: "Github", color: "hover:text-white hover:border-white/29 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "СаундКлауд | Лайки", url: "https://soundcloud.com/neonerka/likes", icon: "Music", color: "hover:text-white hover:border-white/29 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "СаундКлауд | Профиль", url: "https://soundcloud.com/neonerka", icon: "Music", color: "hover:text-white hover:border-white/29 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "Доты | Hypr (скоро)", url: "", icon: "Github", color: "hover:text-white hover:border-white/29 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "Доты | DrWM (скоро)", url: "", icon: "Github", color: "hover:text-white hover:border-white/29 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
    ],
    labels: {
      nodes: "Ссылки"
    }
  },
  en: {
    personalInfo: {
      name: "neonerka",
      role: "Linux/unix Based System Enthusiast",
      bio: "Junior tech-learner, hardware geek, and master of Linux technologies. I study high-tech web interfaces, mid-level programming languages, Unix-like core systems, and tiling window managers. Writing production-ready Bash/Sh/Python automation scripts, mastering deep system environment customization, and training to become a professional system administrator.",
    },
    skills: [
      "Linux/Unix based system", 
      "Arch based system", 
      "Vi Improved", 
      "SH Scripting", 
      "Git", 
      "Docker", 
      "Nginx", 
      "Cloudflare Tunnels"
    ],
    socialLinks: [
      { name: "Thoughts | DevLog", url: "https://t.me/logovoneonerki", icon: "Send", color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "Telegram | Profile", url: "https://t.me/neonerka", icon: "MessageSquare", color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "TikTok | Profile", url: "https://tiktok.com/neonerka", icon: "Video", color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "Steam | Profile", url: "https://steamcommunity.com/profiles/76561199193561885/", icon: "Gamepad2", color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "Shikimori | Anime", url: "https://shikimori.io/neonerka", icon: "Tv", color: "hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "GitHub | Profile", url: "https://github.com/Neonerka", icon: "Github", color: "hover:text-white hover:border-white/29 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "SoundCloud | Likes", url: "https://soundcloud.com/neonerka/likes", icon: "Music", color: "hover:text-white hover:border-white/29 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "SoundCloud | Profile", url: "https://soundcloud.com/neonerka", icon: "Music", color: "hover:text-white hover:border-white/29 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "Dots | Hypr(soon)", url: "", icon: "Github", color: "hover:text-white hover:border-white/29 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
      { name: "Dots | DrWM(soon)", url: "", icon: "Github", color: "hover:text-white hover:border-white/29 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
    ],
    labels: {
      nodes: "Links"
    }
  }
};

