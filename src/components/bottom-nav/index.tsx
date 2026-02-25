import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/navigation-items';

const BottomNav: React.FC = () => {
  const location = useLocation();

  const mobileItems = NAV_ITEMS.slice(0, 4);

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-bg-secondary border-t border-border-default px-5 py-3 z-50 transition-colors duration-300">
      <div className="flex justify-between items-center">
        {mobileItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              to={item.path}
              key={item.label}
              className="flex flex-col items-center gap-1 group no-underline"
            >
              <div
                className={`p-2 rounded-xl transition-all ${
                  isActive
                    ? 'bg-brand text-white shadow-md'
                    : 'text-text-secondary group-hover:text-text-primary'
                }`}
              >
                <item.icon size={20} />
              </div>
              <span
                className={`text-[10px] font-medium ${
                  isActive ? 'text-brand' : 'text-text-secondary'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
