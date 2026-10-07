import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ManageVendor.css";
import { FiPlus, FiEdit2, FiTrash2, FiLink, FiImage } from "react-icons/fi";

const ManageVendor = ({ selectedType = null }) => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    type: selectedType || "",
    shortDescription: "",
    description: "",
    link: "",
    price: "",
    guests: "",
    image: "", // Only one image now
  });

  const API_URL = "http://localhost:5002/api/vendors";

  useEffect(() => {
    fetchVendors();
  }, [selectedType]);

  const fetchVendors = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      let filtered = res.data;
      if (selectedType) {
        filtered = filtered.filter((v) => v.type === selectedType);
      }
      setVendors(filtered);
    } catch (err) {
      alert("Error loading vendors");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const resizeImage = (file, maxWidth = 800, maxHeight = 800) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            let { width, height } = img;
            if (width > maxWidth || height > maxHeight) {
              const ratio = Math.min(maxWidth / width, maxHeight / height);
              width *= ratio;
              height *= ratio;
            }
            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL("image/jpeg", 0.8)); // compress
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      });
    };

    resizeImage(file).then((resizedImage) => {
      setFormData((prev) => ({ ...prev, image: resizedImage }));
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.price || !formData.description || !formData.image) {
    alert("Please fill all required fields and upload one image");
    return;
  }

  const dataToSend = {
    ...formData,
    type: selectedType || formData.type,
    images: [formData.image], // ✅ wrap image in array
  };

  try {
    if (editingId) {
      await axios.put(`${API_URL}/${editingId}`, dataToSend);
    } else {
      await axios.post(API_URL, dataToSend);
    }

    setFormData({
      name: "",
      type: selectedType || "",
      shortDescription: "",
      description: "",
      link: "",
      price: "",
      guests: "",
      image: "",
    });
    setEditingId(null);
    setShowForm(false);

    fetchVendors();
  } catch (err) {
    console.error("Save vendor error:", err.response?.data || err.message);
    alert("Failed to save vendor");
  }
};

  const handleEdit = (vendor) => {
    setFormData({
      ...vendor,
      image: vendor.image || "",
    });
    setEditingId(vendor._id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      name: "",
      type: selectedType || "",
      shortDescription: "",
      description: "",
      link: "",
      price: "",
      guests: "",
      image: "",
    });
  };

  const openDeleteModal = (id) => setDeleteId(id);
  const closeDeleteModal = () => setDeleteId(null);
  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      await axios.delete(`${API_URL}/${deleteId}`);
      fetchVendors();
      closeDeleteModal();
    } catch (err) {
      alert("Error deleting vendor");
    }
  };

  const pageTitle = selectedType ? `${selectedType} Vendors` : "All Vendors Management";

  return (
    <div className="vendors-app">
      <div className="vendors-container">
        <div className="vendors-header">
          <h1 className="vendors-title">{pageTitle}</h1>
          <button className="add-vendor-btn" onClick={() => setShowForm(true)}>
            <FiPlus size={20} /> Add {selectedType || "Vendor"}
          </button>
        </div>

        {showForm && (
          <div className="vendor-form-card">
            <div className="form-header">
              <h2>{editingId ? "Edit Vendor" : `Add New ${selectedType || "Vendor"}`}</h2>
              <button className="cancel-btn" onClick={handleCancel}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Vendor Name" value={formData.name} onChange={handleChange} required />

              {!selectedType && (
                <select name="type" value={formData.type} onChange={handleChange} required>
                  <option value="">Select Type</option>
                  <option>Hotels/Halls</option>
                  <option>Foods/Catering/Cake</option>
                  <option>Makeup/Spa</option>
                  <option>Car Rental</option>
                  <option>Decoration</option>
                  <option>Photographer/DJ</option>
                </select>
              )}

              {selectedType && (
                <div className="readonly-type">
                  <strong>Type:</strong> {selectedType}
                </div>
              )}

              {(formData.type === "Hotels/Halls" || selectedType === "Hotels/Halls") && (
                <input name="guests" type="number" placeholder="Max Guests" value={formData.guests} onChange={handleChange} />
              )}

              <input name="price" type="number" placeholder="Price (ETB)" value={formData.price} onChange={handleChange} required />
              <input name="shortDescription" placeholder="Short promotional description..." value={formData.shortDescription} onChange={handleChange} maxLength={120} />
              <textarea name="description" placeholder="Detailed description..." value={formData.description} onChange={handleChange} rows={5} required />
              <input name="link" placeholder="Website/Link (optional)" value={formData.link} onChange={handleChange} />

              <div className="image-upload-section">
                <label>Upload Image</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </div>

              {formData.image && (
                <div className="image-preview-grid">
                  <img src={formData.image} alt="preview" className="preview-img" />
                </div>
              )}

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  {editingId ? "Update Vendor" : "Add Vendor"}
                </button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <h2 className="list-title">Vendors ({vendors.length})</h2>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : vendors.length === 0 ? (
          <p className="empty">No vendors in this category yet.</p>
        ) : (
          <div className="vendors-grid">
            {vendors.map((vendor) => (
              <div key={vendor._id} className="vendor-card">
              {vendor.images && vendor.images.length > 0 ? (
  <img
    src={vendor.images[0]}
    alt={vendor.name}
    className="vendor-main-img"
  />
) : (
  <div className="no-image">
    <FiImage size={60} />
    <span>No Image</span>
  </div>
)}

                <div className="vendor-details">
                  <h3>{vendor.name}</h3>
                  <p><strong>Type:</strong> {vendor.type}</p>
                  <p><strong>Price:</strong> ETB {vendor.price}</p>
                  {vendor.guests && <p><strong>Guests:</strong> {vendor.guests}</p>}
                  <p className="desc-preview">{vendor.shortDescription || vendor.description.substring(0, 120)}...</p>
                  {vendor.link && (
                    <a href={vendor.link} target="_blank" rel="noopener noreferrer" className="link">
                      <FiLink /> Website
                    </a>
                  )}
                </div>
                <div className="vendor-actions">
                  <button onClick={() => handleEdit(vendor)} className="edit">
                    <FiEdit2 />
                  </button>
                  <button onClick={() => openDeleteModal(vendor._id)} className="delete">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {deleteId && (
          <div className="modal-overlay">
            <div className="delete-modal">
              <h3>Confirm Delete</h3>
              <p>Are you sure you want to delete this vendor?</p>
              <div className="modal-actions">
                <button onClick={confirmDelete} className="confirm-delete-btn">
                  Yes, Delete
                </button>
                <button onClick={closeDeleteModal} className="cancel-delete-btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageVendor;