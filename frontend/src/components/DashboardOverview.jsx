import React from 'react';
import { usePlanner } from '../context/PlannerContext';
import { Users, DollarSign, CheckSquare, Briefcase, ArrowRight, Heart, AlertCircle } from 'lucide-react';

export default function DashboardOverview() {
  const { guests, budget, tasks, vendors, eventDetails, setActiveTab } = usePlanner();

  const attendingCount = guests.filter(g => g.rsvpStatus === 'Attending').length;
  const pendingCount = guests.filter(g => g.rsvpStatus === 'Pending').length;
  const totalBudgetSpent = budget.reduce((acc, b) => acc + (b.actualCost || 0), 0);
  const totalPaid = budget.reduce((acc, b) => acc + (b.paidAmount || 0), 0);
  const completedTasks = tasks.filter(t => t.completed).length;

  const urgentTasks = tasks.filter(t => !t.completed).slice(0, 3);
  const bookedVendors = vendors.filter(v => v.status === 'Booked');

  return (
    <div className="animate-fade-in">
      {/* 4 Core Summary Cards */}
      <div className="grid-4" style={{ marginBottom: '2rem' }}>
        
        {/* Guest RSVP Card */}
        <div className="glass-card" style={{ cursor: 'pointer' }} onClick={() => setActiveTab('guests')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Confirmed Guests</span>
            <div style={{ background: 'rgba(42, 157, 143, 0.15)', padding: '0.5rem', borderRadius: '10px', color: '#4ade80' }}>
              <Users size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#ffffff', marginBottom: '0.2rem' }}>
            {attendingCount} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ {guests.length}</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#4ade80', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span>{pendingCount} responses pending</span>
          </div>
        </div>

        {/* Budget Summary Card */}
        <div className="glass-card" style={{ cursor: 'pointer' }} onClick={() => setActiveTab('budget')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Total Spent</span>
            <div style={{ background: 'rgba(230, 197, 148, 0.15)', padding: '0.5rem', borderRadius: '10px', color: '#e6c594' }}>
              <DollarSign size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#ffffff', marginBottom: '0.2rem' }}>
            ${totalBudgetSpent.toLocaleString()}
          </div>
          <div className="progress-bar-bg" style={{ marginTop: '0.5rem' }}>
            <div className="progress-bar-fill" style={{ width: `${Math.min(100, (totalBudgetSpent / eventDetails.budgetGoal) * 100)}%` }} />
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>Target: ${eventDetails.budgetGoal.toLocaleString()}</span>
            <span>Paid: ${totalPaid.toLocaleString()}</span>
          </div>
        </div>

        {/* Tasks Progress Card */}
        <div className="glass-card" style={{ cursor: 'pointer' }} onClick={() => setActiveTab('tasks')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Tasks Completed</span>
            <div style={{ background: 'rgba(233, 196, 106, 0.15)', padding: '0.5rem', borderRadius: '10px', color: '#facc15' }}>
              <CheckSquare size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#ffffff', marginBottom: '0.2rem' }}>
            {completedTasks} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ {tasks.length}</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            {tasks.length - completedTasks} remaining
          </div>
        </div>

        {/* Vendors Booked Card */}
        <div className="glass-card" style={{ cursor: 'pointer' }} onClick={() => setActiveTab('vendors')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Vendors Booked</span>
            <div style={{ background: 'rgba(231, 111, 81, 0.15)', padding: '0.5rem', borderRadius: '10px', color: '#f4a261' }}>
              <Briefcase size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#ffffff', marginBottom: '0.2rem' }}>
            {bookedVendors.length} <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ {vendors.length}</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Photo, Florist, Music
          </div>
        </div>

      </div>

      {/* Grid of 2 columns: Upcoming Urgent Tasks & Vendor Overview */}
      <div className="grid-2">
        {/* Next To-Do Items */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={18} color="#e6c594" />
              Priority Checklist Tasks
            </h3>
            <button className="btn btn-secondary btn-sm" onClick={() => setActiveTab('tasks')}>
              View All <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {urgentTasks.map(t => (
              <div key={t._id} style={{
                background: 'rgba(15, 17, 23, 0.6)',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.9rem' }}>{t.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Assigned: {t.assignedTo} • Due: {t.dueDate ? new Date(t.dueDate).toLocaleDateString() : 'Flexible'}
                  </div>
                </div>
                <span className={`badge ${t.priority === 'High' ? 'badge-danger' : 'badge-warning'}`}>
                  {t.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Status Summary */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={18} color="#e6c594" />
              Contracted Vendors
            </h3>
            <button className="btn btn-secondary btn-sm" onClick={() => setActiveTab('vendors')}>
              Directory <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {vendors.map(v => (
              <div key={v._id} style={{
                background: 'rgba(15, 17, 23, 0.6)',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.9rem' }}>{v.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {v.category} • {v.contactPerson}
                  </div>
                </div>
                <span className={`badge ${v.status === 'Booked' ? 'badge-success' : 'badge-warning'}`}>
                  {v.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
