import React from 'react';
import { useApp } from '../context/AppContext';

export const EventsPage = () => {
  const { events, handleRegisterEvent } = useApp();

  return (
    <div className="w-full pt-20 bg-background min-h-screen">
      <div className="max-w-[1200px] mx-auto px-gutter py-10 space-y-8">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
            <span className="material-symbols-outlined text-[16px]">celebration</span>
            <span>INTER &amp; INTRA CAMPUS HACKATHONS &amp; FESTS</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface font-extrabold tracking-tight">
            Campus Events &amp; Hackathons Hub
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Discover technical hackathons, case competitions, cultural fests, and placement readiness workshops with verified team passes and prize pools.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(evt => (
            <div key={evt._id} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-outline-variant/20 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex flex-col items-center justify-center font-bold shadow-xs">
                    <span className="text-[10px] uppercase font-bold">{evt.dayTag}</span>
                    <span className="text-[16px] font-extrabold leading-none">{evt.dateNum}</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full font-label-sm text-[11px] font-bold ${
                    evt.isRegistered ? 'bg-[#E6F8F4] text-[#00B894]' : 'bg-surface-container text-primary'
                  }`}>
                    {evt.isRegistered ? '✓ Registered' : evt.badgeText}
                  </span>
                </div>

                <div>
                  <span className="font-label-sm text-xs text-primary font-bold uppercase">{evt.category}</span>
                  <h3 className="font-headline-md text-[18px] text-on-surface font-extrabold leading-snug mt-1">{evt.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{evt.organizer}</p>
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low font-body-sm text-on-surface space-y-1">
                  <p className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                    <span>{evt.venue}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
                    <span>{evt.time}</span>
                  </p>
                  <p className="font-semibold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">emoji_events</span>
                    <span>{evt.prizePool}</span>
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="font-body-sm text-xs text-on-surface-variant">{evt.registeredCount} students attending</span>
                <button 
                  onClick={() => handleRegisterEvent(evt._id)}
                  disabled={evt.isRegistered}
                  className={`px-4 py-2 rounded-xl font-label-md text-label-md font-bold transition-all shadow-xs ${
                    evt.isRegistered 
                      ? 'bg-surface-container text-on-surface-variant cursor-default' 
                      : 'bg-primary text-on-primary hover:bg-primary-container'
                  }`}
                >
                  {evt.isRegistered ? 'Pass Generated' : 'Register 1-Click'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
