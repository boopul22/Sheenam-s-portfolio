import React from 'react';
import type { Service, HighlightService } from '../types';
import { CheckCircleIcon, SparklesIcon } from './Icons';

export const ServiceCard: React.FC<Service> = ({ title, price, description }) => (
  <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <h3 className="font-display text-2xl text-card-foreground">{title}</h3>
    <p className="mt-4 text-muted flex-grow">{description}</p>
    <div className="mt-6">
      <span className="text-4xl font-bold text-primary">{price}</span>
    </div>
  </div>
);

export const HighlightCard: React.FC<HighlightService> = ({ title, price, description, discountedPrice, originalPrice, includes }) => (
  <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 transform hover:scale-105 transition-transform duration-300">
    <div className="text-5xl text-white/70">
        <SparklesIcon />
    </div>
    <div className="flex-grow text-center md:text-left">
      <h3 className="font-display text-3xl">{title}</h3>
      <p className="text-white/90 mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
        {includes.map(item => (
            <span key={item} className="flex items-center gap-2 bg-white/30 text-white text-sm font-medium px-3 py-1 rounded-full">
                <CheckCircleIcon className="w-4 h-4" />
                {item}
            </span>
        ))}
      </div>
    </div>
    <div className="text-center flex-shrink-0">
      <p className="text-sm text-white/70 line-through">{originalPrice}</p>
      <p className="text-2xl font-bold text-white">{discountedPrice}</p>
      <p className="font-bold text-5xl text-highlight mt-2">{price}</p>
    </div>
  </div>
);