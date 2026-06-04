interface TerminalFrameProps {
  title: string;
  children: React.ReactNode;
}

export default function TerminalFrame({ title, children }: TerminalFrameProps) {
  return (
    <div className="h-full flex flex-col border border-neutral-800 bg-black/40 overflow-hidden">
      <div className="px-3 py-1.5 border-b border-neutral-800 bg-neutral-900/30 shrink-0">
        <p className="text-[10px] text-neutral-600 font-mono tracking-tight truncate">
          {title}
        </p>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto p-4 md:p-6">
        {children}
      </div>
    </div>
  );
}
