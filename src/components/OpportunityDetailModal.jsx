import React from 'react';
import { useApp } from '../context/AppContext';

export const OpportunityDetailModal = () => {
  const { 
    isDetailModalOpen, 
    setIsDetailModalOpen, 
    selectedOpportunityDetail,
    setSelectedOpportunityForApply,
    setIsApplyModalOpen
  } = useApp();

  if (!isDetailModalOpen || !selectedOpportunityDetail) return null;

  const opp = selectedOpportunityDetail;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={() => setIsDetailModalOpen(false)}
          className="absolute top-6 right-6 p-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 pr-10">
          <div className={`w-14 h-14 rounded-2xl ${opp.companyLogoBg || 'bg-surface-container-high text-primary'} flex items-center justify-center font-headline-md text-headline-md font-bold shrink-0`}>
            {opp.companyLogoText || opp.company.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed/30 text-tertiary font-label-sm text-[11px] font-bold">
                ✓ Verified Opportunity
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-[11px] text-on-surface">
                {opp.mode}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold mt-1">
              {opp.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-medium">
              {opp.company} • {opp.location}
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-surface-container-low">
          <div>
            <span className="font-label-sm text-xs text-on-surface-variant">Stipend</span>
            <p className="font-headline-sm text-[17px] font-bold text-on-surface">₹{opp.stipend?.toLocaleString()} <span className="font-normal text-xs text-on-surface-variant">{opp.stipendPeriod || '/ mo'}</span></p>
          </div>
          <div>
            <span className="font-label-sm text-xs text-on-surface-variant">Duration</span>
            <p className="font-body-md font-semibold text-on-surface">{opp.duration}</p>
          </div>
          <div>
            <span className="font-label-sm text-xs text-on-surface-variant">Applicants</span>
            <p className="font-body-md font-semibold text-on-surface">{opp.applicantsCount} applied</p>
          </div>
          <div>
            <span className="font-label-sm text-xs text-on-surface-variant">Deadline</span>
            <p className="font-body-md font-semibold text-primary">{opp.deadline || '1 week left'}</p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="font-headline-sm text-[16px] font-bold text-on-surface">About the Role</h4>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {opp.description || 'Join our campus ecosystem drive to gain real-world project experience, build portfolio proof, and earn verified stipends.'}
          </p>
        </div>

        {/* Requirements */}
        {opp.requirements && opp.requirements.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-headline-sm text-[16px] font-bold text-on-surface">Requirements & Skills</h4>
            <ul className="list-disc list-inside space-y-1 text-body-md text-on-surface-variant">
              {opp.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Perks */}
        {opp.perks && opp.perks.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-headline-sm text-[16px] font-bold text-on-surface">Perks & Growth</h4>
            <div className="flex flex-wrap gap-2">
              {opp.perks.map((perk, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold">
                  ★ {perk}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between gap-4">
          <button 
            onClick={() => setIsDetailModalOpen(false)}
            className="px-5 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high font-body-md-medium text-on-surface transition-colors"
          >
            Close
          </button>

          <button 
            onClick={() => {
              setIsDetailModalOpen(false);
              setSelectedOpportunityForApply(opp);
              setIsApplyModalOpen(true);
            }}
            className="px-6 py-3 rounded-xl bg-primary text-on-primary font-body-lg-medium text-body-lg-medium shadow-md hover:bg-primary-container transition-all flex items-center gap-2"
          >
            <span>Apply Now</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
