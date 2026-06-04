import type { LanguageData, SectionPhoto } from './types';

export const sectionPhotos: Record<string, SectionPhoto[]> = {
  hero: [
    { src: "/photos/hero2.jpg", label: "hero2" },
  ],
  story: [
    { src: "/photos/about3.jpg", label: "about" },
  ],
  skills: [
    { src: "/photos/archlinux-2026.05.01-x86_64.png", label: "Arch Linux" },
    { src: "/photos/artix-xfce-openrc-20260522-x86_64.png", label: "Artix" },
    { src: "/photos/gentoo-20260524-amd64-minimal.png", label: "Gentoo" },
    { src: "/photos/kali-linux-2026.1-live-amd64.png", label: "Kali" },
    { src: "/photos/nixos-graphical-25.11-x86_64.png", label: "NixOS" },
    { src: "/photos/void-live-x86_64-musl-20250202-base.png", label: "Void" },
  ],
  tracker: [
    { src: "/photos/mylocalstat.png", label: "LocalStat Dashboard" },
  ],
  footer: [
    { src: "/photos/gitacc.png", label: "GitHub" },
    { src: "/photos/steam.png", label: "Steam" },
    { src: "/photos/tg.png", label: "Telegram" },
  ],
};

export const localization: Record<'ru' | 'en', LanguageData> = {
  ru: {
    hero: {
      name: "NEONERKA",
      since: "2010-06-02T02:06:00",
      systemInfo: [
        { label: "OWOS", value: "Nyarch Linuwu" },
        { label: "MOWODEL", value: "Bloatfree-Meowchine" },
        { label: "KEWNEL", value: "Linuwu 7.0.10-arch1-1" },
        { label: "CPUWU", value: "Inteww Cowe i5-12400F" },
        { label: "GPUWU", value: "NyaVIDIA RawRTX 3060" },
        { label: "MEMOWY", value: "6.7 GiB / 31.9 GiB" },
        { label: "SHEWW", value: "fish" },
        { label: "PKGS", value: "1560" },
      ],
    },
    story: [
      "Моя страсть к компьютерам тянется из самого детства. То, что начиналось как простое любопытство и хобби, быстро переросло в дело жизни: сейчас я активно обучаюсь на системного администратора и погружаюсь в DevOps-инженерию.",
      "В сферу моих интересов входит проектирование компьютерных сетей, изучение систем на базе ядра Unix и развертывание графических окружений в виде кастомных тайлинговых оконных менеджеров.",
      "Я пишу скрипты автоматизации на Bash, Sh и Python, интегрирую современные языковые модели в рабочую рутину, занимаюсь глубоким моддингом операционных систем и создаю высокотехнологичные веб-интерфейсы."
    ],    
    currentlyLearning: [
      { topic: "Python", note: "активно изучаю работу с API и асинхронным программированием(AsyncIO)" },
      { topic: "CI/CD Pipelines", note: "автоматизирую деплой проектов через GitHub Actions" },
      { topic: "Docker & Containerization", note: "учусь упаковывать приложения и оркестровать контейнеры" },    
    ],
    skillCategories: [
      {
        title: "Системы",
        items: ["GNU/Linux", "Arch Linux", "Hyprland", "Systemd", "NixOS"],
      },
      {
        title: "Разработка",
        items: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker", "Git"],
      },
      {
        title: "Инфраструктура",
        items: ["Nginx", "Cloudflare", "ZeroTier", "Self-Hosted", "Vim", "LLM"],
      },
      {
        title: "Достижения",
        items: [
          "Освоил полное управление системой с помощью клавиатуры (120 WPM MonkeyType)",
          "Развернул локальные языковые и генеративные модели в едином кастомном дашборде",
          "Развернул медиасервер и файловое хранилище для домашней сети (Self-Hosted)",
          "Написал парсер на Python для автоматического сбора данных с веб-сайтов",
        ],
        isAchievement: true,
      },
    ],
    tracker: {
      status: "in_progress",
      projectName: "LocalStat",
      description: "Персональный кроссплатформенный дашборд мониторинга системы с AI-ассистентом (Ollama), файловым менеджером, генерацией изображений Stable Diffusion и встроенным веб-терминалом через XTerm.js. Поддерживает сканирование сети, а также полноценный сбор системной телеметрии (CPU/RAM/Storage) на Android-устройствах через Termux",
      repoUrl: "https://github.com/Neonerka/LocalStat",
      todos: [
        { done: true, text: "Мониторинг системы (CPU/RAM/Диск/GPU)" },
        { done: true, text: "Сканирование сети и обнаружение устройств" },
        { done: true, text: "AI-чат с Ollama (мультисессии)" },
        { done: true, text: "Генерация изображений Stable Diffusion" },
        { done: true, text: "Веб-терминал (PTY через WebSocket)" },
        { done: true, text: "Файловый менеджер с шарингом" },
        { done: true, text: "Кроссплатформа (Termux + Desktop)" },
        { done: false, text: "Автовыгрузка файлов на сервер" },
        { done: false, text: "Медиасервер (ждёт HDD)" },
      ],
    },
    footerLinks: [
      { name: "Мысли", url: "https://t.me/logovoneonerki", icon: "Send" },
      { name: "Личка", url: "https://t.me/neonerka", icon: "MessageSquare" },
      { name: "ТикТок", url: "https://tiktok.com/neonerka", icon: "Video" },
      { name: "Стим", url: "https://steamcommunity.com/profiles/76561199193561885/", icon: "Gamepad2" },
      { name: "Шикимори", url: "https://shikimori.io/neonerka", icon: "Tv" },
      { name: "ГитХаб", url: "https://github.com/Neonerka", icon: "Github" },
    ],
    githubStats: { repos: 5, followers: 2 },
    labels: {
      tracker: "Текущая активность",
      story: "История",
      skills: "Навыки и достижения",
      achievements: "Достижения",
      status: "Статус",
      viewOnGitHub: "Открыть на GitHub",
    },
  },

  en: {
    hero: {
      name: "NEONERKA",
      since: "2010-06-02T02:06:00",
      systemInfo: [
        { label: "OWOS", value: "Nyarch Linuwu" },
        { label: "MOWODEL", value: "Bloatfree-Meowchine" },
        { label: "KEWNEL", value: "Linuwu 7.0.10-arch1-1" },
        { label: "CPUWU", value: "Inteww Cowe i5-12400F" },
        { label: "GPUWU", value: "NyaVIDIA RawRTX 3060" },
        { label: "MEMOWY", value: "6.7 GiB / 31.9 GiB" },
        { label: "SHEWW", value: "fish" },
        { label: "PKGS", value: "1560" },
      ],
    },
    story: [
      "My passion for computers dates back to early childhood. What started as simple curiosity and a hobby quickly grew into a life pursuit — I'm actively training to become a system administrator and diving deep into DevOps engineering.",
      "My areas of interest include computer network design, Unix-based system internals, and deploying custom tiling window manager desktops.",
      "I write automation scripts in Bash, Sh, and Python, integrate modern language models into my daily workflow, do deep OS modding, and build high-tech web interfaces.",
    ],
    currentlyLearning: [
      { topic: "Python", note: "actively studying API usage and asynchronous programming (AsyncIO)" },
      { topic: "CI/CD Pipelines", note: "automating project deployment through GitHub Actions" },
      { topic: "Docker & Containerization", note: "learning to package applications and orchestrate containers" },
    ],
    skillCategories: [
      {
        title: "Systems",
        items: ["GNU/Linux", "Arch Linux", "Hyprland", "Systemd", "NixOS"],
      },
      {
        title: "Development",
        items: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker", "Git"],
      },
      {
        title: "Infrastructure",
        items: ["Nginx", "Cloudflare", "ZeroTier", "Self-Hosted", "Vim", "LLM"],
      },
      {
        title: "Achievements",
        items: [
          "Mastered full keyboard-driven system control (120 WPM on MonkeyType)",
          "Deployed local language and generative models in a custom unified dashboard",
          "Set up a media server and file storage for home network (Self-Hosted)",
          "Wrote a Python parser for automated web data collection",
        ],
        isAchievement: true,
      },
    ],
    tracker: {
      status: "in_progress",
      projectName: "LocalStat",
      description: "A personal cross-platform system monitoring dashboard with an AI assistant (Ollama), file manager, Stable Diffusion image generation, and a built-in web terminal via XTerm.js. Supports network scanning and full system telemetry collection (CPU/RAM/Storage) on Android devices through Termux.",
      repoUrl: "https://github.com/Neonerka/LocalStat",
      todos: [
        { done: true, text: "System monitoring (CPU/RAM/Disk/GPU)" },
        { done: true, text: "Network scanning and device discovery" },
        { done: true, text: "AI chat with Ollama (multi-session)" },
        { done: true, text: "Stable Diffusion image generation" },
        { done: true, text: "Web terminal (PTY via WebSocket)" },
        { done: true, text: "File manager with sharing" },
        { done: true, text: "Cross-platform (Termux + Desktop)" },
        { done: false, text: "Auto-upload files to server" },
        { done: false, text: "Media server (waiting for HDD)" },
      ],
    },
    footerLinks: [
      { name: "Thoughts", url: "https://t.me/logovoneonerki", icon: "Send" },
      { name: "Telegram", url: "https://t.me/neonerka", icon: "MessageSquare" },
      { name: "TikTok", url: "https://tiktok.com/neonerka", icon: "Video" },
      { name: "Steam", url: "https://steamcommunity.com/profiles/76561199193561885/", icon: "Gamepad2" },
      { name: "Shikimori", url: "https://shikimori.io/neonerka", icon: "Tv" },
      { name: "GitHub", url: "https://github.com/Neonerka", icon: "Github" },
    ],
    githubStats: { repos: 5, followers: 2 },
    labels: {
      tracker: "Current Activity",
      story: "Story",
      skills: "Skills & Achievements",
      achievements: "Achievements",
      status: "Status",
      viewOnGitHub: "View on GitHub",
    },
  },
};
