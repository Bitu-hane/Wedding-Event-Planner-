import React, { useState } from "react";
import axios from "axios";
import "./Events.css";

const EventDetails = ({ event, goBack }) => {
  // Initialize vendor statuses
  const [vendorStatuses, setVendorStatuses] = useState(
    event.vendorList.reduce((acc, v) => {
      acc[v.vendorName] = v.status;
      return acc;
    }, {})
  );

  const [saving, setSaving] = useState(false);

  const handleStatusClick = (vendorName, status) => {
    setVendorStatuses((prev) => ({ ...prev, [vendorName]: status }));
  };

  const saveChanges = async () => {
    try {
      setSaving(true);
      const updates = event.vendorList.map((v) => ({
        vendorId: v.vendorId,
        status: vendorStatuses[v.vendorName],
      }));

      await axios.patch(`http://localhost:5002/api/bookings/${event._id}/update-vendors`, { updates });

      alert("Vendor statuses updated successfully!");
    } catch (err) {
      console.error("Failed to save changes:", err);
      alert("Error saving changes");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="event-details-page">
      <button className="back-btn" onClick={goBack}>
        ← Back
      </button>

      <h1>Event Details</h1>

      {/* Event Info */}
      <table className="details-table">
        <tbody>
          <tr>
            <td><strong>Event Type</strong></td>
            <td>{event.eventType}</td>
          </tr>
          <tr>
            <td><strong>Event Date</strong></td>
            <td>{new Date(event.eventDate).toLocaleDateString("en-GB")}</td>
          </tr>
          <tr>
            <td><strong>Client Name</strong></td>
            <td>{event.partnerName}</td>
          </tr>
          <tr>
            <td><strong>Phone</strong></td>
            <td>{event.phone}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>{event.email}</td>
          </tr>
        </tbody>
      </table>

      {/* Vendor Table */}
      <h2>Vendors</h2>
      <table className="vendor-table">
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Pending</th>
            <th>Approved</th>
            <th>In Progress</th>
            <th>Declined</th>
          </tr>
        </thead>
        <tbody>
          {event.vendorList.map((vendor) => (
            <tr key={vendor.vendorId}>
              <td>{vendor.vendorName}</td>
              {["Pending", "Approved", "In Progress", "Declined"].map((status) => (
                <td key={status}>
                  <button
                    className={`status-btn ${vendorStatuses[vendor.vendorName] === status ? "active" : ""}`}
                    onClick={() => handleStatusClick(vendor.vendorName, status)}
                  >
                    {status}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button className="save-btn" onClick={saveChanges} disabled={saving}>
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default EventDetails;