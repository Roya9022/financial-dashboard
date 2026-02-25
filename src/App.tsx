import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useThemeStore } from './store/useThemeStore';
import { Sidebar, BottomNav, TopBar } from './components';
import PortfolioDashboard from './features/portfolio';

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen lg:h-screen bg-app-bg-light dark:bg-app-bg-dark flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
      <TopBar />
      <Sidebar />

      <main className="flex-1 px-4 pt-20 pb-24 lg:p-4 lg:pt-4 lg:pb-4 min-w-0 flex flex-col">
        <Routes>
          <Route path="/" element={<Navigate to="/portfolio" replace />} />
          <Route path="/portfolio" element={<PortfolioDashboard />} />
          <Route path="*" element={<Navigate to="/portfolio" replace />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
