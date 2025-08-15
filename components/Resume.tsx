import React from 'react';
import { EnvelopeIcon, PhoneIcon, LinkedInIcon } from './Icons';

const resumeData = {
    name: 'SHEENAM MIDDHA',
    title: 'Content Writer & Social Media Strategist',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D',
    contact: {
        phone: '+91 99884-41561',
        email: 'sheenammiddha.19@gmail.com',
        linkedin: 'http://www.linkedin.com/in/sheenam-middha/',
        linkedinDisplay: 'linkedin.com/in/sheenam-middha'
    },
    about: 'Creative and results-driven Content Writer and Social Media Strategist with over 4 years of experience, adept at producing high-quality, engaging content that informs and captivates audiences. Successfully improved search engine ranking by 35X through compelling SEO content and significantly increased social media followers by 25-30X, driving substantial brand awareness and audience engagement.',
    experience: [
        {
            title: 'Content Writer & Social Media Strategist',
            company: 'Bright Head IT Pvt. Ltd.',
            dates: 'July 2023 - Present',
            points: [
                'Produced compelling SEO content, resulting in a 35X improvement in search engine ranking.',
                'Managed and grew social media presence, achieving a 25-30X increase in followers.',
                'Drove significant brand awareness and audience engagement through strategic content campaigns.',
                'Contributed to content strategy development, focusing on audience retention and search engine optimization.',
            ],
        },
        {
            title: 'Content Writer',
            company: 'Whizamet Services Pvt. Ltd',
            dates: 'October 2022 – July 2023',
            points: [
                'Developed and optimized SEO-friendly content, enhancing visibility and engagement.',
                'Achieved a 25-30X increase in website visits and a 35X improvement in user engagement metrics.',
                'Collaborated cross-functionally to align content with brand guidelines.',
                'Maintained content consistency and quality through meticulous editing and proofreading.',
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
    skills: ['Content Writing', 'SEO Optimization', 'Editing & Proofreading', 'Engaging Content Creation', 'Research', 'Digital Marketing', 'Social Media Strategy', 'Brand Awareness', 'Audience Engagement', 'Content Strategy', 'Critical Thinking', 'Creativity & Storytelling'],
    tools: ['Google Analytics', 'Business Suite', 'Canva', 'Buffer', 'Hootsuite', 'Google Keyword Planner', 'Quillbot', 'Grammarly', 'Notion', 'Google Search Console', 'Ahrefs', 'WordPress', 'SEMrush'],
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="mt-10 mb-4 text-sm font-bold uppercase tracking-wider text-primary border-b border-border pb-2">
        {children}
    </h3>
);

export const Resume: React.FC = () => {
  return (
    <div className="bg-background text-foreground font-sans">
        <div className="max-w-4xl mx-auto py-16 px-6 sm:px-8">
            <div className="bg-card p-8 sm:p-12 rounded-2xl border border-border">
                {/* Header */}
                <header className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-10 border-b border-border pb-8">
                    <img 
                        src={resumeData.photoUrl} 
                        alt="Sheenam Middha" 
                        className="w-28 h-28 rounded-full object-cover border-2 border-border"
                    />
                    <div className="flex-grow">
                        <h1 className="font-display text-4xl sm:text-5xl font-bold text-card-foreground">{resumeData.name}</h1>
                        <h2 className="text-lg text-primary font-semibold mt-1">{resumeData.title}</h2>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted mt-3">
                            <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                                <EnvelopeIcon className="w-4 h-4" />
                                {resumeData.contact.email}
                            </a>
                            <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                                <PhoneIcon className="w-4 h-4" />
                                {resumeData.contact.phone}
                            </a>
                            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <LinkedInIcon className="w-4 h-4" />
                                {resumeData.contact.linkedinDisplay}
                            </a>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main>
                    <SectionTitle>Summary</SectionTitle>
                    <p className="text-muted leading-relaxed">{resumeData.about}</p>
                    
                    <SectionTitle>Work Experience</SectionTitle>
                    <div className="space-y-6">
                        {resumeData.experience.map((job, i) => (
                            <div key={i}>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                                    <h4 className="font-semibold text-lg text-card-foreground">{job.title}</h4>
                                    <p className="text-sm text-muted font-medium mt-1 sm:mt-0">{job.dates}</p>
                                </div>
                                <p className="text-md text-primary font-medium">{job.company}</p>
                                <ul className="list-disc list-outside pl-5 mt-2 space-y-1 text-muted">
                                    {job.points.map((point, j) => <li key={j}>{point}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <SectionTitle>Education</SectionTitle>
                    <div className="space-y-4">
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

                    <SectionTitle>Skills & Tools</SectionTitle>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-3">Core Skills</h4>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.map(skill => (
                                    <span key={skill} className="bg-primary/20 text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-3">Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.tools.map(tool => (
                                    <span key={tool} className="bg-accent/20 text-accent-foreground text-sm font-medium px-3 py-1 rounded-full">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
  );
};