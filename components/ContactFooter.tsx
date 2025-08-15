import React from 'react';
import { EnvelopeIcon, PhoneIcon } from './Icons';

export const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
                <h3 className="font-display text-3xl text-card-foreground">Let's Create Together</h3>
                <p className="mt-2 text-muted">Reach out to discuss your content needs or to start a trial project.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-end">
                <a href="mailto:sheenammiddha.19@gmail.com" className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    <EnvelopeIcon />
                    <span>Email Me</span>
                </a>
                <a href="tel:9988441561" className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    <PhoneIcon />
                    <span>Call Me</span>
                </a>
            </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-muted text-sm">
            <p>&copy; {new Date().getFullYear()} Sheenam Middha. All Rights Reserved.</p>
            <p className="mt-1">Built with creativity and code.</p>
        </div>
      </div>
    </footer>
  );
};