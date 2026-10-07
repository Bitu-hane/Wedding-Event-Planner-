import React from 'react';
import { PlannerProvider, usePlanner } from './context/PlannerContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardOverview from './components/DashboardOverview';
import GuestListManager from './components/GuestListManager';
import BudgetTracker from './components/BudgetTracker';
import TaskChecklist from './components/TaskChecklist';
import VendorDirectory from './components/VendorDirectory';

function AppContent() {
  const { activeTab } = usePlanner();

  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <Hero />

        {activeTab === 'overview' && <DashboardOverview />}
        {activeTab === 'guests' && <GuestListManager />}
        {activeTab === 'budget' && <BudgetTracker />}
        {activeTab === 'tasks' && <TaskChecklist />}
        {activeTab === 'vendors' && <VendorDirectory />}
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '1.5rem',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(15, 17, 23, 0.9)'
      }}>
        Elegance Wedding Event Planner &copy; {new Date().getFullYear()} • Crafting Unforgettable Moments
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <PlannerProvider>
      <AppContent />
    </PlannerProvider>
  );
}
