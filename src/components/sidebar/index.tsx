import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Plus, Folder } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/navigation-items';
import ThemeToggle from '../theme-toggle';
import { Button } from '@/shared';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex w-64 h-screen flex-col border-r border-border-default bg-bg-secondary transition-colors duration-300 font-['Plus_Jakarta_Sans']">
      <div className="p-6 pb-8 flex items-center gap-3">
        <div className="w-9 h-9">
          <img
            src="/investa.png"
            alt="Investa"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xl font-bold tracking-tight text-text-primary">
          Investa
        </span>
      </div>

      <nav className="flex-1 px-4">
        <div className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link to={item.path} key={item.label} className="no-underline">
                <Button
                  variant="text"
                  className={`w-full justify-start gap-3 px-4 py-3 text-text-primary ${
                    isActive
                      ? 'bg-bg-highlight font-bold rounded-xl'
                      : 'font-medium'
                  }`}
                >
                  <item.icon size={20} className="text-text-primary" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
        <div className="my-6 mx-4 border-t border-border-default/60" />
        <div className="px-4 flex justify-between items-center text-xs font-bold tracking-[0.15em] text-text-primary mb-3">
          <span>Files</span>
          <Plus
            size={16}
            className="cursor-pointer hover:opacity-30 transition-opacity"
          />
        </div>

        <div className="flex flex-col gap-1">
          {['Communication', 'Affiliates', 'Marketing'].map((file) => (
            <Button
              key={file}
              variant="text"
              className="w-full justify-start gap-3 px-4 py-2 text-text-primary font-medium"
            >
              <Folder size={18} className="text-text-primary" />
              <span className="text-xs">{file}</span>
            </Button>
          ))}
        </div>
      </nav>

      <div className="p-4 mt-auto">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
