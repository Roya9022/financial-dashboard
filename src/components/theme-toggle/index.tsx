import { useThemeStore } from '../../store/useThemeStore';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  variant?: 'pill' | 'icon';
}

const ThemeToggle = ({ variant = 'pill' }: ThemeToggleProps) => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  if (variant === 'icon') {
    return (
      <button
        onClick={toggleTheme}
        className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-xl bg-bg-primary border border-border-default text-text-primary transition-all active:scale-90"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? (
          <Moon size={18} fill="currentColor" className="text-brand" />
        ) : (
          <Sun size={20} className="text-chart-start" />
        )}
      </button>
    );
  }

  return (
    <div className="px-2 py-4">
      <div
        onClick={toggleTheme}
        className="bg-bg-toggle p-1 rounded-full flex relative transition-colors duration-300 cursor-pointer overflow-hidden"
      >
        <div
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-bg-secondary rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
            isDarkMode ? 'translate-x-full' : 'translate-x-0'
          }`}
        />

        <div className="flex-1 flex items-center justify-center gap-2 py-2 z-10 text-text-primary font-bold">
          <Sun
            size={14}
            strokeWidth={!isDarkMode ? 2.5 : 2}
            fill={!isDarkMode ? 'currentColor' : 'none'}
          />
          <span className="text-[11px] tracking-wider">Light</span>
        </div>
        <div className="flex-1 flex items-center justify-center gap-2 py-2 z-10 text-text-primary font-bold">
          <Moon
            size={14}
            strokeWidth={isDarkMode ? 2.5 : 2}
            fill={isDarkMode ? 'currentColor' : 'none'}
          />
          <span className="text-[11px] tracking-wider">Dark</span>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
