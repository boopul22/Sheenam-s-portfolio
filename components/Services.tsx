import React from 'react';
import { Section } from './Section';
import { ServiceCard, HighlightCard } from './ServiceCard';
import { SkillPill } from './SkillPill';
import { LinkIcon } from './Icons';
import { blogServices, specialOffer, specializedWritingServices, skills, whyChooseMe, sampleLinks } from '../constants';
import { HireMe } from './HireMe';

export const Services: React.FC = () => {
    return (
        <>
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
                  <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1">
                    <div className="text-primary mb-3">{service.icon}</div>
                    <h3 className="font-semibold text-lg text-card-foreground">{service.title}</h3>
                    <p className="text-muted mt-1 text-sm">{service.words}</p>
                    <p className="font-bold text-2xl text-card-foreground mt-4">{service.price}</p>
                  </div>
                ))}
              </div>
            </section>

            <Section title="Experience & Expertise">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="bg-card p-8 rounded-2xl border border-border">
                        <h3 className="font-display text-2xl text-card-foreground mb-4">SEO Writing Samples</h3>
                        <p className="mb-6 text-muted">Proven experience in writing SEO-optimized blogs across various industries, focusing on keyword integration, meta data, and user engagement.</p>
                        <div className="space-y-4">
                            {sampleLinks.map((sample, index) => (
                                <a href={sample.url} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center space-x-3 group bg-background hover:bg-primary/10 p-4 rounded-lg transition-colors duration-300 border border-border">
                                    <div className="text-primary"><LinkIcon /></div>
                                    <span className="font-medium text-foreground group-hover:text-primary">{sample.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-2xl border border-border">
                        <h3 className="font-display text-2xl text-card-foreground mb-4">Core Skills</h3>
                        <p className="mb-6 text-muted">A versatile skill set to ensure high-quality content delivery from research to publication.</p>
                        <div className="flex flex-wrap gap-3">
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
                  <div key={index} className="bg-card p-6 rounded-xl border border-border transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex justify-center items-center h-16 w-16 mx-auto bg-primary/10 text-primary rounded-full mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-card-foreground">{item.title}</h3>
                    <p className="text-muted mt-2 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Ready to Elevate Your Brand?">
                <div className="max-w-4xl mx-auto">
                    <HireMe />
                </div>
            </Section>
        </>
    );
};
