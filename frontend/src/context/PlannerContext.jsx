import React, { createContext, useContext, useState, useEffect } from 'react';

const PlannerContext = createContext();

const API_BASE = 'http://localhost:5001/api';

const initialEvent = {
  coupleNames: 'Sarah & Alexander',
  weddingDate: '2027-06-18',
  venue: 'The Grand Chateau & Botanical Gardens',
  city: 'Paris, France',
  budgetGoal: 35000,
  theme: 'Romantic Luxury Gold'
};

const initialGuests = [
  { _id: '1', name: 'Eleanor Vance', email: 'eleanor@example.com', phone: '+1 555-0192', rsvpStatus: 'Attending', mealPreference: 'Vegetarian', plusOne: true, plusOneName: 'Julian Black', tableNumber: 3, dietaryRestrictions: 'Gluten-Free' },
  { _id: '2', name: 'Marcus Sterling', email: 'marcus@example.com', phone: '+1 555-0144', rsvpStatus: 'Attending', mealPreference: 'Prime Rib', plusOne: false, plusOneName: '', tableNumber: 1, dietaryRestrictions: 'None' },
  { _id: '3', name: 'Sophia Chen', email: 'sophia@example.com', phone: '+1 555-0188', rsvpStatus: 'Pending', mealPreference: 'Standard', plusOne: true, plusOneName: 'David Lee', tableNumber: 2, dietaryRestrictions: 'Nut Allergy' },
  { _id: '4', name: 'Arthur Pendelton', email: 'arthur@example.com', phone: '+1 555-0177', rsvpStatus: 'Declined', mealPreference: 'Standard', plusOne: false, plusOneName: '', tableNumber: 0, dietaryRestrictions: 'None' }
];

const initialTasks = [
  { _id: '1', title: 'Reserve Chateau Venue & Deposit', category: 'Venue', dueDate: '2026-11-01', completed: true, priority: 'High', assignedTo: 'Alexander' },
  { _id: '2', title: 'Schedule Menu Tasting Session', category: 'Catering', dueDate: '2026-12-15', completed: false, priority: 'High', assignedTo: 'Sarah' },
  { _id: '3', title: 'Send Out Custom Foil Invitations', category: 'Stationery', dueDate: '2027-02-01', completed: false, priority: 'High', assignedTo: 'Sarah' },
  { _id: '4', title: 'Book Ceremony String Quartet', category: 'Music', dueDate: '2027-03-10', completed: true, priority: 'Medium', assignedTo: 'Alexander' },
  { _id: '5', title: 'Finalize Seating Chart & Table Cards', category: 'Decor', dueDate: '2027-05-15', completed: false, priority: 'Low', assignedTo: 'Sarah & Alexander' }
];

const initialBudget = [
  { _id: '1', category: 'Venue & Estate', item: 'Grand Chateau Reservation Deposit', estimatedCost: 12000, actualCost: 11500, paidAmount: 6000, status: 'Partial' },
  { _id: '2', category: 'Photography & Film', item: 'Full-Day Cinematic Film & Drone', estimatedCost: 4500, actualCost: 4500, paidAmount: 4500, status: 'Paid' },
  { _id: '3', category: 'Floral & Decor', item: 'Ceremony Arch & Dinner Centerpieces', estimatedCost: 3800, actualCost: 4000, paidAmount: 1500, status: 'Partial' },
  { _id: '4', category: 'Catering & Open Bar', item: '5-Course Meal & Champagne Bar', estimatedCost: 9500, actualCost: 9800, paidAmount: 2000, status: 'Pending' }
];

const initialVendors = [
  { _id: '1', name: 'Lumières Photography Studio', category: 'Photography', contactPerson: 'Claire Dupont', phone: '+33 6 12 34 56 78', email: 'contact@lumierephoto.fr', estimatedPrice: 4500, status: 'Booked', notes: 'Drone video included.' },
  { _id: '2', name: 'Maison de la Fleur', category: 'Florist', contactPerson: 'Antoine Laurent', phone: '+33 6 98 76 54 32', email: 'info@maisonfleur.fr', estimatedPrice: 4000, status: 'Booked', notes: 'Blush & cream roses.' },
  { _id: '3', name: 'Harmony String Quartet', category: 'Music & DJ', contactPerson: 'Elena Rossi', phone: '+33 6 55 44 33 22', email: 'booking@harmonystring.com', estimatedPrice: 2200, status: 'In Talks', notes: 'Ceremony acoustic performance.' }
];

export const PlannerProvider = ({ children }) => {
  const [eventDetails, setEventDetails] = useState(initialEvent);
  const [guests, setGuests] = useState(initialGuests);
  const [tasks, setTasks] = useState(initialTasks);
  const [budget, setBudget] = useState(initialBudget);
  const [vendors, setVendors] = useState(initialVendors);
  const [activeTab, setActiveTab] = useState('overview');

  // Fetch initial data from backend API with fallback to local state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resEvent, resGuests, resTasks, resBudget, resVendors] = await Promise.all([
          fetch(`${API_BASE}/event`).catch(() => null),
          fetch(`${API_BASE}/guests`).catch(() => null),
          fetch(`${API_BASE}/tasks`).catch(() => null),
          fetch(`${API_BASE}/budget`).catch(() => null),
          fetch(`${API_BASE}/vendors`).catch(() => null)
        ]);

        if (resEvent && resEvent.ok) {
          const data = await resEvent.json();
          if (data && data.coupleNames) setEventDetails(data);
        }
        if (resGuests && resGuests.ok) {
          const data = await resGuests.json();
          if (data && data.length) setGuests(data);
        }
        if (resTasks && resTasks.ok) {
          const data = await resTasks.json();
          if (data && data.length) setTasks(data);
        }
        if (resBudget && resBudget.ok) {
          const data = await resBudget.json();
          if (data && data.length) setBudget(data);
        }
        if (resVendors && resVendors.ok) {
          const data = await resVendors.json();
          if (data && data.length) setVendors(data);
        }
      } catch (err) {
        console.log('Using local fallback state (backend API disconnected)');
      }
    };
    fetchData();
  }, []);

  // Guest actions
  const addGuest = (guestData) => {
    const newG = { _id: Date.now().toString(), ...guestData };
    setGuests(prev => [newG, ...prev]);
    fetch(`${API_BASE}/guests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(guestData)
    }).catch(() => {});
  };

  const updateGuest = (id, updatedData) => {
    setGuests(prev => prev.map(g => g._id === id ? { ...g, ...updatedData } : g));
    fetch(`${API_BASE}/guests/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    }).catch(() => {});
  };

  const deleteGuest = (id) => {
    setGuests(prev => prev.filter(g => g._id !== id));
    fetch(`${API_BASE}/guests/${id}`, { method: 'DELETE' }).catch(() => {});
  };

  // Task actions
  const addTask = (taskData) => {
    const newT = { _id: Date.now().toString(), completed: false, ...taskData };
    setTasks(prev => [newT, ...prev]);
    fetch(`${API_BASE}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData)
    }).catch(() => {});
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => {
      if (t._id === id) {
        const updated = { ...t, completed: !t.completed };
        fetch(`${API_BASE}/tasks/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updated)
        }).catch(() => {});
        return updated;
      }
      return t;
    }));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t._id !== id));
    fetch(`${API_BASE}/tasks/${id}`, { method: 'DELETE' }).catch(() => {});
  };

  // Budget actions
  const addBudgetItem = (itemData) => {
    const newB = { _id: Date.now().toString(), ...itemData };
    setBudget(prev => [newB, ...prev]);
    fetch(`${API_BASE}/budget`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemData)
    }).catch(() => {});
  };

  const deleteBudgetItem = (id) => {
    setBudget(prev => prev.filter(b => b._id !== id));
    fetch(`${API_BASE}/budget/${id}`, { method: 'DELETE' }).catch(() => {});
  };

  // Vendor actions
  const addVendor = (vendorData) => {
    const newV = { _id: Date.now().toString(), ...vendorData };
    setVendors(prev => [newV, ...prev]);
    fetch(`${API_BASE}/vendors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vendorData)
    }).catch(() => {});
  };

  const deleteVendor = (id) => {
    setVendors(prev => prev.filter(v => v._id !== id));
    fetch(`${API_BASE}/vendors/${id}`, { method: 'DELETE' }).catch(() => {});
  };

  return (
    <PlannerContext.Provider value={{
      eventDetails,
      setEventDetails,
      guests,
      addGuest,
      updateGuest,
      deleteGuest,
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      budget,
      addBudgetItem,
      deleteBudgetItem,
      vendors,
      addVendor,
      deleteVendor,
      activeTab,
      setActiveTab
    }}>
      {children}
    </PlannerContext.Provider>
  );
};

export const usePlanner = () => useContext(PlannerContext);
