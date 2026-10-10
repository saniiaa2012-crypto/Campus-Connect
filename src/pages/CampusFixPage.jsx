import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const CampusFixPage = () => {
  const { campusFixTickets, handleUpvoteTicket, handleAddTicket, user } = useApp();

  const [activeTab, setActiveTab] = useState('All Issues');
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formPriority, setFormPriority] = useState('med');
  const [formDesc, setFormDesc] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const filteredTickets = campusFixTickets.filter(ticket => {
    if (activeTab === 'My College (IIT Bombay)') return ticket.college.includes('IIT Bombay');
    if (activeTab === 'Resolved (38)' || activeTab === 'Resolved') return ticket.status === 'Resolved';
    if (activeTab === 'My Reported Issues (2)') return ticket.reporterName === user.name || ticket.reporterRoll === user.rollNumber;
    return true;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const result = await handleAddTicket({
      title: formTitle,
      category: formCategory,
      location: formLocation,
      priority: formPriority,
      description: formDesc,
      isAnonymous,
      reporterName: user.name,
      reporterRoll: user.rollNumber,
      college: user.college
    });

    setSubmitting(false);
    setToastMsg(result ? result.message : 'Issue logged successfully!');
    
    // Reset form
    setFormTitle('');
    setFormCategory('');
    setFormLocation('');
    setFormDesc('');

    setTimeout(() => setToastMsg(''), 4000);
  };

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="flex flex-col w-full">
        
        {/* Header Hero Banner */}
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container via-surface to-background pb-12 pt-8 sm:pt-12 border-b border-outline-variant/15">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 top-48 w-80 h-80 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
          
          <div className="max-w-[1200px] mx-auto px-gutter relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest shadow-sm">
                  <span className="text-xs">🛠️</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">CAMPUS PROBLEM RESOLUTION ENGINE</span>
                </div>
                
                <div className="space-y-3">
                  <h1 className="font-display-lg text-display-lg tracking-tight text-on-surface font-extrabold">
                    CampusFix: Transparent issue tracking for your college.
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                    From broken ACs and failing hostel Wi-Fi to library equipment and water coolers — voice problems, mobilize campus support, and watch administration resolve them in real time.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a href="#report-section" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-body-lg-medium text-body-lg-medium shadow-md hover:bg-on-primary-fixed-variant hover:shadow-lg transition-all duration-200">
                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                    <span>+ Report a Campus Problem</span>
                  </a>
                  <a href="#live-feed" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md-medium text-body-md-medium shadow-sm hover:bg-surface-container transition-all">
                    <span className="material-symbols-outlined text-[20px] text-primary">dynamic_feed</span>
                    <span>Explore Active Feed</span>
                  </a>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-on-surface-variant font-body-md-medium text-body-md-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-on-surface font-bold">1,420</span> Issues Reported
                  </div>
                  <span className="text-outline-variant font-bold">•</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00B894]"></span>
                    <span className="text-on-surface font-bold">92%</span> Avg Resolution Rate
                  </div>
                  <span className="text-outline-variant font-bold">•</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-secondary">bolt</span>
                    <span>Avg Resolution: <strong className="text-on-surface">18 hrs</strong></span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-lowest p-2 border border-outline-variant/20">
                  <img 
                    className="w-full h-80 object-cover rounded-xl shadow-inner" 
                    alt="Campus" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmFfGK8muG4Ndp-4SK5CBZuShQAIcH-vbky9KAlZn1Jby2Fmf5Haj4UPOeHp6hLicOgCvp18_I559jgr_LV32KEUtNE3ttwWW6SbX3zFTd5Tt_f90n8itnVP-hnx9dmLXFHPY47JrtphDZGNc6AHUEilH-cpvqx3yNb5detUX7UA2eMb5yq-ZnoZ1fu-ivlT6qe-nR7TQFSgZ0I1o3VjGdCfQzwRHDs0l-TOjrCDMAjzPRmukPxrylSQ" 
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">verified</span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface font-bold">Live Campus SLA Watch</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Hostel Block B &amp; Labs Under Priority Audit</p>
                      </div>
                    </div>
                    <span className="font-label-sm text-[11px] px-2.5 py-1 rounded-full bg-[#E6F8F4] text-[#00B894] font-bold">Live Status</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Phase Resolution Pipeline Ribbon */}
        <section className="w-full py-10 bg-surface-container-lowest shadow-sm border-b border-outline-variant/15">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Five-Phase Pipeline</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">How Your Campus Reports Get Solved</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Every ticket is tied to department accountability with public timeline updates at each phase.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              
              {/* Step 1 */}
              <div className="bg-surface-container-low p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-all">
                <div className="w-2 h-full absolute left-0 top-0 bg-[#3F9EFF]"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3F9EFF]/15 text-[#0060A9] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">flag</span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-highest text-[#0060A9] font-bold">Step 01</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[16px] text-on-surface mb-1 font-bold">1. Reported</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Logged by student or faculty with geotagged photo proof.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-surface-container-low p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-all">
                <div className="w-2 h-full absolute left-0 top-0 bg-primary"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">policy</span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-bold">Step 02</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[16px] text-on-surface mb-1 font-bold">2. Under Review</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Validated by estate management &amp; prioritized via upvotes.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-surface-container-low p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-all">
                <div className="w-2 h-full absolute left-0 top-0 bg-[#E5B800]"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9E6] text-[#A67C00] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">engineering</span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-[#FFF9E6] text-[#A67C00] font-bold">Step 03</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[16px] text-on-surface mb-1 font-bold">3. Assigned</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Dispatched to electrical, HVAC, IT, or sanitation contractor.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-surface-container-low p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-all">
                <div className="w-2 h-full absolute left-0 top-0 bg-[#FF8A00]"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF3E6] text-[#D86900] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">build_circle</span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-[#FFF3E6] text-[#D86900] font-bold">Step 04</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[16px] text-on-surface mb-1 font-bold">4. In Progress</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Ground staff executing repairs with live time-logged records.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-surface-container-low p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container transition-all">
                <div className="w-2 h-full absolute left-0 top-0 bg-[#00B894]"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F8F4] text-[#00896E] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">task_alt</span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-[#E6F8F4] text-[#00896E] font-bold">Step 05</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-[16px] text-on-surface mb-1 font-bold">5. Resolved</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Closed with verification proof signed off by campus wardens.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Form + Feed Section */}
        <div className="max-w-[1200px] mx-auto px-gutter py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Intake Form */}
            <div className="lg:col-span-5 order-2 lg:order-1" id="report-section">
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-lg sticky top-28 space-y-6 border border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md font-bold">
                    <span className="material-symbols-outlined text-[22px]">report_problem</span>
                  </div>
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Report Campus Problem</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Official intake for estate &amp; facilities admin</p>
                  </div>
                </div>

                {toastMsg && (
                  <div className="p-3.5 rounded-xl bg-[#E6F8F4] text-[#00B894] font-body-sm font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    <span>{toastMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold">Problem Title *</label>
                    <input 
                      required
                      type="text"
                      placeholder="e.g. AC not working in Classroom F-202"
                      value={formTitle}
                      onChange={e => setFormTitle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold">Campus Category *</label>
                    <select 
                      required
                      value={formCategory}
                      onChange={e => setFormCategory(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface outline-none cursor-pointer"
                    >
                      <option value="" disabled>Select problem category</option>
                      <option value="infra">Classroom Infrastructure</option>
                      <option value="wifi">Wi-Fi &amp; Network Issues</option>
                      <option value="hostel">Hostel &amp; Mess Amenities</option>
                      <option value="clean">Cleanliness &amp; Washrooms</option>
                      <option value="water">Water Coolers &amp; Facilities</option>
                      <option value="lib">Central Library Facilities</option>
                      <option value="lab">Lab Equipment &amp; Instruments</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold">Specific Location *</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-3 text-outline text-[20px]">location_on</span>
                      <input 
                        required
                        type="text"
                        placeholder="e.g. Aryabhata Block, 2nd Floor, Room F-202"
                        value={formLocation}
                        onChange={e => setFormLocation(e.target.value)}
                        className="w-full pl-11 pr-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-2 font-semibold">Priority Level *</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['low', 'med', 'high', 'urgent'].map(p => (
                        <label key={p} className="cursor-pointer">
                          <input 
                            type="radio" 
                            name="priority" 
                            value={p}
                            checked={formPriority === p}
                            onChange={() => setFormPriority(p)}
                            className="sr-only peer"
                          />
                          <div className={`text-center py-2 rounded-lg font-label-sm text-label-sm font-semibold transition-all ${
                            formPriority === p 
                              ? p === 'urgent' ? 'bg-error-container text-on-error-container' : 'bg-surface-variant text-primary font-bold'
                              : 'bg-surface-container-low text-on-surface-variant'
                          }`}>
                            {p.charAt(0).toUpperCase() + p.slice(1)}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">Description &amp; Impact</label>
                      <span className="font-label-sm text-label-sm text-outline">{formDesc.length} / 400</span>
                    </div>
                    <textarea 
                      maxLength={400}
                      rows={3}
                      placeholder="Elaborate on the issue, how long it has persisted..."
                      value={formDesc}
                      onChange={e => setFormDesc(e.target.value)}
                      className="w-full p-3.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5 font-semibold">Upload Image Proof</label>
                    <div className="rounded-xl bg-surface-container-low p-4 text-center cursor-pointer hover:bg-surface-container-high transition-colors border border-dashed border-outline-variant/40">
                      <div className="flex flex-col items-center justify-center gap-1.5">
                        <span className="material-symbols-outlined text-[32px] text-primary">add_photo_alternate</span>
                        <span className="font-body-sm text-body-sm text-on-surface font-semibold">Drag &amp; drop photo proof or browse</span>
                        <span className="font-label-sm text-[10px] text-on-surface-variant">PNG, JPG, or HEIC up to 10MB</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-outline text-[20px]">visibility_off</span>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface font-semibold">Anonymous Mode</p>
                        <p className="font-body-sm text-xs text-on-surface-variant">Keep my roll number &amp; name hidden</p>
                      </div>
                    </div>
                    <input 
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={e => setIsAnonymous(e.target.checked)}
                      className="w-5 h-5 accent-primary cursor-pointer"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-body-lg-medium text-body-lg-medium shadow-md hover:bg-on-primary-fixed-variant transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    <span>{submitting ? 'Submitting...' : 'Submit to Campus Administration'}</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Live Feed */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6" id="live-feed">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Live Campus Issues</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Real-time status updates broadcast directly from facilities desk</p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface font-semibold">
                  <span className="material-symbols-outlined text-[18px] text-primary">filter_list</span>
                  <span>Sorted by: Upvotes &amp; Urgency</span>
                </div>
              </div>

              {/* Feed Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {['All Issues (42)', 'My College (IIT Bombay)', 'My Reported Issues (2)', 'Resolved (38)'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors ${
                      activeTab === tab 
                        ? 'bg-primary text-on-primary shadow-sm font-semibold' 
                        : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tickets List */}
              <div className="space-y-4">
                {filteredTickets.map((ticket) => (
                  <div 
                    key={ticket._id || ticket.ticketId}
                    className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 border border-outline-variant/20"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1 ${
                          ticket.status === 'Resolved' ? 'bg-[#E6F8F4] text-[#00896E]' :
                          ticket.status === 'In Progress' ? 'bg-[#FFF3E6] text-[#D86900]' :
                          ticket.status === 'Assigned' ? 'bg-[#FFF9E6] text-[#A67C00]' :
                          'bg-surface-variant text-primary'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                          {ticket.status}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                          {ticket.categoryLabel || 'Campus Infrastructure'}
                        </span>
                      </div>
                      
                      <span className={`px-2.5 py-0.5 rounded-full font-label-sm text-[11px] font-bold ${
                        ticket.priority === 'urgent' ? 'bg-error text-on-error' :
                        ticket.priority === 'high' ? 'bg-error-container text-on-error-container' :
                        'bg-surface-container text-on-surface-variant'
                      }`}>
                        {ticket.priorityLabel || 'Medium Priority'}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 font-bold">
                        {ticket.title}
                      </h3>
                      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                        <span>{ticket.location} • Reported by {ticket.isAnonymous ? 'Anonymous' : ticket.reporterName}</span>
                      </div>
                    </div>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {ticket.description}
                    </p>

                    {/* Progress Hairline Log */}
                    {ticket.assignedTeam && (
                      <div className="p-3 rounded-xl bg-surface-container-low space-y-2">
                        <div className="flex justify-between items-center font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px] text-primary">engineering</span>
                            Assigned to {ticket.assignedTeam}
                          </span>
                          <span className="text-primary font-bold">Phase {ticket.stepNumber || 4} of 5 ({ticket.progressPercentage || 65}%)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                          <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${ticket.progressPercentage || 65}%` }}></div>
                        </div>
                        <p className="font-body-sm text-xs text-on-surface-variant">
                          {ticket.technicianNote || 'Technician inspecting issue.'}
                        </p>
                      </div>
                    )}

                    {/* Actions Bar */}
                    <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleUpvoteTicket(ticket._id || ticket.ticketId)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-variant text-primary font-label-md text-label-md transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                          <span className="font-bold">{ticket.upvotes}</span>
                          <span className="text-on-surface-variant text-xs">Students Affected</span>
                        </button>
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md transition-colors">
                          <span className="material-symbols-outlined text-[18px]">chat_bubble_outline</span>
                          <span>{ticket.comments?.length || 2} Comments</span>
                        </button>
                      </div>
                      
                      <span className="font-label-sm text-label-sm text-outline">
                        {ticket.turnaroundTime || 'SLA Active'}
                      </span>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
