import React from 'react';
import { usePlanner } from '../context/PlannerContext';
import { Heart, Users, DollarSign, CheckSquare, Briefcase, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const { activeTab, setActiveTab, guests, tasks, budget, vendors, eventDetails } = usePlanner();

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'guests', label: 'Guest List', icon: Users, badge: guests.length },
    { id: 'budget', label: 'Budget Tracker', icon: DollarSign, badge: `$${budget.reduce((acc, b) => acc + (b.actualCost || 0), 0).toLocaleString()}` },
    { id: 'tasks', label: 'Checklist', icon: CheckSquare, badge: `${tasks.filter(t => t.completed).length}/${tasks.length}` },
    { id: 'vendors', label: 'Vendors', icon: Briefcase, badge: vendors.length }
  ];

  return (
    <nav style={{
      background: 'rgba(15, 17, 23, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 215, 0, 0.12)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0.8rem 1.5rem'
    }}>
      <div style={{
        maxWidth: '1320px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #e6c594, #e76f51)',
            padding: '0.5rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(230, 197, 148, 0.4)'
          }}>
            <Heart size={22} color="#0f1117" fill="#0f1117" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', color: '#f8f9fa', margin: 0, lineHeight: 1.2 }}>
              {eventDetails.coupleNames}
            </h1>
            <span style={{ fontSize: '0.75rem', color: '#e6c594', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Wedding Planner
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.2rem' }}>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1rem',
                  borderRadius: '10px',
                  border: isActive ? '1px solid rgba(230, 197, 148, 0.4)' : '1px solid transparent',
                  background: isActive ? 'rgba(230, 197, 148, 0.12)' : 'transparent',
                  color: isActive ? '#e6c594' : '#a0aab8',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {item.badge && (
                  <span style={{
                    fontSize: '0.7rem',
                    background: isActive ? 'rgba(230, 197, 148, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '999px',
                    color: isActive ? '#f8f9fa' : '#8c95a6'
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
