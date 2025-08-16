
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ContactFooter } from './components/ContactFooter';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { UserCircleIcon, SparklesIcon, PencilSquareIcon } from './components/Icons';

const navItems = [
    { tabName: 'services', label: 'Services', icon: <PencilSquareIcon className="w-6 h-6" /> },
    { tabName: 'portfolio', label: 'Portfolio', icon: <SparklesIcon className="w-6 h-6" /> },
    { tabName: 'resume', label: 'Resume', icon: <UserCircleIcon className="w-6 h-6" /> },
];

interface NavProps {
    activeTab: string;
}

const BottomNav: React.FC<NavProps> = ({ activeTab }) => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50">
            <div className="container mx-auto px-4 flex justify-around">
                {navItems.map(item => {
                    const isActive = activeTab === item.tabName;
                    return (
                        <a
                            key={item.tabName}
                            href={`/#${item.tabName}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className={`flex flex-col items-center justify-center w-full pt-3 pb-2 text-xs font-medium transition-all duration-300 relative ${
                                isActive ? 'text-primary bg-primary/10' : 'text-muted hover:text-foreground'
                            }`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            <div className="mb-1">{item.icon}</div>
                            <span>{item.label}</span>
                        </a>
                    )
                })}
            </div>
        </nav>
    );
};

// Hero Component - now shown only on resume page
const Hero: React.FC = () => (
    <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-10 sm:py-16 text-center">
            <div className="mx-auto max-w-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3%D" 
                    alt="Sheenam Middha" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 border-4 border-primary object-cover"
                />
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-card-foreground">
                    Sheenam Middha
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-primary mt-2 font-semibold">
                    Content Writer (SEO, Blogs, Email) | Social Media Manager (Organic + Reels)
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-muted">
                    <span className="font-semibold text-foreground">🚀 3M+ Organic Views</span>
                    <span className="hidden sm:inline text-primary/50">|</span>
                    <span className="font-semibold text-foreground">📈 +220% Follower Growth</span>
                     <span className="hidden sm:inline text-primary/50">|</span>
                    <span className="font-semibold text-foreground">💻 120K Monthly Blog Visits</span>
                </div>
                <p className="mt-6 text-muted max-w-lg mx-auto">
                    Crafting compelling narratives and data-driven content systems that drive traffic, engagement, and conversions for B2B & B2C brands.
                </p>
            </div>
        </div>
    </header>
);

const getTabFromHash = () => {
    const hash = window.location.hash.substring(1); // remove leading '#'
    const validTabs = navItems.map(item => item.tabName);
    if (validTabs.includes(hash)) {
        return hash;
    }
    return 'services'; // Default tab
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(getTabFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getTabFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen pb-24 md:pb-0">
      <Header activeTab={activeTab} />

      <main>
        {activeTab === 'resume' && (
            <>
                <Hero />
                <Resume />
            </>
        )}
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'services' && <Services />}
      </main>

      <BottomNav activeTab={activeTab} />
      <ContactFooter />
    </div>
  );
};

export default App;
