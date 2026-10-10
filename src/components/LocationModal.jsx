import React from 'react';
import { useApp } from '../context/AppContext';

export const LocationModal = () => {
  const { isLocationModalOpen, setIsLocationModalOpen, selectedCampus, setSelectedCampus } = useApp();

  if (!isLocationModalOpen) return null;

  const campuses = [
    "Delhi Tech & NCR Campuses",
    "IIT Delhi & South Campus",
    "DU North Campus Network",
    "IIT Bombay & Powai Hub",
    "SPPU Pune & Tech Campuses",
    "Anna University & Chennai",
    "BITS Pilani Campus",
    "NIT Kurukshetra Cluster"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[24px] text-primary">location_on</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Select Campus Region</h3>
          </div>
          <button onClick={() => setIsLocationModalOpen(false)} className="p-1 text-on-surface-variant hover:bg-surface-container rounded-full">
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <p className="font-body-sm text-body-sm text-on-surface-variant">
          CampusConnect prioritizes local micro-internships, amenities, and infrastructure fixes near your college gate.
        </p>

        <div className="space-y-2">
          {campuses.map((campus, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedCampus(campus);
                setIsLocationModalOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl font-body-md transition-all flex items-center justify-between ${
                selectedCampus === campus 
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-xs' 
                  : 'bg-surface-container-low hover:bg-surface-container text-on-surface'
              }`}
            >
              <span>{campus}</span>
              {selectedCampus === campus && (
                <span className="material-symbols-outlined text-[20px]">check</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
