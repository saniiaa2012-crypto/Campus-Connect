import React from 'react';
import { useApp } from '../context/AppContext';

export const SearchModal = () => {
  const { isSearchModalOpen, setIsSearchModalOpen, searchQuery, setSearchQuery, setActivePath } = useApp();

  if (!isSearchModalOpen) return null;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchModalOpen(false);
    setActivePath('opportunities');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-on-surface/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl p-6 max-w-2xl w-full shadow-2xl space-y-4">
        <form onSubmit={handleSearchSubmit} className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-4 text-on-surface-variant text-[24px]">search</span>
          <input 
            autoFocus
            type="text"
            placeholder="Search internships, campus services, CampusFix issues..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-13 pr-24 rounded-2xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <button 
            type="submit"
            className="absolute right-2 px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container"
          >
            Search
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
          <span className="text-outline">Trending:</span>
          <button onClick={() => { setSearchQuery('React'); setIsSearchModalOpen(false); setActivePath('opportunities'); }} className="hover:text-primary transition-colors">#FrontendIntern</button>
          <span>•</span>
          <button onClick={() => { setSearchQuery('Wi-Fi'); setIsSearchModalOpen(false); setActivePath('campus-fix'); }} className="hover:text-primary transition-colors">#HostelWi-FiFix</button>
          <span>•</span>
          <button onClick={() => { setSearchQuery('Printing'); setIsSearchModalOpen(false); setActivePath('campus-services'); }} className="hover:text-primary transition-colors">#PrintingServices</button>
        </div>
      </div>
    </div>
  );
};
