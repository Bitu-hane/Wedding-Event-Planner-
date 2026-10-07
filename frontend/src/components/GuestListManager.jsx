import React, { useState } from 'react';
import { usePlanner } from '../context/PlannerContext';
import { Plus, Search, Trash2, Edit2, Users, Check, X, Filter } from 'lucide-react';

export default function GuestListManager() {
  const { guests, addGuest, updateGuest, deleteGuest } = usePlanner();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [editingGuest, setEditingGuest] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rsvpStatus: 'Pending',
    mealPreference: 'Standard',
    plusOne: false,
    plusOneName: '',
    tableNumber: 1,
    dietaryRestrictions: ''
  });

  const handleOpenAddModal = () => {
    setEditingGuest(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      rsvpStatus: 'Pending',
      mealPreference: 'Standard',
      plusOne: false,
      plusOneName: '',
      tableNumber: 1,
      dietaryRestrictions: ''
    });
    setShowModal(true);
  };

  const handleOpenEditModal = (guest) => {
    setEditingGuest(guest);
    setFormData({
      name: guest.name,
      email: guest.email,
      phone: guest.phone || '',
      rsvpStatus: guest.rsvpStatus,
      mealPreference: guest.mealPreference || 'Standard',
      plusOne: guest.plusOne || false,
      plusOneName: guest.plusOneName || '',
      tableNumber: guest.tableNumber || 1,
      dietaryRestrictions: guest.dietaryRestrictions || ''
    });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    if (editingGuest) {
      updateGuest(editingGuest._id, formData);
    } else {
      addGuest(formData);
    }
    setShowModal(false);
  };

  const filteredGuests = guests.filter(g => {
    const matchesSearch = g.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          g.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = statusFilter === 'All' || g.rsvpStatus === statusFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="animate-fade-in">
      {/* Header & Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.25rem' }}>Guest List & RSVP Management</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Manage attendance, table assignments, and meal selections for your guests.
          </p>
        </div>

        <button className="btn btn-primary" onClick={handleOpenAddModal}>
          <Plus size={18} /> Add New Guest
        </button>
      </div>

      {/* Search & Filters Bar */}
      <div className="glass-card" style={{ marginBottom: '1.5rem', padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(15, 17, 23, 0.6)', padding: '0.5rem 0.9rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', flex: 1, minWidth: '240px' }}>
            <Search size={16} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search guest by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: '#ffffff', outline: 'none', width: '100%', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Filter size={16} color="#e6c594" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Status:</span>
            {['All', 'Attending', 'Pending', 'Declined'].map(status => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  border: statusFilter === status ? '1px solid #e6c594' : '1px solid transparent',
                  background: statusFilter === status ? 'rgba(230, 197, 148, 0.15)' : 'transparent',
                  color: statusFilter === status ? '#e6c594' : 'var(--text-secondary)',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {status}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Guest Table */}
      <div className="custom-table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>RSVP Status</th>
              <th>Meal Preference</th>
              <th>Plus One</th>
              <th>Table</th>
              <th>Dietary Notes</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredGuests.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                  No guests found matching your criteria.
                </td>
              </tr>
            ) : (
              filteredGuests.map(g => (
                <tr key={g._id}>
                  <td style={{ fontWeight: 600, color: '#ffffff' }}>
                    {g.name}
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>{g.email}</div>
                  </td>
                  <td>
                    <span className={`badge ${
                      g.rsvpStatus === 'Attending' ? 'badge-success' : g.rsvpStatus === 'Declined' ? 'badge-danger' : 'badge-warning'
                    }`}>
                      {g.rsvpStatus}
                    </span>
                  </td>
                  <td>{g.mealPreference || 'Standard'}</td>
                  <td>
                    {g.plusOne ? (
                      <span style={{ color: '#4ade80', fontSize: '0.85rem' }}>Yes ({g.plusOneName || 'Guest'})</span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No</span>
                    )}
                  </td>
                  <td>
                    <span style={{ background: 'rgba(230, 197, 148, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '6px', color: '#e6c594', fontSize: '0.85rem', fontWeight: 600 }}>
                      Table {g.tableNumber || '-'}
                    </span>
                  </td>
                  <td>{g.dietaryRestrictions || '-'}</td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                      <button className="btn btn-secondary btn-sm" onClick={() => handleOpenEditModal(g)}>
                        <Edit2 size={14} />
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteGuest(g._id)}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Guest Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>
                {editingGuest ? 'Edit Guest Details' : 'Add New Guest'}
              </h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input className="form-control" type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input className="form-control" type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>RSVP Status</label>
                  <select className="form-control" value={formData.rsvpStatus} onChange={e => setFormData({ ...formData, rsvpStatus: e.target.value })}>
                    <option value="Attending">Attending</option>
                    <option value="Pending">Pending</option>
                    <option value="Declined">Declined</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Table Number</label>
                  <input className="form-control" type="number" value={formData.tableNumber} onChange={e => setFormData({ ...formData, tableNumber: Number(e.target.value) })} />
                </div>
              </div>

              <div className="form-group">
                <label>Meal Preference</label>
                <input className="form-control" type="text" placeholder="e.g., Prime Rib, Vegetarian, Salmon" value={formData.mealPreference} onChange={e => setFormData({ ...formData, mealPreference: e.target.value })} />
              </div>

              <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem', margin: '1rem 0' }}>
                <input type="checkbox" id="plusOne" checked={formData.plusOne} onChange={e => setFormData({ ...formData, plusOne: e.target.checked })} />
                <label htmlFor="plusOne" style={{ margin: 0, cursor: 'pointer' }}>Brings a Plus-One Guest?</label>
              </div>

              {formData.plusOne && (
                <div className="form-group">
                  <label>Plus-One Full Name</label>
                  <input className="form-control" type="text" value={formData.plusOneName} onChange={e => setFormData({ ...formData, plusOneName: e.target.value })} />
                </div>
              )}

              <div className="form-group">
                <label>Dietary Restrictions / Allergies</label>
                <input className="form-control" type="text" placeholder="e.g. Gluten-Free, Vegan, Peanut Allergy" value={formData.dietaryRestrictions} onChange={e => setFormData({ ...formData, dietaryRestrictions: e.target.value })} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">{editingGuest ? 'Save Changes' : 'Add Guest'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
