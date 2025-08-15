import React from 'react';

interface HeaderProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
      { tabName: 'resume', label: 'Resume' },
      { tabName: 'portfolio', label: 'Portfolio' },
      { tabName: 'services', label: 'Services' },
  ];

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="flex items-center">
                 <h1 className="text-xl font-bold text-card-foreground font-display">
                    Sheenam Middha
                </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
                {navItems.map(item => {
                    const isActive = activeTab === item.tabName;
                    return (
                        <button
                            key={item.tabName}
                            onClick={() => setActiveTab(item.tabName)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            isActive
                                ? 'bg-primary text-primary-foreground font-semibold'
                                : 'text-muted hover:bg-border'
                            }`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {item.label}
                        </button>
                    )
                })}
            </div>
        </nav>
    </header>
  );
};
