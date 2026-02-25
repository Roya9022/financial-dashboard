import React from 'react';
import ThemeToggle from '../theme-toggle';

const MobileTopBar: React.FC = () => {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-bg-secondary border-b border-border-default px-5 flex items-center justify-between z-50">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8">
          <img
            src="/investa.png"
            alt="Investa"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-lg font-bold tracking-tight text-text-primary">
          Investa
        </span>
      </div>
      <ThemeToggle variant="icon" />
    </header>
  );
};

export default MobileTopBar;
