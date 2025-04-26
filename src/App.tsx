import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { TripProvider } from './context/TripContext';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-4 right-4 z-50
        p-2 rounded-full
        ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-md'}
      `}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-gray-700" />
      )}
    </button>
  );
};

const AppContent: React.FC = () => {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    // In a real app, we would check if the user has completed onboarding
    const hasOnboarded = localStorage.getItem('onboarded');
    if (hasOnboarded === 'true') {
      setIsOnboarded(true);
    }
  }, []);
  
  const handleOnboardingComplete = () => {
    localStorage.setItem('onboarded', 'true');
    setIsOnboarded(true);
  };
  
  return (
    <div className={`
      min-h-screen
      ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}
    `}>
      <ThemeSwitcher />
      
      {isOnboarded ? (
        <Dashboard />
      ) : (
        <Onboarding onComplete={handleOnboardingComplete} />
      )}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <TripProvider>
        <AppContent />
      </TripProvider>
    </ThemeProvider>
  );
}

export default App;