import React from 'react';
import { RocketLaunchIcon } from './Icons';

export const HireMe: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="flex-shrink-0 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="flex justify-center items-center h-20 w-20 mx-auto bg-primary/10 text-primary rounded-full">
                        <RocketLaunchIcon className="w-10 h-10" />
                    </div>
                </div>
                <div className="flex-grow">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-card-foreground">
                        Ready to Build Your Content Engine?
                    </h3>
                    <p className="mt-3 text-muted max-w-2xl mx-auto md:mx-0">
                        I help brands grow with strategic SEO articles, high-engagement social media, and conversion-focused email copy. Let's discuss how my content systems can drive results for you.
                    </p>
                </div>
                <div className="flex-shrink-0 mt-4 md:mt-0 w-full md:w-auto text-center">
                    <a
                        href="mailto:sheenammiddha.19@gmail.com?subject=Inquiry%3A%20Free%207-Day%20Content%20Plan"
                        className="inline-block w-full md:w-auto bg-primary text-primary-foreground font-bold py-4 px-8 rounded-lg transition-colors duration-300 animate-pulse-glow"
                    >
                        Get a Free 7-Day Content Plan
                    </a>
                    <p className="text-xs text-muted mt-2 font-semibold uppercase tracking-wider">
                        Opening 2 new client slots this month
                    </p>
                </div>
            </div>
        </div>
    );
};