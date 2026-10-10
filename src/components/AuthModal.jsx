import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const AuthModal = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, user, setUser, setActivePath } = useApp();
  const [role, setRole] = useState('student'); // student, faculty, employer
  const [email, setEmail] = useState('aryan.sharma@dtu.ac.in');
  const [password, setPassword] = useState('••••••••');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      isLoggedIn: true
    });
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsAuthModalOpen(false);
      setActivePath('dashboard');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold">Welcome to CampusConnect</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Log in with your verified college credentials</p>
          </div>
          <button onClick={() => setIsAuthModalOpen(false)} className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container">
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Role Selector */}
        <div className="grid grid-cols-3 gap-2 p-1 bg-surface-container-low rounded-xl text-center font-label-sm text-label-sm">
          <button 
            type="button"
            onClick={() => setRole('student')}
            className={`py-2 rounded-lg font-semibold transition-all ${role === 'student' ? 'bg-primary-container text-on-primary-container shadow-xs' : 'text-on-surface-variant'}`}
          >
            Student
          </button>
          <button 
            type="button"
            onClick={() => setRole('faculty')}
            className={`py-2 rounded-lg font-semibold transition-all ${role === 'faculty' ? 'bg-primary-container text-on-primary-container shadow-xs' : 'text-on-surface-variant'}`}
          >
            Faculty
          </button>
          <button 
            type="button"
            onClick={() => setRole('employer')}
            className={`py-2 rounded-lg font-semibold transition-all ${role === 'employer' ? 'bg-primary-container text-on-primary-container shadow-xs' : 'text-on-surface-variant'}`}
          >
            Employer
          </button>
        </div>

        {isSuccess ? (
          <div className="p-4 rounded-xl bg-[#E6F8F4] text-[#00B894] font-body-md text-center font-semibold flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[24px]">check_circle</span>
            <span>Logged in successfully! Redirecting...</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">College Email / Roll ID</label>
              <input 
                required
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">Password</label>
              <input 
                required
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-on-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-body-lg-medium text-body-lg-medium shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">login</span>
              <span>Log In to Dashboard</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
