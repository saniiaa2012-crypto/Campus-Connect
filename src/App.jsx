import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { CampusFixPage } from './pages/CampusFixPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';
import { CampusServicesPage } from './pages/CampusServicesPage';
import { EventsPage } from './pages/EventsPage';

import { PostOpportunityModal } from './components/PostOpportunityModal';
import { ApplyModal } from './components/ApplyModal';
import { OpportunityDetailModal } from './components/OpportunityDetailModal';
import { LocationModal } from './components/LocationModal';
import { AuthModal } from './components/AuthModal';
import { SearchModal } from './components/SearchModal';

const MainContent = () => {
  const { activePath } = useApp();

  const renderPage = () => {
    switch (activePath) {
      case 'home':
        return <HomePage />;
      case 'opportunities':
        return <OpportunitiesPage />;
      case 'campus-fix':
        return <CampusFixPage />;
      case 'dashboard':
        return <StudentDashboardPage />;
      case 'campus-services':
        return <CampusServicesPage />;
      case 'events':
        return <EventsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background font-body-md text-on-surface">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />

      {/* Global Interactive Modals */}
      <PostOpportunityModal />
      <ApplyModal />
      <OpportunityDetailModal />
      <LocationModal />
      <AuthModal />
      <SearchModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
