import React from 'react';
import { useApp } from '../context/AppContext';

export const Footer = () => {
  const { setActivePath } = useApp();

  const logoSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 64" className="h-8 w-auto">
      <rect x="6" y="8" width="48" height="48" rx="14" fill="url(#gradFooter)"/>
      <defs>
        <linearGradient id="gradFooter" x1="6" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C69EF"/>
          <stop offset="100%" stopColor="#5035E0"/>
        </linearGradient>
      </defs>
      <path d="M19 39V29L30 22L41 29V39" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 25L30 18L44 25L30 32L16 25Z" fill="#FFFFFF" fillOpacity="0.95"/>
      <path d="M44 25V33" stroke="#00D2D3" strokeWidth="2.4" strokeLinecap="round"/>
      <circle cx="44" cy="34" r="1.6" fill="#00D2D3"/>
      <circle cx="30" cy="37" r="2.8" fill="#00D2D3"/>
      <path d="M25 42C26.5 40 33.5 40 35 42" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
      <text x="66" y="34" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="22" fontWeight="800" fill="#1C1F37" letterSpacing="-0.5">Campus<tspan fill="#6C5CE7">Connect</tspan></text>
      <text x="66" y="47" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="600" fill="#717595" letterSpacing="1.2">DISCOVER • SOLVE • GROW</text>
    </svg>
  );

  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_12px_rgba(0,0,0,0.03)] border-t border-outline-variant/10">
      <div className="max-w-[1200px] mx-auto px-gutter pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-lg mb-space-xl">
          
          <div className="lg:col-span-2 space-y-space-md">
            <div className="flex items-center gap-space-xs cursor-pointer" onClick={() => setActivePath('home')}>
              {logoSvg}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed">
              India's premier college ecosystem uniting verified campus talent, real-time maintenance reporting (CampusFix), student amenities, and high-impact micro-internships.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
              <span className="text-[14px]">🇮🇳</span>
              <span>Engineered for 800+ Indian Campuses</span>
            </div>
          </div>

          <div>
            <h4 className="font-headline-sm text-[16px] text-on-surface mb-space-md font-bold">Platform</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => setActivePath('opportunities')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Opportunities</button></li>
              <li><button onClick={() => setActivePath('campus-fix')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">CampusFix</button></li>
              <li><button onClick={() => setActivePath('events')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Events &amp; Fests</button></li>
              <li><button onClick={() => setActivePath('campus-services')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Campus Services</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline-sm text-[16px] text-on-surface mb-space-md font-bold">For Students</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => setActivePath('opportunities')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Find Internships</button></li>
              <li><button onClick={() => setActivePath('dashboard')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Mini Profile</button></li>
              <li><button onClick={() => setActivePath('opportunities')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Part-Time Jobs</button></li>
              <li><button onClick={() => setActivePath('opportunities')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Skill Projects</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline-sm text-[16px] text-on-surface mb-space-md font-bold">For Businesses</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => setActivePath('opportunities')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Post Internship</button></li>
              <li><button onClick={() => setActivePath('opportunities')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Find Student Talent</button></li>
              <li><button onClick={() => setActivePath('campus-services')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Student Offers</button></li>
              <li><button onClick={() => setActivePath('home')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Campus Partnerships</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline-sm text-[16px] text-on-surface mb-space-md font-bold">Institutions</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => setActivePath('dashboard')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Faculty Portal</button></li>
              <li><button onClick={() => setActivePath('campus-fix')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">CampusFix Admin</button></li>
              <li><button onClick={() => setActivePath('dashboard')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Department Notices</button></li>
              <li><button onClick={() => setActivePath('home')} className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Institutional Plans</button></li>
            </ul>
          </div>

        </div>

        <div className="pt-space-lg border-t border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
            © 2026 CampusConnect Technologies India Pvt Ltd. All rights reserved. Made for Indian Universities.
          </p>
          <div className="flex items-center gap-space-sm">
            <a aria-label="Community Feed" href="#" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">hub</span>
            </a>
            <a aria-label="Global Campus Network" href="#" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a aria-label="Contact Mail" href="#" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">alternate_email</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
