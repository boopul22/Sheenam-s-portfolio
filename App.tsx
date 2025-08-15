import React, { useState } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ServiceCard, HighlightCard } from './components/ServiceCard';
import { SkillPill } from './components/SkillPill';
import { ContactFooter } from './components/ContactFooter';
import { blogServices, specialOffer, specializedWritingServices, skills, whyChooseMe, sampleLinks } from './constants';
import { LinkIcon, DocumentTextIcon, PencilSquareIcon, UserCircleIcon, SparklesIcon } from './components/Icons';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';

const navItems = [
    { tabName: 'resume', label: 'Resume', icon: <UserCircleIcon className="w-6 h-6 mb-1" /> },
    { tabName: 'portfolio', label: 'Portfolio', icon: <SparklesIcon className="w-6 h-6 mb-1" /> },
    { tabName: 'services', label: 'Services', icon: <PencilSquareIcon className="w-6 h-6 mb-1" /> },
];

const BottomNav: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void; }> = ({ activeTab, setActiveTab }) => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50">
            <div className="container mx-auto px-6 flex justify-around">
                {navItems.map(item => {
                    const isActive = activeTab === item.tabName;
                    return (
                        <button
                            key={item.tabName}
                            onClick={() => setActiveTab(item.tabName)}
                            className={`flex flex-col items-center justify-center w-full pt-3 pb-2 text-xs font-medium transition-colors duration-200 ${
                                isActive ? 'text-primary' : 'text-muted hover:text-foreground'
                            }`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    )
                })}
            </div>
        </nav>
    );
};


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('resume');

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="pb-24 md:pb-0">
        {activeTab === 'resume' && <Resume />}
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'services' && (
          <>
            <header className="bg-card border-b border-border">
                <div className="container mx-auto px-6 py-16 text-center">
                    <div className="mx-auto max-w-lg">
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3%D" 
                            alt="Sheenam Middha" 
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 border-4 border-primary object-cover"
                        />
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-card-foreground">
                            Sheenam Middha
                        </h1>
                        <p className="text-xl md:text-2xl text-primary mt-2 font-light">
                            A Portfolio of Content & SEO Strategy
                        </p>
                        <p className="mt-6 text-muted max-w-md mx-auto">
                            Crafting compelling narratives, SEO-driven articles, and persuasive documents to elevate your brand.
                        </p>
                    </div>
                </div>
            </header>
            
            <Section title="Blog & Article Writing">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
              <div className="mt-12">
                <HighlightCard {...specialOffer} />
              </div>
            </Section>
            
            <Section title="Visa, Immigration & Travel Writing">
              <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {specializedWritingServices.map((service, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
                    <div className="text-primary mb-3">{service.icon}</div>
                    <h3 className="font-semibold text-lg text-card-foreground">{service.title}</h3>
                    <p className="text-muted mt-1 text-sm">{service.words}</p>
                    <p className="font-bold text-2xl text-card-foreground mt-4">{service.price}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Experience & Expertise">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="bg-card p-8 rounded-2xl border border-border">
                        <h3 className="font-display text-2xl text-card-foreground mb-4">SEO Writing Samples</h3>
                        <p className="mb-6 text-muted">Proven experience in writing SEO-optimized blogs across various industries, focusing on keyword integration, meta data, and user engagement.</p>
                        <div className="space-y-4">
                            {sampleLinks.map((sample, index) => (
                                <a href={sample.url} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center space-x-3 group bg-accent-background hover:bg-primary/10 p-4 rounded-lg transition-colors duration-300">
                                    <div className="text-primary"><LinkIcon /></div>
                                    <span className="font-medium text-foreground group-hover:text-primary">{sample.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-2xl border border-border">
                        <h3 className="font-display text-2xl text-card-foreground mb-4">Core Skills</h3>
                        <p className="mb-6 text-muted">A versatile skill set to ensure high-quality content delivery from research to publication.</p>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, index) => (
                                <SkillPill key={index} icon={skill.icon} label={skill.label} />
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
            
            <Section title="Why Choose Me?">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {whyChooseMe.map((item, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border">
                    <div className="flex justify-center items-center h-16 w-16 mx-auto bg-primary/20 text-primary rounded-full mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-card-foreground">{item.title}</h3>
                    <p className="text-muted mt-2 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Let's Work Together">
                <div className="text-center max-w-2xl mx-auto bg-primary text-primary-foreground p-10 rounded-2xl">
                    <div className="text-5xl mb-4 opacity-80"><PencilSquareIcon /></div>
                    <h3 className="font-display text-3xl mb-4">Start a Project</h3>
                    <p className="opacity-90 mb-6">Interested in collaborating? I'm available for new projects and would love to discuss how my skills can benefit your brand.</p>
                    <a href="mailto:sheenammiddha.19@gmail.com" className="inline-block bg-card text-primary font-bold py-3 px-8 rounded-full hover:bg-background transition-colors duration-300">
                        Get in Touch
                    </a>
                </div>
            </Section>
          </>
        )}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <ContactFooter />
    </div>
  );
};

export default App;