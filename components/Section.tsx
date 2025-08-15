import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};