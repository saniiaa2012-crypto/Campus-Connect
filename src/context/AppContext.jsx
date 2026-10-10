import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activePath, setActivePath] = useState('home'); // home, opportunities, campus-fix, campus-services, events, dashboard, login
  const [selectedCampus, setSelectedCampus] = useState('Delhi Tech & NCR Campuses');
  
  const [opportunities, setOpportunities] = useState([]);
  const [campusFixTickets, setCampusFixTickets] = useState([]);
  const [applications, setApplications] = useState([]);
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState({
    partnerColleges: '120+',
    activeStudents: '18,400+',
    stipendsEarned: '₹1.4 Cr+',
    resolutionRate: '94%'
  });

  const [bookmarkedIds, setBookmarkedIds] = useState(['opp-2']);
  const [loading, setLoading] = useState(true);

  // Modals state
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedOpportunityForApply, setSelectedOpportunityForApply] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedOpportunityDetail, setSelectedOpportunityDetail] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // User state
  const [user, setUser] = useState({
    name: 'Aryan Sharma',
    rollNumber: '2022/CS/184',
    college: 'Delhi Technological University',
    branch: 'B.Tech CS • 6th Sem',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV1O9jcyAeh8yqOGhzgJF0YTIwYcReuB1eg99NL9r92h5Z7HFDUvJuZz3aKgBQ7FrrOXNe02OAoy1JBLqpQ2BifTZu99uL6FkThVE8NLj2w9BPNAEo7L52a29hjTnE3f08S2r8wrUOq_tFekfor35smtT9KjGVMhsJwbPYBMYfO8uLobDOd647GXxvC2xJTVNHlnwF3Dzjs5YoI_R8ZButdVRUN-7nZP6lAH_DwLmDwi-a_zrzKmqh7A',
    isLoggedIn: true
  });

  const API_BASE = '/api';

  // Fetch initial data from backend API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [oppRes, fixRes, appRes, srvRes, evtRes, statRes] = await Promise.all([
          fetch(`${API_BASE}/opportunities`),
          fetch(`${API_BASE}/campusfix`),
          fetch(`${API_BASE}/applications`),
          fetch(`${API_BASE}/services`),
          fetch(`${API_BASE}/events`),
          fetch(`${API_BASE}/stats`)
        ]);

        if (oppRes.ok) {
          const data = await oppRes.json();
          if (data.data) setOpportunities(data.data);
        }
        if (fixRes.ok) {
          const data = await fixRes.json();
          if (data.data) setCampusFixTickets(data.data);
        }
        if (appRes.ok) {
          const data = await appRes.json();
          if (data.data) setApplications(data.data);
        }
        if (srvRes.ok) {
          const data = await srvRes.json();
          if (data.data) setServices(data.data);
        }
        if (evtRes.ok) {
          const data = await evtRes.json();
          if (data.data) setEvents(data.data);
        }
        if (statRes.ok) {
          const data = await statRes.json();
          if (data.data) setStats(data.data);
        }
      } catch (err) {
        console.error('Error fetching data from backend:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handlers
  const toggleBookmark = (id) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleUpvoteTicket = async (ticketId) => {
    setCampusFixTickets(prev => 
      prev.map(t => t._id === ticketId || t.ticketId === ticketId ? { ...t, upvotes: t.upvotes + 1 } : t)
    );

    try {
      await fetch(`${API_BASE}/campusfix/${ticketId}/upvote`, { method: 'POST' });
    } catch (e) {
      console.error('Upvote API error:', e);
    }
  };

  const handleAddTicket = async (newTicket) => {
    try {
      const res = await fetch(`${API_BASE}/campusfix`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTicket)
      });
      const data = await res.json();
      if (data.data) {
        setCampusFixTickets(prev => [data.data, ...prev]);
        return data;
      }
    } catch (e) {
      console.error('Add ticket error:', e);
    }
  };

  const handleApplyOpportunity = async (appData) => {
    try {
      const res = await fetch(`${API_BASE}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appData)
      });
      const data = await res.json();
      if (data.data) {
        setApplications(prev => [data.data, ...prev]);
        return data;
      }
    } catch (e) {
      console.error('Apply error:', e);
    }
  };

  const handlePostOpportunity = async (oppData) => {
    try {
      const res = await fetch(`${API_BASE}/opportunities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(oppData)
      });
      const data = await res.json();
      if (data.data) {
        setOpportunities(prev => [data.data, ...prev]);
        return data;
      }
    } catch (e) {
      console.error('Post opportunity error:', e);
    }
  };

  const handleRegisterEvent = async (eventId) => {
    setEvents(prev => 
      prev.map(e => e._id === eventId ? { ...e, isRegistered: true, registeredCount: e.registeredCount + 1 } : e)
    );

    try {
      await fetch(`${API_BASE}/events/${eventId}/register`, { method: 'POST' });
    } catch (e) {
      console.error('Register event error:', e);
    }
  };

  return (
    <AppContext.Provider value={{
      activePath, setActivePath,
      selectedCampus, setSelectedCampus,
      opportunities, setOpportunities,
      campusFixTickets, setCampusFixTickets,
      applications, setApplications,
      services, setServices,
      events, setEvents,
      stats,
      bookmarkedIds, toggleBookmark,
      loading,
      user, setUser,
      isPostModalOpen, setIsPostModalOpen,
      isApplyModalOpen, setIsApplyModalOpen,
      selectedOpportunityForApply, setSelectedOpportunityForApply,
      isDetailModalOpen, setIsDetailModalOpen,
      selectedOpportunityDetail, setSelectedOpportunityDetail,
      isAuthModalOpen, setIsAuthModalOpen,
      isLocationModalOpen, setIsLocationModalOpen,
      isSearchModalOpen, setIsSearchModalOpen,
      searchQuery, setSearchQuery,
      handleUpvoteTicket,
      handleAddTicket,
      handleApplyOpportunity,
      handlePostOpportunity,
      handleRegisterEvent
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
