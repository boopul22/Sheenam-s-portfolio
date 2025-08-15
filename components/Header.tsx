import React, { useState } from 'react';

interface HeaderProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsMenuOpen(false); // Close menu on selection
  };

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
                            onClick={() => handleTabClick(item.tabName)}
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

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-muted hover:text-card-foreground hover:bg-border focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {/* Hamburger Icon */}
                    {!isMenuOpen ? (
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    ) : (
                    // Close Icon
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </button>
            </div>
        </nav>

        {/* Mobile Menu dropdown */}
        {isMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map(item => {
                        const isActive = activeTab === item.tabName;
                        return (
                            <button
                                key={item.tabName}
                                onClick={() => handleTabClick(item.tabName)}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                                    isActive
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted hover:bg-border hover:text-card-foreground'
                                }`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {item.label}
                            </button>
                        )
                    })}
                </div>
            </div>
        )}
    </header>
  );
};
