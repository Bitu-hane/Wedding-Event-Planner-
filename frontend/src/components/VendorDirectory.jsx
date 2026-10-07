import React, { useState } from 'react';
import { usePlanner } from '../context/PlannerContext';
import { Plus, Phone, Mail, User, Briefcase, Trash2, DollarSign } from 'lucide-react';

export default function VendorDirectory() {
  const { vendors, addVendor, deleteVendor } = usePlanner();
  const [showModal, setShowModal] = useState(false);

  const [newVendor, setNewVendor] = useState({
    name: '',
    category: 'Photography',
    contactPerson: '',
    phone: '',
    email: '',
    estimatedPrice: 0,
    status: 'Researching',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newVendor.name) return;
    addVendor(newVendor);
    setNewVendor({ name: '', category: 'Photography', contactPerson: '', phone: '', email: '', estimatedPrice: 0, status: 'Researching', notes: '' });
    setShowModal(false);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.25rem' }}>Vendor Directory & Contracts</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Store contact info, pricing proposals, and contract statuses for wedding vendors.
          </p>
        </div>

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <Plus size={18} /> Add New Vendor
        </button>
      </div>

      <div className="grid-3">
        {vendors.map(vendor => (
          <div key={vendor._id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ background: 'rgba(230, 197, 148, 0.1)', color: '#e6c594', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600 }}>
                  {vendor.category}
                </span>
                <span className={`badge ${
                  vendor.status === 'Booked' ? 'badge-success' : vendor.status === 'In Talks' ? 'badge-warning' : 'badge-danger'
                }`}>
                  {vendor.status}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                {vendor.name}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {vendor.contactPerson && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <User size={14} color="var(--text-muted)" /> {vendor.contactPerson}
                  </div>
                )}
                {vendor.phone && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Phone size={14} color="var(--text-muted)" /> {vendor.phone}
                  </div>
                )}
                {vendor.email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Mail size={14} color="var(--text-muted)" /> {vendor.email}
                  </div>
                )}
              </div>

              {vendor.notes && (
                <div style={{ background: 'rgba(15, 17, 23, 0.5)', padding: '0.65rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  "{vendor.notes}"
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e6c594' }}>
                ${(vendor.estimatedPrice || 0).toLocaleString()}
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => deleteVendor(vendor._id)}>
                <Trash2 size={14} /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Vendor Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.5rem' }}>Add New Vendor</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Company / Studio Name *</label>
                <input className="form-control" type="text" required value={newVendor.name} onChange={e => setNewVendor({ ...newVendor, name: e.target.value })} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-control" value={newVendor.category} onChange={e => setNewVendor({ ...newVendor, category: e.target.value })}>
                    <option value="Photography">Photography</option>
                    <option value="Videography">Videography</option>
                    <option value="Florist">Florist</option>
                    <option value="Catering">Catering</option>
                    <option value="Music & DJ">Music & DJ</option>
                    <option value="Makeup & Hair">Makeup & Hair</option>
                    <option value="Bakery & Cake">Bakery & Cake</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Booking Status</label>
                  <select className="form-control" value={newVendor.status} onChange={e => setNewVendor({ ...newVendor, status: e.target.value })}>
                    <option value="Booked">Booked</option>
                    <option value="In Talks">In Talks</option>
                    <option value="Researching">Researching</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Contact Person</label>
                  <input className="form-control" type="text" value={newVendor.contactPerson} onChange={e => setNewVendor({ ...newVendor, contactPerson: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input className="form-control" type="text" value={newVendor.phone} onChange={e => setNewVendor({ ...newVendor, phone: e.target.value })} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input className="form-control" type="email" value={newVendor.email} onChange={e => setNewVendor({ ...newVendor, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Price Quote ($)</label>
                  <input className="form-control" type="number" value={newVendor.estimatedPrice} onChange={e => setNewVendor({ ...newVendor, estimatedPrice: Number(e.target.value) })} />
                </div>
              </div>

              <div className="form-group">
                <label>Notes / Package Details</label>
                <textarea className="form-control" rows="2" value={newVendor.notes} onChange={e => setNewVendor({ ...newVendor, notes: e.target.value })} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Vendor</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
