import React from 'react';
import { useApp } from '../context/AppContext';

export const HomePage = () => {
  const { setActivePath, setIsAuthModalOpen, setIsPostModalOpen, setSearchQuery } = useApp();

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="flex flex-col w-full">
        {/* Top Ambient Glow */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-primary-fixed/40 via-surface-container-high/60 to-secondary-fixed/30 blur-3xl pointer-events-none rounded-full"></div>
          
          {/* 1. HERO SECTION */}
          <section className="relative max-w-[1200px] mx-auto px-gutter pt-space-lg pb-space-xl">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-space-md">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary font-label-md text-label-md shadow-sm transition-transform hover:scale-105 duration-200">
                <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span>Designed for 45,000+ Colleges Across India</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display-lg text-display-lg md:text-[54px] text-on-surface tracking-tight font-extrabold leading-tight">
                Your Campus. <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">Your Opportunities.</span> Your Community.
              </h1>

              {/* Supporting Text */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Discover internships, campus opportunities, useful services, and practical solutions — all in one centralized student operating system.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
                <button 
                  onClick={() => setActivePath('opportunities')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-body-lg-medium text-body-lg-medium shadow-md hover:bg-primary-container transition-all group"
                >
                  <span>Explore Opportunities</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-lg-medium text-body-lg-medium shadow-sm hover:bg-surface-container-low transition-all"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary">group_add</span>
                  <span>Join CampusConnect</span>
                </button>
              </div>

              {/* Interactive Quick Search Pill */}
              <div className="w-full max-w-2xl pt-space-sm">
                <div className="relative flex items-center w-full bg-surface-container-lowest rounded-full shadow-md p-1.5 pl-4 transition-all focus-within:shadow-lg focus-within:ring-2 focus-within:ring-primary/20">
                  <span className="material-symbols-outlined text-outline text-[22px] mr-2">search</span>
                  <input 
                    type="text"
                    placeholder="Search internships, projects, campus services (e.g. Panipat, Delhi, Pune)..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setActivePath('opportunities');
                    }}
                    className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none"
                  />
                  <button 
                    onClick={() => setActivePath('opportunities')}
                    className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary transition-colors"
                  >
                    Search
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-2.5 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="text-outline">Trending:</span>
                  <button onClick={() => { setSearchQuery('Frontend'); setActivePath('opportunities'); }} className="hover:text-primary transition-colors">#FrontendIntern</button>
                  <span>•</span>
                  <button onClick={() => { setSearchQuery('DTU'); setActivePath('opportunities'); }} className="hover:text-primary transition-colors">#DTUSprint2026</button>
                  <span>•</span>
                  <button onClick={() => { setSearchQuery('Wi-Fi'); setActivePath('campus-fix'); }} className="hover:text-primary transition-colors">#HostelWi-FiFix</button>
                  <span>•</span>
                  <button onClick={() => { setSearchQuery('Laptop'); setActivePath('campus-services'); }} className="hover:text-primary transition-colors">#LaptopRepairsNCR</button>
                </div>
              </div>

            </div>

            {/* Hero Visual Mosaic with Floating SaaS Pill Cards */}
            <div className="relative mt-space-xl max-w-5xl mx-auto">
              
              {/* Floating Pill Card 1: Internship */}
              <div className="hidden lg:flex items-center gap-3 absolute -left-10 top-12 z-20 px-4 py-3 rounded-2xl bg-surface-container-lowest text-on-surface shadow-xl animate-bounce [animation-duration:5s]">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">code</span>
                </div>
                <div className="text-left">
                  <div className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary">
                    <span className="material-symbols-outlined text-[14px]">auto_awesome</span> New Internship
                  </div>
                  <p className="font-body-md-medium text-body-md-medium text-on-surface leading-snug">React Dev • Gurugram Tech</p>
                  <p className="font-label-md text-label-md text-tertiary font-bold">₹18,000 <span className="font-body-sm text-outline font-normal">/ mo</span></p>
                </div>
              </div>

              {/* Floating Pill Card 2: Campus Issue */}
              <div className="hidden md:flex items-center gap-3 absolute -right-6 top-6 z-20 px-4 py-3 rounded-2xl bg-surface-container-lowest text-on-surface shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-[#E6F8F4] flex items-center justify-center text-[#00B894]">
                  <span className="material-symbols-outlined text-[22px]">check_circle</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-[#00B894]">
                    <span className="w-2 h-2 rounded-full bg-[#00B894]"></span> CampusFix Resolved
                  </div>
                  <p className="font-body-md-medium text-body-md-medium text-on-surface">Lab 3 Wi-Fi restored</p>
                  <p className="font-label-sm text-label-sm text-outline">Turnaround in 4 hrs</p>
                </div>
              </div>

              {/* Floating Pill Card 3: Part-Time Lead */}
              <div className="hidden lg:flex items-center gap-3 absolute -left-8 bottom-16 z-20 px-4 py-3 rounded-2xl bg-surface-container-lowest text-on-surface shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[22px]">campaign</span>
                </div>
                <div className="text-left">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">Part-Time Role</span>
                  <p className="font-body-md-medium text-body-md-medium text-on-surface">Campus Brand Lead</p>
                  <p className="font-label-md text-label-md text-on-surface font-bold">₹8,000 <span className="font-body-sm text-outline font-normal">/ mo</span></p>
                </div>
              </div>

              {/* Floating Pill Card 4: Hackathon */}
              <div className="hidden md:flex items-center gap-3 absolute -right-8 bottom-12 z-20 px-4 py-3 rounded-2xl bg-surface-container-lowest text-on-surface shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">celebration</span>
                </div>
                <div className="text-left">
                  <span className="font-label-sm text-label-sm text-primary font-semibold">Student Hackathon</span>
                  <p className="font-body-md-medium text-body-md-medium text-on-surface">National BuildSprint '26</p>
                  <p className="font-label-sm text-label-sm text-outline">₹2.5 Lakh Prize Pool</p>
                </div>
              </div>

              {/* Floating Pill Card 5: Business Hiring */}
              <div className="hidden sm:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 -bottom-5 z-20 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00B894] animate-ping"></span>
                <span className="font-body-md-medium text-body-md-medium text-on-surface">42 Local Startups Hiring Students Live Now</span>
                <span className="material-symbols-outlined text-primary text-[18px]">open_in_new</span>
              </div>

              {/* Central Visual Frame */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-surface-container-low">
                <img 
                  alt="Students collaborating outside Delhi Technological University campus building with laptops and tablets" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-cKW_Q2c1H7Ox1VAiOOBpxZZbrt6qLyhTs1zcwR7jQ7FzhHuirn6wgG1pxz3hLVsutf_xoJ4lMfFa7hVnavIXOPYHNnPuA8ZiqdjMo8fTarOkilHxyNec7v694KOOnMPR4hbqdla_qvWRE6x8QbWI5Bok98JFHNdqZfi6z7IB_yebDJNUzfmcwEGw2NnzeNxDv9TgHox6w7gI4e1D_kKWhb8ASHlsEz-uZCbInvb1ltMN3OB_gxRCRg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-left sm:hidden">
                  <p className="font-headline-sm text-headline-sm text-on-primary">Delhi Technological University Hub</p>
                  <p className="font-body-sm text-body-sm text-surface-container-high">3,400+ Active students &amp; societies connected</p>
                </div>
              </div>

            </div>

            {/* University Trust Banner */}
            <div className="mt-space-xl pt-space-lg text-center">
              <p className="font-label-md text-label-md uppercase tracking-wider text-outline mb-space-md font-bold">
                Empowering vibrant student hubs across India
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-on-surface-variant font-headline-sm text-[16px] sm:text-[18px] opacity-80">
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">account_balance</span>
                  <span className="font-semibold">IIT Delhi</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">school</span>
                  <span className="font-semibold">DU North Campus</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">domain</span>
                  <span className="font-semibold">DTU Delhi</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">location_city</span>
                  <span className="font-semibold">Mumbai University</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">assured_workload</span>
                  <span className="font-semibold">Anna University</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">hub</span>
                  <span className="font-semibold">SPPU Pune</span>
                </div>
              </div>
            </div>

          </section>
        </div>

        {/* 4. LIVE STATS COUNTER BAR (Bento Ribbon) */}
        <section className="w-full bg-surface-container-lowest shadow-sm py-space-lg my-space-md border-y border-outline-variant/15">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md text-center">
              <div className="p-space-sm">
                <p className="font-display-md text-display-md text-primary font-extrabold">120+</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Partner Colleges</p>
              </div>
              <div className="p-space-sm">
                <p className="font-display-md text-display-md text-on-surface font-extrabold">18,400+</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Active Students</p>
              </div>
              <div className="p-space-sm">
                <p className="font-display-md text-display-md text-tertiary font-extrabold">₹1.4 Cr+</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Stipends Earned</p>
              </div>
              <div className="p-space-sm">
                <p className="font-display-md text-display-md text-[#00B894] font-extrabold">94%</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Campus Issues Resolved</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEM SECTION */}
        <section className="max-w-[1200px] mx-auto px-gutter py-space-xl">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-md text-label-md uppercase tracking-wider text-error font-bold">The Broken Campus Reality</span>
            <h2 class="font-display-md text-display-md text-on-surface mt-2 font-bold tracking-tight">
              Campus life shouldn't be this complicated.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
              Bridging the disconnect between college students, local businesses, and university administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Problem Card 1 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-error-container/60 text-error flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">search_off</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline">01 / DISCOVERY FRICTION</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">Finding Opportunities</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  Students often don't know where to find relevant internships, projects, and part-time opportunities in their city. They rely on spammy WhatsApp groups and scattered job boards.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center gap-2 text-error font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px]">priority_high</span>
                <span>72% of Tier 2 &amp; 3 students miss early stipend roles</span>
              </div>
            </div>

            {/* Problem Card 2 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-error-container/60 text-error flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">build_circle</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline">02 / UNHEARD COMPLAINTS</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">Campus Problems</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  Students struggle to report, escalate, and transparently track everyday hostel &amp; campus infrastructure issues. Complaints vanish into paper registers with zero follow-up.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center gap-2 text-error font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px]">hourglass_disabled</span>
                <span>Average 14-day turnaround on hostel maintenance</span>
              </div>
            </div>

            {/* Problem Card 3 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-error-container/60 text-error flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">storefront</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline">03 / LOCAL FRAGMENTATION</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">Finding Trusted Services</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  Students waste hours hunting for nearby high-speed printing, hygienic tiffin delivery, PG rentals, and emergency laptop repairs without genuine student rates.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center gap-2 text-error font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px]">money_off</span>
                <span>Students overpay up to 40% on daily essentials</span>
              </div>
            </div>

            {/* Problem Card 4 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-error-container/60 text-error flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">handshake</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline">04 / BUSINESS BARRIER</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">Connecting With Businesses</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  Local businesses, cafes, and growing tech agencies have genuine opportunities &amp; discounts but lack an easy, verified channel to reach verified enrolled college students.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center gap-2 text-error font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px]">visibility_off</span>
                <span>Zero verified campus engagement channels</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SOLUTION SECTION (Bento Grid of 8 Features) */}
        <section className="w-full bg-surface-container-low py-space-xl">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="text-center max-w-3xl mx-auto mb-space-xl">
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">The Campus Operating System</span>
              <h2 className="font-display-md text-display-md text-on-surface mt-2 font-bold tracking-tight">
                One platform. Multiple campus needs.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
                CampusConnect transforms fragmented college life into an integrated, transparent ecosystem for students, faculty, and local creators.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* Feature 1 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">work</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Opportunity Discovery</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Verified campus internships, research fellowships, and freelance projects with upfront Indian Rupee (₹) stipends.
                  </p>
                </div>
                <button 
                  onClick={() => setActivePath('opportunities')}
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-space-lg group-hover:gap-2.5 transition-all text-left"
                >
                  <span>Explore Opportunities</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

              {/* Feature 2 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E6F8F4] flex items-center justify-center text-[#00B894] mb-space-md group-hover:bg-[#00B894] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">report_problem</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Campus Problem Reporting</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    CampusFix real-time tracking for hostel water, campus Wi-Fi, lab equipment, and sports complex maintenance tickets.
                  </p>
                </div>
                <button 
                  onClick={() => setActivePath('campus-fix')}
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-space-lg group-hover:gap-2.5 transition-all text-left"
                >
                  <span>Explore CampusFix</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

              {/* Feature 3 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary mb-space-md group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">local_convenience_store</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Student Services</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Trusted 20-minute thesis printing, laptop and phone repair pickup, validated PG listings, and verified mess plans.
                  </p>
                </div>
                <button 
                  onClick={() => setActivePath('campus-services')}
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-space-lg group-hover:gap-2.5 transition-all text-left"
                >
                  <span>Explore Services</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

              {/* Feature 4 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">festival</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Events &amp; Hackathons</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Cross-college hackathon directories, cultural fest passes, speaker workshops, and intra-college society tournaments.
                  </p>
                </div>
                <button 
                  onClick={() => setActivePath('events')}
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-space-lg group-hover:gap-2.5 transition-all text-left"
                >
                  <span>Explore Events</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

              {/* Feature 5 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">corporate_fare</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Business Connections</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Local startups, marketing agencies, and SMBs actively hiring student brand evangelists, designers, and testers.
                  </p>
                </div>
                <button 
                  onClick={() => setIsPostModalOpen(true)}
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-space-lg group-hover:gap-2.5 transition-all text-left"
                >
                  <span>Explore Business</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

              {/* Feature 6 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">badge</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Student Profiles</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Skill showcase, peer recommendations, GitHub sync, and 1-click verified campus resume sharing for employers.
                  </p>
                </div>
                <button 
                  onClick={() => setActivePath('dashboard')}
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-space-lg group-hover:gap-2.5 transition-all text-left"
                >
                  <span>Explore Profiles</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

              {/* Feature 7 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">campaign</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Faculty Updates</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Verified departmental announcements, exam timetable notifications, and research collaboration callouts.
                  </p>
                </div>
                <button 
                  onClick={() => setActivePath('dashboard')}
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-space-lg group-hover:gap-2.5 transition-all text-left"
                >
                  <span>Explore Faculty</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

              {/* Feature 8 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-space-md group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                    <span className="material-symbols-outlined text-[26px]">percent</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Local Offers</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Flash deals, canteen combo discounts, stationery coupons, and exclusive student-ID pricing near your campus gate.
                  </p>
                </div>
                <button 
                  onClick={() => setActivePath('campus-services')}
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary mt-space-lg group-hover:gap-2.5 transition-all text-left"
                >
                  <span>Explore Offers</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION BANNER */}
        <section className="max-w-[1200px] mx-auto px-gutter py-space-xl">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary via-primary-container to-secondary p-8 sm:p-12 md:p-16 text-on-primary overflow-hidden shadow-xl">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
            <div className="absolute left-10 -top-20 w-64 h-64 rounded-full bg-tertiary-fixed/20 blur-xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl text-left space-y-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur font-label-sm text-label-sm text-surface-container-lowest">
                <span className="w-2 h-2 rounded-full bg-[#5af9f3]"></span>
                <span>Join the Pan-India Campus Movement</span>
              </div>
              
              <h2 className="font-display-md text-display-md sm:text-[40px] font-extrabold leading-tight">
                Ready to transform your campus journey?
              </h2>
              
              <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
                Join students from Delhi, Mumbai, Bengaluru, Panipat, Chandigarh, and beyond. One student ID unlocks endless internships, fast-tracked services, and campus problem resolution.
              </p>
              
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-lowest text-primary font-body-lg-medium text-body-lg-medium shadow-md hover:bg-surface-container-low transition-all"
                >
                  <span>Get Started for Free</span>
                  <span className="material-symbols-outlined text-[18px]">east</span>
                </button>

                <button 
                  onClick={() => setIsPostModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 backdrop-blur text-surface-container-lowest font-body-lg-medium text-body-lg-medium hover:bg-white/25 transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  <span>Post an Opportunity</span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
