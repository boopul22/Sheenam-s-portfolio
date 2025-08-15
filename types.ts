
import React from 'react';

export interface Service {
    title: string;
    price: string;
    description: string;
}

export interface HighlightService extends Service {
    discountedPrice: string;
    originalPrice: string;
    includes: string[];
}

export interface SpecializedService {
    icon: React.ReactNode;
    title: string;
    words: string;
    price: string;
}

export interface Skill {
    icon: React.ReactNode;
    label: string;
}

export interface WhyChooseMeItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface SampleLink {
    title: string;
    url: string;
}

export interface PortfolioWorkItem {
    link: string;
    type?: 'instagram';
}

export interface PortfolioWorkCategory {
    category: string;
    description?: string;
    items: PortfolioWorkItem[];
}

export interface PortfolioData {
    summary: string;
    highlights: string[];
    intro: string;
    work: PortfolioWorkCategory[];
    conclusion:string;
}