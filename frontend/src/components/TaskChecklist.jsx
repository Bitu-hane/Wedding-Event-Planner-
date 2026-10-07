import React, { useState } from 'react';
import { usePlanner } from '../context/PlannerContext';
import { Plus, CheckSquare, Square, Trash2, Calendar, User, Filter } from 'lucide-react';

export default function TaskChecklist() {
  const { tasks, addTask, toggleTask, deleteTask } = usePlanner();
  const [filterCategory, setFilterCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);

  const [newTask, setNewTask] = useState({
    title: '',
    category: 'Venue',
    dueDate: '',
    priority: 'Medium',
    assignedTo: 'Sarah & Alexander'
  });

  const categories = ['All', 'Venue', 'Catering', 'Stationery', 'Music', 'Decor', 'Attire'];

  const filteredTasks = tasks.filter(t => filterCategory === 'All' || t.category === filterCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.title) return;
    addTask(newTask);
    setNewTask({ title: '', category: 'Venue', dueDate: '', priority: 'Medium', assignedTo: 'Sarah & Alexander' });
    setShowModal(false);
  };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.25rem' }}>Wedding Task Checklist</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Stay organized with milestone deadlines and team responsibilities.
          </p>
        </div>

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <Plus size={18} /> Add New Task
        </button>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '8px',
              border: filterCategory === cat ? '1px solid #e6c594' : '1px solid var(--border-subtle)',
              background: filterCategory === cat ? 'rgba(230, 197, 148, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: filterCategory === cat ? '#e6c594' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Checklist Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {filteredTasks.map(task => (
          <div key={task._id} className="glass-card" style={{
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            opacity: task.completed ? 0.65 : 1,
            transition: 'all 0.2s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => toggleTask(task._id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: task.completed ? '#4ade80' : 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {task.completed ? <CheckSquare size={22} color="#4ade80" /> : <Square size={22} />}
              </button>

              <div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: task.completed ? 'var(--text-muted)' : '#ffffff',
                  textDecoration: task.completed ? 'line-through' : 'none'
                }}>
                  {task.title}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: '#e6c594', fontWeight: 600 }}>{task.category}</span>
                  {task.dueDate && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={12} /> {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                  )}
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <User size={12} /> {task.assignedTo}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className={`badge ${
                task.priority === 'High' ? 'badge-danger' : task.priority === 'Medium' ? 'badge-warning' : 'badge-success'
              }`}>
                {task.priority}
              </span>

              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task._id)}>
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.5rem' }}>Add Checklist Task</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Task Title *</label>
                <input className="form-control" type="text" required placeholder="e.g. Schedule Dress Fitting" value={newTask.title} onChange={e => setNewTask({ ...newTask, title: e.target.value })} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-control" value={newTask.category} onChange={e => setNewTask({ ...newTask, category: e.target.value })}>
                    <option value="Venue">Venue</option>
                    <option value="Catering">Catering</option>
                    <option value="Stationery">Stationery</option>
                    <option value="Music">Music</option>
                    <option value="Decor">Decor</option>
                    <option value="Attire">Attire</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Priority</label>
                  <select className="form-control" value={newTask.priority} onChange={e => setNewTask({ ...newTask, priority: e.target.value })}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Due Date</label>
                  <input className="form-control" type="date" value={newTask.dueDate} onChange={e => setNewTask({ ...newTask, dueDate: e.target.value })} />
                </div>

                <div className="form-group">
                  <label>Assigned Person</label>
                  <input className="form-control" type="text" value={newTask.assignedTo} onChange={e => setNewTask({ ...newTask, assignedTo: e.target.value })} />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
