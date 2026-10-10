import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const CampusServicesPage = () => {
  const { services } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filteredServices = services.filter(srv => {
    if (activeCategory !== 'All' && srv.category !== activeCategory) return false;
    if (search && !srv.name.toLowerCase().includes(search.toLowerCase()) && !srv.location.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="max-w-[1200px] mx-auto px-gutter py-10 space-y-8">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
            <span className="material-symbols-outlined text-[16px]">storefront</span>
            <span>HYPER-LOCAL CAMPUS AMENITIES &amp; DISCOUNTS</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface font-extrabold tracking-tight">
            Campus Services Directory
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Curated local printing, laptop repair, mess plans, and PG rentals verified by college students. Zero extra brokerage, maximum student savings.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar">
            {['All', 'Printing', 'Repair', 'Mess', 'PG'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all shrink-0 ${
                  activeCategory === cat ? 'bg-primary text-on-primary font-bold shadow-xs' : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
            <input 
              type="text"
              placeholder="Search vendor or service..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-surface-container-low font-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map(srv => (
            <div key={srv._id} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-outline-variant/20 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#E6F8F4] text-[#00B894] font-label-sm text-xs font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">local_offer</span>
                    {srv.discountBadge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-600 font-label-sm font-bold text-xs">
                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                    <span>{srv.rating} ({srv.reviewsCount})</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold">{srv.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                    <span>{srv.distance} • {srv.location}</span>
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low font-body-sm text-on-surface space-y-1">
                  <p><strong>Turnaround:</strong> {srv.turnaround}</p>
                  <p className="text-primary font-semibold"><strong>Student Rates:</strong> {srv.pricing}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10">
                <a 
                  href={`https://wa.me/${srv.whatsapp || '919876543210'}?text=Hi,%20I%20found%20you%20on%20CampusConnect.`}
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#00B894] text-white font-label-md text-label-md font-bold flex items-center gap-1.5 shadow-xs hover:bg-[#009b7c] transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Direct</span>
                </a>

                <a 
                  href={`tel:${srv.phone}`}
                  className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Call Vendor</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
