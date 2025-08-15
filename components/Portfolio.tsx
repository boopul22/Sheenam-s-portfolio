import React from 'react';
import { Section } from './Section';
import { portfolioData } from '../constants';
import { CheckCircleIcon, DocumentTextIcon, InstagramIcon } from './Icons';

export const Portfolio: React.FC = () => {
  return (
    <div className="bg-background">
      <Section title="Professional Summary">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted text-lg text-center mb-8">{portfolioData.summary}</p>
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Here’s what I deliver:</h3>
            <ul className="space-y-3">
              {portfolioData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-3" />
                  <span className="text-muted">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Work Samples">
        <div className="max-w-5xl mx-auto">
            <p className="text-muted text-lg text-center mb-12">{portfolioData.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.work.map((category, index) => (
                    <div key={index} className="bg-card p-6 rounded-2xl border border-border flex flex-col hover:-translate-y-1 transition-all duration-300">
                        <h3 className="font-display text-2xl text-card-foreground mb-4 border-b border-border pb-3">{category.category}</h3>
                        {category.description && <p className="text-muted text-sm mb-4 whitespace-pre-line">{category.description}</p>}
                        <div className="space-y-3 flex-grow">
                            {category.items.map((item, itemIndex) => (
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    key={itemIndex}
                                    className="flex items-center space-x-3 group bg-background hover:bg-primary/10 p-3 rounded-lg transition-colors duration-300 border border-border"
                                >
                                    <div className="text-primary">
                                        {item.type === 'instagram' ? <InstagramIcon className="w-6 h-6" /> : <DocumentTextIcon className="w-6 h-6" />}
                                    </div>
                                    <span className="font-medium text-sm text-foreground group-hover:text-primary truncate">
                                        {item.type === 'instagram' ? 'View Post on Instagram' : 'View Document'}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20 text-center">
                <h3 className="font-display text-3xl text-card-foreground">Get Your Free Content Starter Audit</h3>
                <p className="mt-4 text-muted max-w-2xl mx-auto">
                    Want to see how I think? Download my free 1-page template to audit your current content and identify quick wins for your brand. This is a small sample of the strategic value I provide.
                </p>
                <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert('In a real application, this would start a download!'); }}
                    className="mt-6 inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
                >
                    Download Free Audit Template
                </a>
            </div>
            <div className="mt-12 text-center bg-card p-8 rounded-2xl border border-border">
                <p className="text-muted max-w-2xl mx-auto">{portfolioData.conclusion}</p>
            </div>
        </div>
      </Section>
    </div>
  );
};