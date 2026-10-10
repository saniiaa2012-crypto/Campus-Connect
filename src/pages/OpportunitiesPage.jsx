import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const OpportunitiesPage = () => {
  const { 
    opportunities, 
    bookmarkedIds, 
    toggleBookmark,
    setSelectedOpportunityDetail,
    setIsDetailModalOpen,
    setSelectedOpportunityForApply,
    setIsApplyModalOpen,
    setIsPostModalOpen,
    searchQuery,
    setSearchQuery
  } = useApp();

  const [activeTab, setActiveTab] = useState('All Roles');
  const [selectedLocation, setSelectedLocation] = useState('All India');
  const [selectedMode, setSelectedMode] = useState('Any Mode');
  const [selectedStipend, setSelectedStipend] = useState('Paid Only');
  const [selectedSkill, setSelectedSkill] = useState('All Skills');
  const [selectedDuration, setSelectedDuration] = useState('Any Duration');
  const [viewMode, setViewMode] = useState('grid'); // grid | compact
  const [sortBy, setSortBy] = useState('Most Recent');

  // Filtering logic
  const filteredOpportunities = opportunities.filter(opp => {
    // Search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchesSearch = opp.title.toLowerCase().includes(q) ||
        opp.company.toLowerCase().includes(q) ||
        opp.location.toLowerCase().includes(q) ||
        (opp.tags && opp.tags.some(t => t.toLowerCase().includes(q)));
      if (!matchesSearch) return false;
    }

    // Role Tab
    if (activeTab !== 'All Roles' && activeTab !== 'Featured Fast-Track') {
      if (opp.type !== activeTab) return false;
    }
    if (activeTab === 'Featured Fast-Track' && !opp.fastHiring) return false;

    // Location
    if (selectedLocation !== 'All India') {
      if (!opp.location.toLowerCase().includes(selectedLocation.toLowerCase())) return false;
    }

    // Mode
    if (selectedMode !== 'Any Mode') {
      if (!opp.mode.toLowerCase().includes(selectedMode.toLowerCase())) return false;
    }

    // Stipend
    if (selectedStipend === '₹10,000+ / mo' && opp.stipend < 10000) return false;
    if (selectedStipend === '₹15,000+ / mo' && opp.stipend < 15000) return false;

    // Skill
    if (selectedSkill !== 'All Skills') {
      if (!opp.tags || !opp.tags.some(t => t.toLowerCase().includes(selectedSkill.toLowerCase()))) return false;
    }

    return true;
  });

  const resetFilters = () => {
    setSearchQuery('');
    setActiveTab('All Roles');
    setSelectedLocation('All India');
    setSelectedMode('Any Mode');
    setSelectedStipend('Paid Only');
    setSelectedSkill('All Skills');
    setSelectedDuration('Any Duration');
  };

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="flex flex-col w-full">
        {/* Ambient Glow */}
        <div className="relative w-full overflow-hidden bg-surface border-b border-outline-variant/15">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[980px] h-96 bg-gradient-to-b from-primary-fixed via-surface-container to-transparent rounded-full blur-3xl pointer-events-none opacity-40"></div>
          
          <div className="relative max-w-[1200px] mx-auto px-gutter pt-8 pb-10 sm:pt-12 sm:pb-14">
            
            {/* Breadcrumb & Status Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  <span>CampusConnect</span>
                </span>
                <span className="text-outline-variant">/</span>
                <span className="text-primary font-bold">Opportunities Marketplace</span>
              </div>

              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                </span>
                <span className="font-label-sm text-label-sm text-on-surface tracking-tight">
                  <strong className="text-primary font-semibold">2,480</strong> Active Listings Today • <span className="text-tertiary font-semibold">100% Verified Employers</span>
                </span>
              </div>
            </div>

            {/* Header Hero Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">bolt</span>
                  <span>Curated for Indian Engineering, Management &amp; Design Campuses</span>
                </div>
                <h1 className="font-display-lg text-display-lg-mobile sm:text-display-lg text-on-surface tracking-tight font-extrabold">
                  Find your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">opportunity.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Verified internships, part-time roles, skill projects, and campus jobs with transparent stipends across India. Zero ghost applications, zero unverified portals.
                </p>
              </div>

              {/* Metric Callout Card */}
              <div className="lg:col-span-4 bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between gap-4 border border-outline-variant/20">
                <div className="space-y-1">
                  <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Average Monthly Stipend</div>
                  <div className="font-headline-lg text-headline-lg text-on-surface font-extrabold flex items-baseline gap-1">
                    <span>₹14,250</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ mo</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[15px]">trending_up</span>
                    <span>+18.4% YoY campus hiring growth</span>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[28px]">payments</span>
                </div>
              </div>
            </div>

            {/* Comprehensive Search & Filter Console */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 sm:p-6 shadow-md space-y-5 border border-outline-variant/20">
              
              {/* Main Search Bar */}
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-on-surface-variant text-[24px]">search</span>
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search internships, jobs, projects (e.g. Frontend, Marketing, Content)..."
                  className="w-full h-14 pl-13 pr-32 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md transition-all focus:bg-surface-container-lowest focus:shadow-[0_0_0_3px_rgba(108,92,231,0.25)] outline-none"
                />
                <button className="absolute right-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-body-md-medium text-body-md-medium hover:bg-primary/90 transition-all shadow-sm flex items-center gap-1.5">
                  <span>Find</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

              {/* Type Selector Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-sm no-scrollbar">
                {['All Roles', 'Internships', 'Part-time', 'Campus Jobs', 'Micro Projects', 'Featured Fast-Track'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all shrink-0 flex items-center gap-1.5 ${
                      activeTab === tab 
                        ? 'bg-primary text-on-primary shadow-sm font-semibold' 
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {tab === 'All Roles' && <span className="material-symbols-outlined text-[16px]">apps</span>}
                    {tab === 'Featured Fast-Track' && <span className="material-symbols-outlined text-[14px] text-tertiary">star</span>}
                    <span>{tab}</span>
                    {tab === 'All Roles' && <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">2,480</span>}
                  </button>
                ))}
              </div>

              {/* Multi-Select Filters Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                
                {/* Location */}
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Location</label>
                  <select 
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full h-10 px-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-sm appearance-none outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option>All India</option>
                    <option>Delhi NCR</option>
                    <option>Panipat, HR</option>
                    <option>Gurugram, HR</option>
                    <option>Bengaluru, KA</option>
                    <option>Mumbai, MH</option>
                    <option>Chandigarh</option>
                    <option>Remote</option>
                  </select>
                </div>

                {/* Mode */}
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Work Mode</label>
                  <select 
                    value={selectedMode}
                    onChange={(e) => setSelectedMode(e.target.value)}
                    className="w-full h-10 px-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-sm appearance-none outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option>Any Mode</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>On-site</option>
                  </select>
                </div>

                {/* Stipend */}
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Stipend</label>
                  <select 
                    value={selectedStipend}
                    onChange={(e) => setSelectedStipend(e.target.value)}
                    className="w-full h-10 px-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-sm appearance-none outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option>Paid Only</option>
                    <option>₹10,000+ / mo</option>
                    <option>₹15,000+ / mo</option>
                  </select>
                </div>

                {/* Core Skill */}
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Core Skill</label>
                  <select 
                    value={selectedSkill}
                    onChange={(e) => setSelectedSkill(e.target.value)}
                    className="w-full h-10 px-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-sm appearance-none outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option>All Skills</option>
                    <option>React</option>
                    <option>SEO</option>
                    <option>Figma</option>
                    <option>Python</option>
                  </select>
                </div>

                {/* Duration */}
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">Duration</label>
                  <select 
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full h-10 px-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-sm appearance-none outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option>Any Duration</option>
                    <option>2 Months</option>
                    <option>3 Months</option>
                    <option>4 Months</option>
                  </select>
                </div>

                {/* Reset */}
                <div className="flex items-end">
                  <button 
                    onClick={resetFilters}
                    className="w-full h-10 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm-medium font-medium transition-all flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">tune</span>
                    <span>Reset Filters</span>
                  </button>
                </div>

              </div>

              {/* Active Badges Rail */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Active Filters:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                  <span>Verified Stipend Only</span>
                  <button onClick={resetFilters}><span className="material-symbols-outlined text-[13px]">close</span></button>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                  <span>{activeTab}</span>
                  <button onClick={() => setActiveTab('All Roles')}><span className="material-symbols-outlined text-[13px]">close</span></button>
                </span>
                <button onClick={resetFilters} className="font-label-sm text-label-sm text-primary hover:underline ml-1 font-semibold">Clear all</button>
              </div>

            </div>
          </div>
        </div>

        {/* Main Marketplace Listings Section */}
        <div className="max-w-[1200px] mx-auto px-gutter py-10 w-full">
          
          {/* View Switcher & Counter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-extrabold">Curated Listings for You</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Matches based on your verified university profile: B.Tech / BBA, Delhi-NCR network</p>
            </div>
            
            <div className="flex items-center gap-3 self-stretch sm:self-auto">
              <div className="flex items-center gap-1.5 bg-surface-container-lowest p-1 rounded-xl shadow-sm border border-outline-variant/15">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg font-label-sm text-label-sm flex items-center gap-1 transition-colors ${
                    viewMode === 'grid' ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">grid_view</span>
                  <span>Grid</span>
                </button>
                <button 
                  onClick={() => setViewMode('compact')}
                  className={`px-3 py-1.5 rounded-lg font-label-sm text-label-sm flex items-center gap-1 transition-colors ${
                    viewMode === 'compact' ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">view_list</span>
                  <span>Compact</span>
                </button>
              </div>

              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="h-10 px-3.5 pr-8 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm appearance-none outline-none cursor-pointer border border-outline-variant/20"
                >
                  <option>Sort: Most Recent</option>
                  <option>Sort: Highest Stipend</option>
                  <option>Sort: Fewest Applicants</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-2.5 pointer-events-none text-on-surface-variant text-[16px]">sort</span>
              </div>
            </div>
          </div>

          {/* Opportunity Cards Grid */}
          <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {filteredOpportunities.map((opp) => {
              const isBookmarked = bookmarkedIds.includes(opp._id || opp.id);
              return (
                <article 
                  key={opp._id || opp.id}
                  className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between relative overflow-hidden border border-outline-variant/20"
                >
                  <div className={`h-1.5 w-full bg-gradient-to-r ${opp.gradientBorder || 'from-primary to-primary-container'} absolute top-0 left-0`}></div>
                  
                  <div>
                    {opp.fastHiring && (
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] uppercase font-bold tracking-wide">
                          Fast Hiring Partner
                        </span>
                        <span className="font-label-sm text-[11px] text-error font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">alarm</span>
                          <span>{opp.deadline || '2 days left'}</span>
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl ${opp.companyLogoBg || 'bg-surface-container-high text-primary'} flex items-center justify-center font-headline-sm text-headline-sm font-bold`}>
                          {opp.companyLogoText || opp.company.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1 font-bold">
                            {opp.title}
                          </div>
                          <div className="font-body-md text-body-md text-on-surface-variant">{opp.company}</div>
                        </div>
                      </div>

                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleBookmark(opp._id || opp.id); }}
                        aria-label="Bookmark listing" 
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                          isBookmarked 
                            ? 'bg-primary-fixed text-primary font-bold' 
                            : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant hover:text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {isBookmarked ? 'bookmark_added' : 'bookmark'}
                        </span>
                      </button>
                    </div>

                    {/* Location & Details */}
                    <div className="flex flex-wrap items-center gap-2 mb-4 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
                        <span>{opp.location}</span>
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] text-outline">schedule</span>
                        <span>{opp.duration}</span>
                      </span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-[11px] text-on-surface">
                        {opp.mode}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {opp.tags && opp.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer / Action Area */}
                  <div className="pt-4 bg-surface-container-low/40 -mx-6 -mb-6 p-6 rounded-b-2xl border-t border-outline-variant/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">{opp.stipendLabel || 'Fixed Monthly Stipend'}</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                          ₹{opp.stipend?.toLocaleString()} <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">{opp.stipendPeriod || '/ mo'}</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed/30 text-tertiary font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                        <span>Verified</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-outline">group</span>
                        <span>{opp.applicantsCount} applicants</span>
                      </span>
                      <button 
                        onClick={() => {
                          setSelectedOpportunityDetail(opp);
                          setIsDetailModalOpen(true);
                        }}
                        className="px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary/90 font-label-md text-label-md transition-all shadow-sm flex items-center gap-1 font-semibold"
                      >
                        <span>View Opportunity</span>
                        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                      </button>
                    </div>
                  </div>

                </article>
              );
            })}
          </div>

          {/* Employer Split Banner */}
          <div className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-container to-secondary text-on-primary p-8 sm:p-12 shadow-xl">
            <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur font-label-sm text-label-sm text-white">
                  <span className="material-symbols-outlined text-[15px]">campaign</span>
                  <span>Fast Turnaround Hiring</span>
                </div>
                <h3 className="font-display-md text-display-md-mobile sm:text-display-md text-white font-extrabold tracking-tight">
                  Are you an employer, startup, or student club?
                </h3>
                <p className="font-body-lg text-body-lg text-white/85 max-w-xl">
                  Post an opportunity in under 2 minutes. Reach verified undergraduates, postgraduate researchers, and creative leaders across 800+ Indian universities today.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button 
                  onClick={() => setIsPostModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container font-headline-sm text-headline-sm font-semibold text-center transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Post an Opportunity in 2 mins</span>
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
