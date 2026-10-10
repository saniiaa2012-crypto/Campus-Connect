import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const PostOpportunityModal = () => {
  const { isPostModalOpen, setIsPostModalOpen, handlePostOpportunity } = useApp();
  
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: 'Delhi NCR',
    duration: '2 Months',
    mode: 'Hybrid',
    type: 'Internships',
    stipend: '10000',
    tags: 'React, Tailwind, Node.js',
    description: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  if (!isPostModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const result = await handlePostOpportunity(formData);
    setSubmitting(false);
    setSuccessMsg('Opportunity posted live to CampusConnect marketplace!');
    setTimeout(() => {
      setSuccessMsg('');
      setIsPostModalOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[22px]">post_add</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Post an Opportunity</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Reach 18,400+ verified campus students in under 2 minutes</p>
            </div>
          </div>
          <button 
            onClick={() => setIsPostModalOpen(false)}
            className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {successMsg ? (
          <div className="p-4 rounded-xl bg-[#E6F8F4] text-[#00B894] font-body-md font-semibold text-center flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[24px]">check_circle</span>
            <span>{successMsg}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Role Title *</label>
              <input 
                required
                type="text"
                placeholder="e.g. Frontend Developer Intern"
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Company / Organization *</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. Zomato / Coding Club"
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Location *</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. Delhi NCR / Gurugram"
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Work Mode</label>
                <select 
                  value={formData.mode}
                  onChange={e => setFormData({...formData, mode: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-lg bg-surface-container-low font-body-sm text-on-surface outline-none cursor-pointer"
                >
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                </select>
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Listing Type</label>
                <select 
                  value={formData.type}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-lg bg-surface-container-low font-body-sm text-on-surface outline-none cursor-pointer"
                >
                  <option value="Internships">Internships</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Campus Jobs">Campus Jobs</option>
                  <option value="Micro Projects">Micro Projects</option>
                </select>
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Stipend (₹ / mo) *</label>
                <input 
                  required
                  type="number"
                  placeholder="12000"
                  value={formData.stipend}
                  onChange={e => setFormData({...formData, stipend: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Tags (comma separated)</label>
              <input 
                type="text"
                placeholder="React, Figma, SEO"
                value={formData.tags}
                onChange={e => setFormData({...formData, tags: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Description & Requirements</label>
              <textarea 
                rows="3"
                placeholder="Brief details about the role..."
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                className="w-full p-3.5 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <button 
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-body-lg-medium text-body-lg-medium shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>{submitting ? 'Publishing...' : 'Publish Listing Live'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
