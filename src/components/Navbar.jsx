import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
  const { 
    activePath, 
    setActivePath, 
    selectedCampus, 
    setIsLocationModalOpen,
    setIsPostModalOpen,
    setIsAuthModalOpen,
    setIsSearchModalOpen,
    user
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);

  const logoSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 64" className="h-8 w-auto">
      <rect x="6" y="8" width="48" height="48" rx="14" fill="url(#grad1)"/>
      <defs>
        <linearGradient id="grad1" x1="6" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
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
      <rect x="206" y="24" width="26" height="14" rx="7" fill="#F0EDFF"/>
      <text x="219" y="34" fontFamily="sans-serif" fontSize="8.5" fontWeight="700" fill="#6C5CE7" textAnchor="middle">IN</text>
    </svg>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1200px] mx-auto px-gutter flex items-center justify-between gap-space-md">
        
        {/* Logo & Campus Selector */}
        <div className="flex items-center gap-space-md">
          <button 
            onClick={() => setActivePath('home')}
            className="flex items-center gap-space-xs text-left focus:outline-none"
          >
            {logoSvg}
          </button>

          <button 
            onClick={() => setIsLocationModalOpen(true)}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors font-label-sm text-label-sm text-on-surface"
          >
            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
            <span>{selectedCampus}</span>
            <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
          </button>
        </div>

        {/* Main Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <button 
            onClick={() => setActivePath('home')}
            className={`px-3 py-2 font-body-md-medium transition-all rounded-lg ${
              activePath === 'home' 
                ? 'bg-primary-container text-on-primary-container font-semibold' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
            }`}
          >
            Home
          </button>

          <button 
            onClick={() => setActivePath('opportunities')}
            className={`px-3 py-2 font-body-md-medium transition-all rounded-lg ${
              activePath === 'opportunities' 
                ? 'bg-primary-container text-on-primary-container font-semibold' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
            }`}
          >
            Opportunities
          </button>

          <button 
            onClick={() => setActivePath('campus-fix')}
            className={`relative px-3 py-2 rounded-lg font-body-md-medium transition-all flex items-center gap-1.5 ${
              activePath === 'campus-fix' 
                ? 'bg-primary-container text-on-primary-container font-semibold' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
            }`}
          >
            <span>CampusFix</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#E6F8F4] text-[#00B894] font-label-sm text-[10px] leading-tight font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B894] animate-pulse"></span>
              Active
            </span>
          </button>

          <button 
            onClick={() => setActivePath('campus-services')}
            className={`px-3 py-2 font-body-md-medium transition-all rounded-lg ${
              activePath === 'campus-services' 
                ? 'bg-primary-container text-on-primary-container font-semibold' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
            }`}
          >
            Campus Services
          </button>

          <button 
            onClick={() => setActivePath('events')}
            className={`px-3 py-2 font-body-md-medium transition-all rounded-lg ${
              activePath === 'events' 
                ? 'bg-primary-container text-on-primary-container font-semibold' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
            }`}
          >
            Events
          </button>

          <button 
            onClick={() => setActivePath('dashboard')}
            className={`px-3 py-2 font-body-md-medium transition-all rounded-lg ${
              activePath === 'dashboard' 
                ? 'bg-primary-container text-on-primary-container font-semibold' 
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
            }`}
          >
            Dashboard
          </button>
        </nav>

        {/* Action Controls & User Avatar */}
        <div className="flex items-center gap-space-xs sm:gap-space-sm">
          {/* Search trigger */}
          <button 
            onClick={() => setIsSearchModalOpen(true)}
            aria-label="Search campus opportunities"
            className="flex items-center justify-center w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>

          {/* Notifications */}
          <button 
            onClick={() => setActivePath('dashboard')}
            aria-label="Notifications"
            className="relative flex items-center justify-center w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-2 right-2 flex items-center justify-center w-4 h-4 rounded-full bg-error text-on-error font-label-sm text-[10px]">3</span>
          </button>

          {/* Dashboards Dropdown */}
          <div className="relative hidden sm:block">
            <button 
              onClick={() => setIsDashboardDropdownOpen(!isDashboardDropdownOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <span className="font-label-md text-label-md text-on-surface">Dashboards</span>
              <span className="material-symbols-outlined text-[18px] text-outline">expand_more</span>
            </button>

            {isDashboardDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-surface-container-lowest rounded-2xl p-2 shadow-xl border border-outline-variant/30 z-50">
                <button 
                  onClick={() => { setActivePath('dashboard'); setIsDashboardDropdownOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-xl text-body-md hover:bg-surface-container-low flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">school</span>
                  <span>Student Dashboard</span>
                </button>
                <button 
                  onClick={() => { setActivePath('campus-fix'); setIsDashboardDropdownOpen(false); }}
                  className="w-full text-left px-3 py-2 rounded-xl text-body-md hover:bg-surface-container-low flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-secondary text-[20px]">build_circle</span>
                  <span>CampusFix Admin</span>
                </button>
              </div>
            )}
          </div>

          {/* Log In */}
          <button 
            onClick={() => setIsAuthModalOpen(true)}
            className="hidden md:inline-flex items-center px-3.5 py-2 rounded-lg font-body-md-medium text-body-md-medium text-on-surface hover:bg-surface-container-low transition-colors"
          >
            Log In
          </button>

          {/* Post Opportunity CTA */}
          <button 
            onClick={() => setIsPostModalOpen(true)}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary font-body-md-medium text-body-md-medium shadow-sm transition-all"
          >
            Post Opportunity
          </button>

          {/* Profile Badge */}
          <button 
            onClick={() => setActivePath('dashboard')}
            className="relative flex items-center ml-1 focus:outline-none"
          >
            <img 
              alt="Profile" 
              className="w-9 h-9 rounded-full object-cover ring-2 ring-surface" 
              src={user.avatar} 
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00B894] ring-2 ring-surface"></span>
          </button>

          {/* Mobile Hamburger Menu */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-outline-variant/20 px-4 py-4 space-y-2 shadow-lg">
          <button 
            onClick={() => { setActivePath('home'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg font-body-md-medium text-on-surface hover:bg-surface-container-low"
          >
            Home
          </button>
          <button 
            onClick={() => { setActivePath('opportunities'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg font-body-md-medium text-on-surface hover:bg-surface-container-low"
          >
            Opportunities
          </button>
          <button 
            onClick={() => { setActivePath('campus-fix'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg font-body-md-medium text-on-surface hover:bg-surface-container-low flex items-center justify-between"
          >
            <span>CampusFix</span>
            <span className="text-[#00B894] text-xs font-bold">Active</span>
          </button>
          <button 
            onClick={() => { setActivePath('campus-services'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg font-body-md-medium text-on-surface hover:bg-surface-container-low"
          >
            Campus Services
          </button>
          <button 
            onClick={() => { setActivePath('events'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg font-body-md-medium text-on-surface hover:bg-surface-container-low"
          >
            Events & Hackathons
          </button>
          <button 
            onClick={() => { setActivePath('dashboard'); setIsMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-lg font-body-md-medium text-primary font-bold hover:bg-surface-container-low"
          >
            Student Dashboard
          </button>
        </div>
      )}
    </header>
  );
};
