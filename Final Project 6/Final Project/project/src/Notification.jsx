import React from "react";
import "./Notification.css";

const Notification = ({ message, type = "success", onClose }) => {
  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Notification;