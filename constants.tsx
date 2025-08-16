
import React from 'react';
import type { Service, HighlightService, SpecializedService, Skill, WhyChooseMeItem, SampleLink, PortfolioData } from './types';
import {
  PencilIcon,
  MegaphoneIcon,
  PhotoIcon,
  SparklesIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  BookOpenIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from './components/Icons';

export const blogServices: Service[] = [
  {
    title: 'Per-Word Writing',
    price: '₹1.5',
    description: 'per word for high-quality, engaging blog and article content. Example: ₹1,500 for a 1,000-word blog.',
  },
  {
    title: 'SEO Optimization Add-On',
    price: '₹400',
    description: 'per blog. Includes keyword integration, meta title & description, headings, and internal linking.',
  },
  {
    title: 'Stock Image Sourcing',
    price: '₹100',
    description: 'per blog. Licensed, royalty-free images, including sourcing and resizing for the web.',
  },
];

export const specialOffer: HighlightService = {
  title: 'All-in-One Content Package',
  price: '₹1,800',
  description: 'Total for a 1,000-word SEO-optimized blog with a stock image.',
  discountedPrice: '₹1.3 per word',
  originalPrice: '₹1.5 per word',
  includes: ['Blog Writing', 'SEO Optimization', 'Stock Image'],
};

export const specializedWritingServices: SpecializedService[] = [
  {
    icon: <DocumentTextIcon />,
    title: 'Statement of Purpose (SOP)',
    words: '800-1200 words',
    price: '₹1,500–₹1,800',
  },
  {
    icon: <PencilSquareIcon />,
    title: 'Visa Cover Letter',
    words: '300-500 words',
    price: '₹800–₹1,000',
  },
  {
    icon: <BookOpenIcon />,
    title: 'Letter of Explanation (LOE)',
    words: 'Variable',
    price: '₹1,000–₹1,200',
  },
  {
    icon: <SparklesIcon />,
    title: 'Scholarship Letter',
    words: 'Variable',
    price: '₹1,200–₹1,500',
  },
  {
    icon: <PencilIcon />,
    title: 'Editing & Proofreading',
    words: 'Per document',
    price: '₹500–₹800',
  },
   {
    icon: <ChatBubbleBottomCenterTextIcon />,
    title: 'Complex SOP',
    words: 'Research-heavy',
    price: '₹2,000–₹2,500',
  },
];

export const sampleLinks: SampleLink[] = [
    {
        title: "SEO Sample: Industry Blog",
        url: "https://docs.google.com/document/d/19IPm4zoPAOxCUU2H4WUFDDOUMhitubXBU2F1RqkiUYI/edit?usp=drive_link"
    },
    {
        title: "SEO Sample: Service-Based Content",
        url: "https://docs.google.com/document/d/1IsBs7W6_zMsH0Q5xg885hNsaohsfoVdLGIxH6YM5AIs/edit?usp=sharing"
    }
];

export const skills: Skill[] = [
  { icon: <MagnifyingGlassIcon />, label: 'SEO Content (Ahrefs/Semrush)' },
  { icon: <MegaphoneIcon />, label: 'Social Media Strategy' },
  { icon: <PencilSquareIcon />, label: 'Copywriting (Email & Web)' },
  { icon: <BookOpenIcon />, label: 'Short-Form Video Scripts' },
  { icon: <GlobeAltIcon />, label: 'Editorial Calendar Mgmt.' },
  { icon: <ChatBubbleBottomCenterTextIcon />, label: 'Analytics (GA4)' },
];

export const whyChooseMe: WhyChooseMeItem[] = [
    {
        icon: <ClockIcon />,
        title: "4+ Years Experience",
        description: "Professional background in delivering high-impact content."
    },
    {
        icon: <UserGroupIcon />,
        title: "SEO & User Focused",
        description: "Content that ranks well and resonates with your audience."
    },
    {
        icon: <ShieldCheckIcon />,
        title: "Quality & Originality",
        description: "Plagiarism-free, high-quality content delivered on schedule."
    },
    {
        icon: <RocketLaunchIcon />,
        title: "High Capacity",
        description: "Capable of delivering 3-4 high-quality blogs per week."
    }
];

export const portfolioData: PortfolioData = {
    summary: 'As a Content Writer and Social Media Manager with 4+ years of experience, I specialize in creating data-driven content that builds audiences and drives revenue. My work is focused on turning brand stories into measurable marketing success.',
    highlights: [
        'Grew organic blog traffic to 120,000 monthly visits via SEO.',
        'Increased Instagram followers by +220% in 6 months.',
        'Generated over 3 million organic views on Reels and short-form video.',
        'Improved email nurture click-to-open rates from 2.8% to 6.4%.',
        'Built and managed high-performing content engines for B2B/B2C brands.',
    ],
    intro: 'This portfolio highlights my expertise in creating high-performance content across various formats. Each sample demonstrates a strategic approach to engaging audiences and achieving specific business goals.',
    work: [
        {
            category: 'SEO Blog Writing',
            description: 'Long-form articles designed to rank on Google and provide massive value to the reader.',
            items: [
                { link: 'https://docs.google.com/document/d/16xlo42tPDXb_3QcxBMPl4qNjZ9sASPOP24Z2jRSWBBM/edit?usp=sharing' }
            ]
        },
        {
            category: 'Social Media Pages',
            description: 'Engaging carousels, reels, and posts for Instagram, LinkedIn, and Twitter.',
            items: [
                { link: 'https://www.instagram.com/p/CsIe7nCPdhd/?igsh=Mmw2NjlydmVoZWo2', type: 'instagram' },
                { link: 'https://www.instagram.com/p/CsaSmMaPZsm/?igsh=dnI3dnIyOXh1YW1l', type: 'instagram' },
            ]
        },
        {
            category: 'Website Content',
            description: 'Examples of website content and copy.',
            items: [
                { link: 'https://docs.google.com/document/d/1ojF97fJNPWl9C2MBJbow9Qd4hxd3gGfvuocd7OaJuYU/edit?usp=sharing' },
                { link: 'https://docs.google.com/document/d/1nMKsN9zzdgRzYVk6Xu0GVKQf-95UtmppZGty8gqWpL0/edit?usp=sharing' }
            ]
        },
        {
            category: 'Website Blog',
            description: 'Sample blog posts written for client websites.',
            items: [
                { link: 'https://docs.google.com/document/d/1juvFTShjVpmmq_4G4IQM8kWrDvA-J0OnOQ0syZkyu7c/edit?tab=t.0' }
            ]
        },
        {
            category: 'Other Niches',
            description: 'Content samples from various other industries and niches.',
            items: [
                { link: 'https://drive.google.com/drive/folders/1VJB8qdksR_N2RxsJZkOka4E7UTwFvVPq' }
            ]
        },
        {
            category: 'Emails',
            description: 'Examples of email marketing copy.',
            items: [
                { link: 'https://docs.google.com/document/d/1U8sjZAJfD9wUMa_aDuwqprBkZ55HNcDYfxvUk1-72SI/edit?usp=sharing' }
            ]
        }
    ],
    conclusion: 'My goal is simple: create content that works. If you\'re looking for a partner who can deliver strategic, high-quality content that drives growth, let\'s talk.'
};
