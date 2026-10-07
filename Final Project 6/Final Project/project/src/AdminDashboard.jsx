import React from 'react';
import './AdminDashboard.css';
import ManageVendor from './VendorCategories.jsx'; // Your vendor categories page
import Events from './Events.jsx'; // ← New Events page

import {
  FiHome,
  FiCalendar,
  FiUsers,
  FiTruck,
  FiCheckSquare,
  FiDollarSign,
  FiBarChart2,
  FiInbox,
  FiSettings,
  FiPlus,
  FiMail,
  FiClock
} from 'react-icons/fi';
import { BsCalendar3 } from 'react-icons/bs';

const AdminDashboard = () => {
  const adminName = "Bitanya Moges";

  // State to control which section to show
  const [currentView, setCurrentView] = React.useState('dashboard'); // 'dashboard', 'vendors', 'events'

  return (
    <div className="app-container">
      <div className="main-card">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <h1 className="title">💚 EternalVows</h1>
          </div>
        </header>

        <div className="layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <nav className="sidebar-menu">
              <a
                href="#"
                className={`menu-item ${currentView === 'dashboard' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentView('dashboard');
                }}
              >
                <FiHome /> Dashboard
              </a>

              <a
                href="#"
                className={`menu-item ${currentView === 'events' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentView('events');
                }}
              >
                <FiCalendar /> Events
              </a>

              <a href="#" className="menu-item">
                <FiUsers /> Customers
              </a>

              {/* Vendors Link */}
              <a
                href="#"
                className={`menu-item ${currentView === 'vendors' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentView('vendors');
                }}
              >
                <FiTruck /> Vendors
              </a>

              <a href="#" className="menu-item">
                <FiInbox /> Inbox
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="main-content">
            {currentView === 'vendors' ? (
              <ManageVendor />
            ) : currentView === 'events' ? (
              <Events />
            ) : (
              /* Original Dashboard Content */
              <>
                <div className="welcome-section flex items-center gap-6 p-6 bg-gray-50 rounded-xl">
  <div className="text-content flex-1">
    <h2 className="welcome-title text-4xl md:text-5xl font-serif font-semibold text-gray-900 mb-6">
  Welcome back, Admin! <span className="wave">👋</span>
</h2>

    <p className="welcome-subtitle mt-3 text-lg text-gray-600 max-w-2xl">
      Take a moment to review what’s coming up. Your events are on track, vendors are aligning, 
      and each detail is coming together just as planned.
    </p>
  </div>
  <div className="image-content flex-shrink-0">
  </div>
</div>

              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;