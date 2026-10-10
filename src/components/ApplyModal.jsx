import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const ApplyModal = () => {
  const { 
    isApplyModalOpen, 
    setIsApplyModalOpen, 
    selectedOpportunityForApply,
    user,
    handleApplyOpportunity,
    setActivePath
  } = useApp();

  const [coverNote, setCoverNote] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('https://aryansharma.dev');
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  if (!isApplyModalOpen || !selectedOpportunityForApply) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const appData = {
      opportunityId: selectedOpportunityForApply._id || selectedOpportunityForApply.id,
      opportunityTitle: selectedOpportunityForApply.title,
      companyName: selectedOpportunityForApply.company,
      companyLocation: selectedOpportunityForApply.location,
      studentName: user.name,
      rollNumber: user.rollNumber,
      college: user.college,
      email: `${user.name.toLowerCase().replace(' ', '.')}@dtu.ac.in`,
      phone: '+91 98765 12345',
      portfolioUrl,
      githubUrl: 'https://github.com/aryansharma',
      coverNote: coverNote || 'Enthusiastic to contribute my technical skills to your team.'
    };

    await handleApplyOpportunity(appData);
    setSubmitting(false);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsApplyModalOpen(false);
      setActivePath('dashboard');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
          <div>
            <span className="font-label-sm text-[11px] text-primary font-bold uppercase tracking-wider">Fast Apply</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              {selectedOpportunityForApply.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {selectedOpportunityForApply.company} • ₹{selectedOpportunityForApply.stipend?.toLocaleString()} / mo
            </p>
          </div>
          <button 
            onClick={() => setIsApplyModalOpen(false)}
            className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {submittedSuccess ? (
          <div className="p-6 rounded-2xl bg-[#E6F8F4] text-[#00B894] font-body-md text-center space-y-2">
            <span className="material-symbols-outlined text-[42px]">verified</span>
            <h4 className="font-headline-sm font-bold text-on-surface">Application Submitted!</h4>
            <p className="font-body-sm text-on-surface-variant">Track your application pipeline live in your Student Dashboard.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Student Verified Pass Card */}
            <div className="bg-surface-container-low p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover" src={user.avatar} alt="Student" />
                <div>
                  <h4 className="font-label-md text-on-surface font-bold">{user.name}</h4>
                  <p className="font-body-sm text-xs text-on-surface-variant">{user.branch} • ID: {user.rollNumber}</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#E6F8F4] text-[#00B894] font-label-sm text-[10px] font-bold">
                Verified Student
              </span>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Portfolio / GitHub Link</label>
              <input 
                type="url"
                value={portfolioUrl}
                onChange={e => setPortfolioUrl(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Short Note to Recruiter (Optional)</label>
              <textarea 
                rows="3"
                placeholder="Share why you are excited for this role..."
                value={coverNote}
                onChange={e => setCoverNote(e.target.value)}
                className="w-full p-3.5 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <button 
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-body-lg-medium text-body-lg-medium shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>{submitting ? 'Submitting...' : 'Submit Fast Application'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
