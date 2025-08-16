
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
    <header className="bg-card border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 py-10 sm:py-16 text-center">
            <div className="mx-auto max-w-2xl">
                <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-lg animate-pulse-glow" style={{ animationDuration: '6s' }}></div>
                    <img 
                        src="https://ik.imagekit.io/adplbvb1c/Remove%20background%20project.png?updatedAt=1755345488990" 
                        alt="Sheenam Middha"
                        className="relative w-full h-full object-cover rounded-full shadow-lg" 
                    />
                </div>
                <h1 className="text-4xl md:text-5xl font-anton uppercase tracking-wider text-card-foreground mt-6">
                    Sheenam Middha
                </h1>
                <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
                    Content Writer & Social Media Strategist
                </p>
                <a 
                    href="#resume" 
                    className="mt-8 inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105 animate-pulse-glow"
                >
                    View My Work
                </a>
            </div>
        </div>
    </header>
);

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState('services');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (['services', 'portfolio', 'resume'].includes(hash)) {
                setActiveTab(hash);
            } else {
                setActiveTab('services');
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Set initial tab

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    let content;
    switch (activeTab) {
        case 'resume':
            content = (
                <>
                    <Hero />
                    <Resume />
                </>
            );
            break;
        case 'portfolio':
            content = <Portfolio />;
            break;
        case 'services':
        default:
            content = <Services />;
            break;
    }

    return (
        <div className="bg-background min-h-screen">
            <Header activeTab={activeTab} />
            <main id={activeTab} className="pt-16 sm:pt-20"> {/* Add padding top to avoid overlap */}
                {content}
            </main>
            <ContactFooter />
            <BottomNav activeTab={activeTab} />
        </div>
    );
};

export default App;