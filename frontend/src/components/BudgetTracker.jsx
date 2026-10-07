import React, { useState } from 'react';
import { usePlanner } from '../context/PlannerContext';
import { Plus, Trash2, DollarSign, PieChart, CheckCircle2, Clock } from 'lucide-react';

export default function BudgetTracker() {
  const { budget, addBudgetItem, deleteBudgetItem, eventDetails } = usePlanner();
  const [showModal, setShowModal] = useState(false);

  const [newItem, setNewItem] = useState({
    category: 'Venue & Estate',
    item: '',
    estimatedCost: 0,
    actualCost: 0,
    paidAmount: 0,
    status: 'Pending'
  });

  const totalEstimated = budget.reduce((acc, b) => acc + (b.estimatedCost || 0), 0);
  const totalActual = budget.reduce((acc, b) => acc + (b.actualCost || 0), 0);
  const totalPaid = budget.reduce((acc, b) => acc + (b.paidAmount || 0), 0);
  const remainingTarget = eventDetails.budgetGoal - totalActual;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.item) return;
    addBudgetItem(newItem);
    setNewItem({ category: 'Venue & Estate', item: '', estimatedCost: 0, actualCost: 0, paidAmount: 0, status: 'Pending' });
    setShowModal(false);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.25rem' }}>Wedding Budget & Expense Tracker</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Keep track of estimated quotes, actual costs, and payments to vendors.
          </p>
        </div>

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <Plus size={18} /> Add Expense Item
        </button>
      </div>

      {/* 3 Overview Financial Cards */}
      <div className="grid-3" style={{ marginBottom: '2rem' }}>
        <div className="glass-card">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Budget Goal</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#ffffff', margin: '0.3rem 0' }}>
            ${eventDetails.budgetGoal.toLocaleString()}
          </div>
          <div style={{ fontSize: '0.8rem', color: remainingTarget >= 0 ? '#4ade80' : '#f87171' }}>
            {remainingTarget >= 0 ? `$${remainingTarget.toLocaleString()} remaining` : `$${Math.abs(remainingTarget).toLocaleString()} over budget goal`}
          </div>
        </div>

        <div className="glass-card">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Total Committed Costs</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#e6c594', margin: '0.3rem 0' }}>
            ${totalActual.toLocaleString()}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Est. Total: ${totalEstimated.toLocaleString()}
          </div>
        </div>

        <div className="glass-card">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Total Amount Paid</span>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#4ade80', margin: '0.3rem 0' }}>
            ${totalPaid.toLocaleString()}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Remaining to pay: ${(totalActual - totalPaid).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Expenses Table */}
      <div className="custom-table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Expense / Item Description</th>
              <th>Estimated ($)</th>
              <th>Actual Cost ($)</th>
              <th>Amount Paid ($)</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {budget.map((b) => (
              <tr key={b._id}>
                <td>
                  <span style={{ background: 'rgba(230, 197, 148, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '6px', color: '#e6c594', fontSize: '0.8rem', fontWeight: 600 }}>
                    {b.category}
                  </span>
                </td>
                <td style={{ fontWeight: 600, color: '#ffffff' }}>{b.item}</td>
                <td>${(b.estimatedCost || 0).toLocaleString()}</td>
                <td style={{ color: '#e6c594', fontWeight: 600 }}>${(b.actualCost || 0).toLocaleString()}</td>
                <td style={{ color: '#4ade80' }}>${(b.paidAmount || 0).toLocaleString()}</td>
                <td>
                  <span className={`badge ${
                    b.status === 'Paid' ? 'badge-success' : b.status === 'Partial' ? 'badge-warning' : 'badge-danger'
                  }`}>
                    {b.status}
                  </span>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteBudgetItem(b._id)}>
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal to Add Expense */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.5rem' }}>Add Budget Item</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Category</label>
                <select className="form-control" value={newItem.category} onChange={e => setNewItem({ ...newItem, category: e.target.value })}>
                  <option value="Venue & Estate">Venue & Estate</option>
                  <option value="Catering & Bar">Catering & Bar</option>
                  <option value="Photography & Film">Photography & Film</option>
                  <option value="Floral & Decor">Floral & Decor</option>
                  <option value="Attire & Rings">Attire & Rings</option>
                  <option value="Music & Entertainment">Music & Entertainment</option>
                  <option value="Stationery & Favors">Stationery & Favors</option>
                </select>
              </div>

              <div className="form-group">
                <label>Item Description *</label>
                <input className="form-control" type="text" required placeholder="e.g. Wedding Cake & Dessert Station" value={newItem.item} onChange={e => setNewItem({ ...newItem, item: e.target.value })} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Estimated Cost ($)</label>
                  <input className="form-control" type="number" value={newItem.estimatedCost} onChange={e => setNewItem({ ...newItem, estimatedCost: Number(e.target.value) })} />
                </div>
                <div className="form-group">
                  <label>Actual Cost ($)</label>
                  <input className="form-control" type="number" value={newItem.actualCost} onChange={e => setNewItem({ ...newItem, actualCost: Number(e.target.value) })} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Paid Amount ($)</label>
                  <input className="form-control" type="number" value={newItem.paidAmount} onChange={e => setNewItem({ ...newItem, paidAmount: Number(e.target.value) })} />
                </div>

                <div className="form-group">
                  <label>Payment Status</label>
                  <select className="form-control" value={newItem.status} onChange={e => setNewItem({ ...newItem, status: e.target.value })}>
                    <option value="Pending">Pending</option>
                    <option value="Partial">Partial</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
