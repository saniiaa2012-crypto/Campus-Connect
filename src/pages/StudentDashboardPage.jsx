import React from 'react';
import { useApp } from '../context/AppContext';

export const StudentDashboardPage = () => {
  const { user, applications, campusFixTickets, setSelectedOpportunityForApply, setIsApplyModalOpen, setActivePath } = useApp();

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sticky Sidebar Sub-Navigation */}
          <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-28 z-20">
            <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm space-y-6 border border-outline-variant/20">
              
              {/* Mini Student Summary */}
              <div className="flex items-center gap-3.5 pb-4 bg-surface-container-low/60 rounded-xl p-3">
                <div className="relative">
                  <img 
                    className="w-11 h-11 rounded-full object-cover shadow-sm" 
                    src={user.avatar} 
                    alt={user.name} 
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#00B894] ring-2 ring-white"></span>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-headline-sm text-[15px] font-bold text-on-surface truncate">{user.name}</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{user.branch}</p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1">
                <button 
                  onClick={() => setActivePath('dashboard')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-body-md-medium text-body-md-medium bg-primary-container text-on-primary-container shadow-sm font-semibold"
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                  <span>Dashboard</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></span>
                </button>

                <button 
                  onClick={() => setActivePath('opportunities')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-body-md-medium text-body-md-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">work_outline</span>
                  <span>Opportunities</span>
                  <span className="ml-auto px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-[11px] font-bold">New 8</span>
                </button>

                <button 
                  onClick={() => setActivePath('opportunities')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-body-md-medium text-body-md-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">bookmark_border</span>
                  <span>Saved</span>
                  <span className="ml-auto font-label-sm text-[12px] text-on-surface-variant font-semibold">12</span>
                </button>

                <button 
                  onClick={() => setActivePath('dashboard')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-body-md-medium text-body-md-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">send_time_extension</span>
                  <span>Applications</span>
                  <span className="ml-auto px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-[11px] font-bold">2 active</span>
                </button>

                <button 
                  onClick={() => setActivePath('campus-fix')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-body-md-medium text-body-md-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">build_circle</span>
                  <span className="flex items-center gap-1.5">
                    CampusFix
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B894]"></span>
                  </span>
                </button>

                <button 
                  onClick={() => setActivePath('events')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-body-md-medium text-body-md-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">celebration</span>
                  <span>Events</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-secondary-container"></span>
                </button>

                <button 
                  onClick={() => setActivePath('campus-services')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-body-md-medium text-body-md-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">room_service</span>
                  <span>Campus Services</span>
                </button>

                <div className="pt-3 pb-1">
                  <div className="h-[1px] bg-surface-container w-full"></div>
                </div>

                <button 
                  onClick={() => setActivePath('dashboard')}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-body-md-medium text-body-md-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">account_circle</span>
                  <span>Profile</span>
                </button>
              </nav>

              {/* Campus Pass Pill Card */}
              <div className="bg-gradient-to-br from-primary-fixed to-surface-container p-4 rounded-xl text-on-surface flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[10px] uppercase tracking-wider text-on-primary-fixed-variant font-bold">DTU Delhi Verified</span>
                  <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                </div>
                <p className="font-body-sm text-[12px] text-on-surface-variant">ID: <span className="font-mono text-on-surface font-semibold">{user.rollNumber}</span></p>
                <div className="text-[11px] text-on-surface-variant">Semester Pass Active • Delhi Campus</div>
              </div>

            </div>
          </aside>

          {/* Main Workspace Stream */}
          <main className="flex-1 min-w-0 w-full space-y-8">
            
            {/* Welcome Banner */}
            <section className="relative overflow-hidden rounded-3xl bg-surface-container-lowest p-6 sm:p-8 shadow-sm border border-outline-variant/20">
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
              <div className="absolute right-32 bottom-0 w-48 h-48 rounded-full bg-secondary-fixed/30 blur-2xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#00B894]"></span>
                    Delhi Technological University • Spring 2026 Term
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">
                    Welcome back, {user.name}! <span className="inline-block transform hover:rotate-12 transition-transform cursor-pointer">👋</span>
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                    Ready to discover something new today? You have <span className="font-semibold text-primary">2 application updates</span> and <span className="font-semibold text-primary">1 issue resolution</span>.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setActivePath('opportunities')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-on-primary font-body-md-medium text-body-md-medium shadow-sm hover:bg-surface-tint transition-all font-semibold"
                  >
                    <span className="material-symbols-outlined text-[18px]">explore</span>
                    <span>Browse Drives</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Key Stats Metrics Grid (4 cards) */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Stat 1: Applications */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-200 border border-outline-variant/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Applications</span>
                  <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-primary font-bold">
                    <span className="material-symbols-outlined text-[20px]">description</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-md text-display-md text-on-surface font-extrabold leading-none">{applications.length + 4}</span>
                    <span className="font-label-sm text-[11px] text-[#00B894] font-bold bg-[#E6F8F4] px-2 py-0.5 rounded-full">2 Shortlisted</span>
                  </div>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-primary">schedule</span>
                    1 Interview this week
                  </p>
                </div>
              </div>

              {/* Stat 2: Saved Opportunities */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-200 border border-outline-variant/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Saved Opportunities</span>
                  <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary font-bold">
                    <span className="material-symbols-outlined text-[20px]">bookmark</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-md text-display-md text-on-surface font-extrabold leading-none">12</span>
                    <span className="font-label-sm text-[11px] text-secondary font-bold bg-secondary-fixed/50 px-2 py-0.5 rounded-full">3 Closing Soon</span>
                  </div>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-outline">timelapse</span>
                    Avg. ₹14k/mo stipend
                  </p>
                </div>
              </div>

              {/* Stat 3: Upcoming Events */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-200 border border-outline-variant/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Upcoming Events</span>
                  <div className="w-9 h-9 rounded-xl bg-surface-variant flex items-center justify-center text-primary font-bold">
                    <span className="material-symbols-outlined text-[20px]">event</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-md text-display-md text-on-surface font-extrabold leading-none">3</span>
                    <span className="font-label-sm text-[11px] text-primary font-bold bg-surface-container px-2 py-0.5 rounded-full">1 Registered</span>
                  </div>
                  <p className="font-body-sm text-[12px] text-primary font-medium mt-2 flex items-center gap-1 truncate">
                    <span className="material-symbols-outlined text-[14px]">alarm</span>
                    Next: Tomorrow at 10 AM
                  </p>
                </div>
              </div>

              {/* Stat 4: Campus Issues */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-200 border border-outline-variant/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Campus Issues</span>
                  <div className="w-9 h-9 rounded-xl bg-[#E6F8F4] flex items-center justify-center text-[#00B894] font-bold">
                    <span className="material-symbols-outlined text-[20px]">handyman</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-md text-display-md text-on-surface font-extrabold leading-none">2</span>
                    <span className="font-label-sm text-[11px] text-[#00B894] font-bold bg-[#E6F8F4] px-2 py-0.5 rounded-full">1 Resolved</span>
                  </div>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-secondary">pending</span>
                    1 In Progress (F-202)
                  </p>
                </div>
              </div>

            </section>

            {/* Main Body Two-Column Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
              {/* Left 2 Cols: Applications Tracker + Recommended */}
              <div className="xl:col-span-2 space-y-8">
                
                {/* Section: Applications Progress Tracker */}
                <section className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm space-y-6 border border-outline-variant/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Your Applications</h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Real-time status updates from campus recruiters</p>
                    </div>
                    <button onClick={() => setActivePath('opportunities')} className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1 font-bold">
                      <span>View all ({applications.length + 4})</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>

                  {/* Application Card 1: Frontend Intern */}
                  <div className="bg-surface-container-low/70 rounded-2xl p-5 space-y-5 border border-outline-variant/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm text-primary font-bold text-lg">
                          <span className="material-symbols-outlined text-[26px]">terminal</span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Frontend Intern</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">BrightEdge Digital • Gurugram (Hybrid)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                          Interview Round
                        </span>
                      </div>
                    </div>

                    {/* Multi-step tracker */}
                    <div className="pt-2">
                      <div className="relative flex items-center justify-between">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-surface-container-highest w-full z-0"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary w-[75%] z-0 transition-all duration-500"></div>

                        {/* Step 1 */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">check</span>
                          </div>
                          <span className="font-label-sm text-[11px] font-bold text-on-surface mt-1.5">Applied</span>
                          <span className="text-[10px] text-on-surface-variant">Mar 18</span>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">check</span>
                          </div>
                          <span className="font-label-sm text-[11px] font-bold text-on-surface mt-1.5">Viewed</span>
                          <span className="text-[10px] text-on-surface-variant">Mar 22</span>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">check</span>
                          </div>
                          <span className="font-label-sm text-[11px] font-bold text-on-surface mt-1.5">Shortlisted</span>
                          <span className="text-[10px] text-on-surface-variant">Mar 27</span>
                        </div>

                        {/* Step 4 */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-surface-container-lowest text-primary ring-4 ring-primary-container/20 flex items-center justify-center shadow-md">
                            <span className="material-symbols-outlined text-[18px]">videocam</span>
                          </div>
                          <span className="font-label-sm text-[11px] font-bold text-primary mt-1.5">Interview</span>
                          <span className="text-[10px] text-primary font-semibold">Apr 4, 3:00 PM</span>
                        </div>

                        {/* Step 5 */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px]">flag</span>
                          </div>
                          <span className="font-label-sm text-[11px] text-on-surface-variant mt-1.5">Offer</span>
                          <span className="text-[10px] text-outline">Pending</span>
                        </div>
                      </div>
                    </div>

                    {/* Interview Banner Notice */}
                    <div className="bg-surface-container-lowest rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-outline-variant/15">
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[20px] text-primary">calendar_clock</span>
                        <span className="font-body-sm text-[13px] text-on-surface">
                          <strong>Scheduled Interview:</strong> Technical Round with Siddharth Verma (Lead Architect) on Google Meet
                        </span>
                      </div>
                      <button 
                        onClick={() => alert('Interview details synced to Google Calendar!')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-[12px] shadow-sm hover:bg-primary transition-all font-semibold"
                      >
                        <span>Add to Calendar</span>
                        <span className="material-symbols-outlined text-[14px]">event_available</span>
                      </button>
                    </div>
                  </div>

                  {/* Application Card 2: Campus Brand Ambassador */}
                  <div className="bg-surface-container-low/70 rounded-2xl p-5 space-y-4 border border-outline-variant/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm text-secondary font-bold text-lg">
                          <span className="material-symbols-outlined text-[26px]">campaign</span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Campus Brand Ambassador</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Coding Ninjas • DTU Campus Lead</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm font-semibold">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          Under Review
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Recommended For You */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Recommended For You</h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Tailored to your Computer Science &amp; UI Design interests</p>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Match Score: 94%+</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* Recommended 1 */}
                    <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 border border-outline-variant/20">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-[#E6F8F4] text-[#00B894] font-label-sm text-[11px] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00B894]"></span>
                            Verified Campus
                          </span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-[17px] text-on-surface font-bold leading-tight">UI/UX Design Intern</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Luma Studio • Gurugram / Hybrid</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-[11px]">Figma</span>
                          <span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-[11px]">User Research</span>
                        </div>
                      </div>
                      <div className="pt-5 mt-4 border-t border-outline-variant/10">
                        <div className="flex items-baseline justify-between mb-3">
                          <div>
                            <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">₹12,000</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant"> / mo</span>
                          </div>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">2 mos</span>
                        </div>
                        <button 
                          onClick={() => {
                            setSelectedOpportunityForApply({ title: 'UI/UX Design Intern', company: 'Luma Studio', stipend: 12000, location: 'Gurugram' });
                            setIsApplyModalOpen(true);
                          }}
                          className="w-full py-2 rounded-xl bg-primary text-on-primary font-body-md-medium text-body-md-medium hover:bg-surface-tint shadow-xs transition-colors flex items-center justify-center gap-1.5 font-semibold"
                        >
                          <span>Quick Apply</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>

                    {/* Recommended 2 */}
                    <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 border border-outline-variant/20">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-secondary-fixed/50 text-secondary font-label-sm text-[11px] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            Remote
                          </span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-[17px] text-on-surface font-bold leading-tight">Python Backend Contributor</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">TensorScale Labs • Pan-India</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-[11px]">FastAPI</span>
                          <span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-[11px]">PostgreSQL</span>
                        </div>
                      </div>
                      <div className="pt-5 mt-4 border-t border-outline-variant/10">
                        <div className="flex items-baseline justify-between mb-3">
                          <div>
                            <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">₹15,000</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant"> / mo</span>
                          </div>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">3 mos</span>
                        </div>
                        <button 
                          onClick={() => {
                            setSelectedOpportunityForApply({ title: 'Python Backend Contributor', company: 'TensorScale Labs', stipend: 15000, location: 'Remote' });
                            setIsApplyModalOpen(true);
                          }}
                          className="w-full py-2 rounded-xl bg-primary text-on-primary font-body-md-medium text-body-md-medium hover:bg-surface-tint shadow-xs transition-colors flex items-center justify-center gap-1.5 font-semibold"
                        >
                          <span>Quick Apply</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>

                    {/* Recommended 3 */}
                    <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 border border-outline-variant/20">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-[11px] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            DTU Campus
                          </span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-[17px] text-on-surface font-bold leading-tight">Campus Hackathon Organizer</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">DevFest North India • On Campus</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-[11px]">Leadership</span>
                          <span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-[11px]">Events</span>
                        </div>
                      </div>
                      <div className="pt-5 mt-4 border-t border-outline-variant/10">
                        <div className="flex items-baseline justify-between mb-3">
                          <div>
                            <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">₹5,000</span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant"> + Certificate</span>
                          </div>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">4 weeks</span>
                        </div>
                        <button 
                          onClick={() => {
                            setSelectedOpportunityForApply({ title: 'Campus Hackathon Organizer', company: 'DevFest North India', stipend: 5000, location: 'DTU' });
                            setIsApplyModalOpen(true);
                          }}
                          className="w-full py-2 rounded-xl bg-primary text-on-primary font-body-md-medium text-body-md-medium hover:bg-surface-tint shadow-xs transition-colors flex items-center justify-center gap-1.5 font-semibold"
                        >
                          <span>Quick Apply</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </section>

              </div>

              {/* Right Column: CampusFix Updates & Quick Widgets */}
              <div className="space-y-6">
                
                {/* CampusFix Widget */}
                <section className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm space-y-4 border border-outline-variant/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#E6F8F4] flex items-center justify-center text-[#00B894] font-bold">
                        <span className="material-symbols-outlined text-[18px]">build_circle</span>
                      </div>
                      <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">CampusFix</h2>
                        <p className="font-body-sm text-[11px] text-on-surface-variant">Your Active Tickets</p>
                      </div>
                    </div>
                    <button onClick={() => setActivePath('campus-fix')} className="p-1 rounded-lg text-primary hover:bg-surface-container-low transition-colors">
                      <span className="material-symbols-outlined text-[20px]">add_circle</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-surface-container-low/70 flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-body-md-medium text-body-md-medium text-on-surface font-semibold leading-tight">Hostel Wi-Fi Router Replacement</h4>
                        <span className="px-2 py-0.5 rounded-full bg-[#E6F8F4] text-[#00B894] font-label-sm text-[10px] font-bold flex-shrink-0">
                          Resolved
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px] text-outline">location_on</span>
                          Aryabhatta Hostel • 3rd Floor
                        </span>
                        <span className="text-[#00B894] font-medium">Yesterday</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-surface-container-low/70 flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-body-md-medium text-body-md-medium text-on-surface font-semibold leading-tight">Classroom F-202 Projector</h4>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-fixed/60 text-secondary font-label-sm text-[10px] font-bold flex-shrink-0">
                          In Progress
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                        <div className="bg-secondary h-full rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setActivePath('campus-fix')}
                    className="w-full py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-body-sm text-[12px] font-semibold transition-colors flex items-center justify-center gap-1 text-center"
                  >
                    <span>Report New Campus Maintenance</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                  </button>
                </section>

                {/* Profile Completion Bar */}
                <section className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm space-y-4 border border-outline-variant/20">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-on-surface font-bold">Profile Strength</span>
                    <span className="font-headline-sm text-headline-sm text-primary font-extrabold">85%</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full transition-all duration-700 w-[85%]"></div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-primary flex-shrink-0 mt-0.5">tips_and_updates</span>
                    <div className="min-w-0">
                      <p className="font-body-sm text-[12px] text-on-surface font-medium">Add GitHub link to reach 100%</p>
                      <p className="text-[11px] text-on-surface-variant">Profiles with portfolio links receive 3.4x more interview invitations.</p>
                    </div>
                  </div>
                </section>

                {/* Upcoming Events */}
                <section className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm space-y-4 border border-outline-variant/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Upcoming Events</h2>
                      <p className="font-body-sm text-[11px] text-on-surface-variant">Campuses &amp; Societies</p>
                    </div>
                    <button onClick={() => setActivePath('events')} className="text-primary hover:underline font-label-sm text-[12px] font-bold">View Calendar</button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-3.5 p-3 rounded-2xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex flex-col items-center justify-center flex-shrink-0 shadow-xs font-bold">
                        <span className="font-label-sm text-[10px] uppercase tracking-tight">SAT</span>
                        <span className="font-headline-sm text-[15px] font-extrabold leading-none">05</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-body-md-medium text-body-md-medium text-on-surface font-semibold truncate">National Web3 Hackathon</h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">Convocation Hall • 10:00 AM</p>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-[#E6F8F4] text-[#00B894] font-label-sm text-[10px] font-semibold">Registered</span>
                      </div>
                    </div>
                  </div>
                </section>

              </div>

            </div>

            {/* Campus Pulse Mosaic Banner */}
            <section className="relative rounded-3xl overflow-hidden bg-surface-container-lowest p-6 shadow-sm border border-outline-variant/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold inline-block">
                    Campus Pulse
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">
                    Connect with 8,400+ peers across Delhi-NCR campuses.
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    From hostel amenities exchange to hackathon team formation, CampusConnect gives Indian students an unfair advantage.
                  </p>
                </div>
                <div className="w-full md:w-80 h-44 rounded-2xl overflow-hidden relative shadow-md flex-shrink-0">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Campus steps" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNiugyG6JL93pjyHybI8yNCVY14-c5rOWZdwZZnoFN_xxRetqTLKrqsj0qUFlAhOZ_Ga04QUu9Khtk1s5QTnnmUmhGYmVlnBtm59AO8rwoN_R-hoqkAUk5-Z1l0f0zffN0e53KQl-dYGpajr-hBW4jHtIh5t2sX6h78B3F5xbbzzNZ8w2HyezXeG1dHuvJ5CCd4NsRj2hE9RMMiCZ-M3vSBRRkfwzM2D1NFz2n37Xb6WUEiHqOqzH9ZA" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5">
                    <span className="font-label-sm text-[11px] text-white font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                      DTU Campus Quadrangle
                    </span>
                  </div>
                </div>
              </div>
            </section>

          </main>

        </div>
      </div>
    </div>
  );
};
