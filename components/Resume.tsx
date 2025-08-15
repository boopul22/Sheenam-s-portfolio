import React from 'react';
import { EnvelopeIcon, PhoneIcon, LinkedInIcon } from './Icons';
import { HireMe } from './HireMe';

const resumeData = {
    contact: {
        phone: '+91 99884-41561',
        email: 'sheenammiddha.19@gmail.com',
        linkedin: 'http://www.linkedin.com/in/sheenam-middha/',
        linkedinDisplay: 'in/sheenam-middha'
    },
    about: 'Results-driven Content Writer & Social Media Manager with 4+ years of experience, specializing in B2B/B2C tech and SaaS. I build content engines that deliver measurable results: grew organic traffic to 120K/month, increased Instagram followers by +220% in 6 months, and generated over 3 million organic views on short-form video.',
    experience: [
        {
            title: 'Content Writer & Social Media Strategist',
            company: 'Bright Head IT Pvt. Ltd.',
            dates: 'July 2023 - Present',
            points: [
                'Built an Instagram content system (hooks, carousels, reels) that lifted reach to 3.1M and grew followers +220% in 6 months.',
                'Wrote and optimized 50+ SEO articles that grew organic search ranking by 35X, contributing to a 25-30X increase in monthly website visits.',
                'Developed and executed a multi-platform content strategy focused on audience retention and search engine optimization.',
                'Managed editorial calendars and content distribution across blog, email, and social channels.'
            ],
        },
        {
            title: 'Content Writer',
            company: 'Whizamet Services Pvt. Ltd',
            dates: 'October 2022 – July 2023',
            points: [
                'Authored 24+ long-form SEO articles that grew organic traffic from 18K to over 62K/month in 4 months (+244%).',
                'Rewrote email nurture sequences that improved click-to-open rates from 2.8% to 6.4% and boosted trial-to-paid conversions by +31%.',
                'Collaborated with design and marketing teams to ensure content was aligned with brand voice and campaign goals.',
                'Performed keyword research and competitive analysis to identify high-impact content opportunities.',
            ],
        },
    ],
    education: [
        {
            degree: 'Master of Computer Applications',
            university: 'Bikaner Technical University',
            dates: '2021 - 2023',
        },
        {
            degree: 'Bachelor of Computer Applications',
            university: 'Maharaja Ganga Singh University',
            dates: '2017 - 2020',
        },
    ],
    skills: ['Content Writing', 'SEO Content', 'Copywriting', 'Editorial Calendars', 'Brand Voice', 'Social Media Strategy', 'Community Management', 'Short-form Video Scripts', 'Content Strategy', 'Email Marketing'],
    tools: ['Google Analytics (GA4)', 'Ahrefs', 'SEMrush', 'Google Search Console', 'WordPress', 'Canva', 'Adobe Express', 'Hootsuite', 'Buffer', 'Notion', 'Grammarly'],
};

const SidebarSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">{title}</h3>
        {children}
    </div>
);

const MainSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section>
        <h3 className="font-display text-2xl font-bold text-card-foreground border-b-2 border-primary/20 pb-2 mb-6">{title}</h3>
        {children}
    </section>
);

export const Resume: React.FC = () => {
    return (
        <div className="bg-background text-foreground font-sans">
            <div className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
                <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border">
                    <div className="text-center mb-8 border-b border-border pb-4">
                        <h2 className="text-lg font-semibold uppercase tracking-widest text-primary">
                            Target Roles: Content Writer | Social Media Manager
                        </h2>
                    </div>
                    <div className="mb-10">
                      <HireMe />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        
                        {/* Main Content (appears first on mobile) */}
                        <main className="lg:col-span-2">
                            <MainSection title="Summary">
                                <p className="text-muted leading-relaxed">{resumeData.about}</p>
                            </MainSection>

                            <div className="mt-10">
                                <MainSection title="Work Experience">
                                    <div className="relative space-y-8 before:absolute before:inset-y-0 before:w-0.5 before:bg-border before:left-3">
                                        {resumeData.experience.map((job, i) => (
                                            <div key={i} className="relative pl-10">
                                                <div className="absolute w-5 h-5 bg-primary rounded-full left-1 top-1 border-4 border-background"></div>
                                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                                                    <h4 className="font-semibold text-lg text-card-foreground">{job.title}</h4>
                                                    <p className="text-sm text-muted font-medium mt-1 sm:mt-0">{job.dates}</p>
                                                </div>
                                                <p className="text-md text-primary font-medium">{job.company}</p>
                                                <ul className="list-disc list-outside pl-5 mt-2 space-y-1 text-muted text-sm">
                                                    {job.points.map((point, j) => <li key={j}>{point}</li>)}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </MainSection>
                            </div>
                            
                            <div className="mt-10">
                                <MainSection title="Education">
                                    <div className="space-y-6">
                                        {resumeData.education.map((edu, i) => (
                                            <div key={i}>
                                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                                                    <h4 className="font-semibold text-lg text-card-foreground">{edu.degree}</h4>
                                                    <p className="text-sm text-muted font-medium mt-1 sm:mt-0">{edu.dates}</p>
                                                </div>
                                                <p className="text-md text-primary font-medium">{edu.university}</p>
                                            </div>
                                        ))}
                                    </div>
                                </MainSection>
                            </div>
                        </main>

                        {/* Sidebar (appears second on mobile) */}
                        <aside className="lg:col-span-1 space-y-8">
                            <SidebarSection title="Contact">
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-3 text-muted hover:text-primary transition-colors">
                                            <EnvelopeIcon className="w-5 h-5 text-primary/70" />
                                            <span>{resumeData.contact.email}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-3 text-muted hover:text-primary transition-colors">
                                            <PhoneIcon className="w-5 h-5 text-primary/70" />
                                            <span>{resumeData.contact.phone}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted hover:text-primary transition-colors">
                                            <LinkedInIcon className="w-5 h-5 text-primary/70" />
                                            <span>{resumeData.contact.linkedinDisplay}</span>
                                        </a>
                                    </li>
                                </ul>
                            </SidebarSection>
                            
                            <SidebarSection title="Skills">
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.map(skill => (
                                        <span key={skill} className="bg-primary/10 text-foreground font-medium text-sm px-3 py-1.5 rounded-md">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </SidebarSection>
                            
                            <SidebarSection title="Tools">
                                 <div className="flex flex-wrap gap-2">
                                    {resumeData.tools.map(tool => (
                                        <span key={tool} className="bg-accent/10 text-accent-foreground font-medium text-sm px-3 py-1.5 rounded-md">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </SidebarSection>
                        </aside>

                    </div>
                </div>
            </div>
        </div>
    );
};