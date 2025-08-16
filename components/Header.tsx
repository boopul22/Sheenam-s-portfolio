
import React from 'react';

interface HeaderProps {
    activeTab: string;
}

export const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  const navItems = [
      { tabName: 'services', label: 'Services' },
      { tabName: 'portfolio', label: 'Portfolio' },
      { tabName: 'resume', label: 'Resume' },
  ];

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-40">
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
                    const path = `/#${item.tabName}`;
                    return (
                        <a
                            key={item.tabName}
                            href={path}
                            onClick={() => window.scrollTo(0, 0)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative ${
                            isActive
                                ? 'text-primary'
                                : 'text-muted hover:text-foreground hover:bg-border/50'
                            }`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {item.label}
                            {isActive && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></span>
                            )}
                        </a>
                    )
                })}
            </div>
        </nav>
    </header>
  );
};
