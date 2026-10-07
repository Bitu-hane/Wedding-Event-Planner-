// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Events.css";
// import { FiCalendar, FiClock, FiPhone, FiMail, FiMessageSquare, FiCheckCircle, FiEye } from "react-icons/fi";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Mock data for now — later connect to backend
//   useEffect(() => {
//     // Simulate fetching from backend
//     const mockEvents = [
//       {
//         id: 1,
//         clientName: "Emma & Liam",
//         type: "Wedding",
//         date: "2025-08-20",
//         submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
//         status: "Pending",
//         guests: 300,
//         selectedVendors: ["Grand Palace Hall", "Delight Catering"],
//         requirements: "Outdoor setup, floral arch, live band",
//       },
//       {
//         id: 2,
//         clientName: "Sophia & Noah",
//         type: "Engagement",
//         date: "2025-09-05",
//         submittedAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
//         status: "Pending",
//         guests: 80,
//         selectedVendors: ["Rooftop Venue", "Photo Booth"],
//         requirements: "Romantic lighting, champagne tower",
//       },
//       {
//         id: 3,
//         clientName: "Daniel & Ella",
//         type: "Anniversary",
//         date: "2025-10-02",
//         submittedAt: new Date(Date.now() - 48 * 60 * 60 * 1000), // 2 days ago
//         status: "Confirmed",
//         guests: 150,
//         selectedVendors: ["Grand Palace Hall", "DJ Melaku"],
//         requirements: "10th anniversary theme, photo slideshow",
//       },
//       {
//         id: 4,
//         clientName: "Olivia",
//         type: "Bridal Shower",
//         date: "2025-09-15",
//         submittedAt: new Date(Date.now() - 72 * 60 * 60 * 1000), // 3 days ago
//         status: "Confirmed",
//         guests: 40,
//         selectedVendors: ["Spa Bliss", "Cake by Selam"],
//         requirements: "Floral theme, games, brunch",
//       },
//     ];

//     setEvents(mockEvents);
//     setLoading(false);
//   }, []);

//   const isNew = (submittedAt) => {
//     const hoursDiff = (Date.now() - new Date(submittedAt)) / (1000 * 60 * 60);
//     return hoursDiff <= 12;
//   };

//   const getTypeColor = (type) => {
//     switch (type) {
//       case "Wedding": return "#ec4899";
//       case "Engagement": return "#a855f7";
//       case "Bridal Shower": return "#f59e0b";
//       case "Anniversary": return "#06b6d4";
//       default: return "#34d399";
//     }
//   };

//   return (
//     <div className="events-app">
//       <div className="events-container">
//         <div className="events-header">
//           <h1 className="events-title">Events & Bookings</h1>
//           <div className="header-stats">
//             <span className="stat">
//               <FiCalendar /> {events.length} Total
//             </span>
//             <span className="stat new">
//               <FiClock /> {events.filter(e => isNew(e.submittedAt)).length} New (last 12 hrs)
//             </span>
//           </div>
//         </div>

//         {loading ? (
//           <p className="loading">Loading events...</p>
//         ) : events.length === 0 ? (
//           <p className="empty">No events yet.</p>
//         ) : (
//           <div className="events-grid">
//             {events.map((event) => (
//               <div key={event.id} className="event-card">
//                 {isNew(event.submittedAt) && <span className="new-badge">NEW</span>}
//                 <span className="event-type-badge" style={{ backgroundColor: getTypeColor(event.type) }}>
//                   {event.type}
//                 </span>

//                 <div className="event-header">
//                   <h3>{event.clientName}</h3>
//                   <p className="event-date">
//                     <FiCalendar /> {new Date(event.date).toLocaleDateString('en-GB')}
//                   </p>
//                 </div>

//                 <div className="event-details">
//                   <p><strong>Guests:</strong> {event.guests}</p>
//                   <p><strong>Status:</strong> 
//                     <span className={`status ${event.status.toLowerCase()}`}>
//                       {event.status}
//                     </span>
//                   </p>
//                   <p><strong>Vendors:</strong> {event.selectedVendors.join(", ")}</p>
//                   <p className="requirements"><strong>Requirements:</strong> {event.requirements}</p>
//                 </div>

//                 <div className="event-actions">
//                   <button className="action-btn view">
//                     <FiEye /> View Details
//                   </button>
//                   <div className="response-group">
//                     <button className="action-btn call"><FiPhone /> Call</button>
//                     <button className="action-btn text"><FiMessageSquare /> Text</button>
//                     <button className="action-btn email"><FiMail /> Email</button>
//                   </div>
//                   {event.status === "Pending" && (
//                     <button className="action-btn confirm">
//                       <FiCheckCircle /> Confirm
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Events;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Events.css";

// const EventDetails = ({ event, goBack }) => {
//   const [status, setStatus] = useState(event.status || "Pending");
//   const [updating, setUpdating] = useState(false);

//   const updateStatus = async (newStatus) => {
//     try {
//       setUpdating(true);
//       const res = await axios.patch(
//         `http://localhost:5002/api/bookings/${event._id}/status`,
//         { status: newStatus }
//       );
//       setStatus(res.data.status);
//     } catch (err) {
//       console.error("Status update failed:", err);
//     } finally {
//       setUpdating(false);
//     }
//   };

//   return (
//     <div className="events-card">
//       <button className="details-btn" onClick={goBack}>
//         ← Back
//       </button>

//       <h2>Event Details</h2>
//       <table className="events-table">
//         <tbody>
//           <tr>
//             <td><strong>Event Type</strong></td>
//             <td>{event.eventType}</td>
//           </tr>
//           <tr>
//             <td><strong>Event Date</strong></td>
//             <td>{new Date(event.eventDate).toLocaleDateString("en-GB")}</td>
//           </tr>
//           <tr>
//             <td><strong>Client Name</strong></td>
//             <td>{event.partnerName}</td>
//           </tr>
//           <tr>
//             <td><strong>Phone</strong></td>
//             <td>{event.phone}</td>
//           </tr>
//           <tr>
//             <td><strong>Email</strong></td>
//             <td>{event.email || "N/A"}</td>
//           </tr>
//         </tbody>
//       </table>

//       <h3>Vendor Booking</h3>
//       <table className="events-table">
//         <thead>
//           <tr>
//             <th>Vendor</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{event.vendorName}</td>
//             <td>
//               <select
//                 value={status}
//                 disabled={updating}
//                 onChange={(e) => updateStatus(e.target.value)}
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="Approved">Approved</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Declined">Declined</option>
//               </select>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await axios.get("http://localhost:5002/api/bookings");
//         setEvents(res.data);
//       } catch (err) {
//         console.error("Error fetching events:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const getTypeColor = (type) => {
//     switch (type) {
//       case "Wedding": return "#ec4899";
//       case "Engagement": return "#a855f7";
//       case "Bridal Shower": return "#f59e0b";
//       case "Anniversary": return "#06b6d4";
//       default: return "#34d399";
//     }
//   };

//   return (
//     <div className="events-page">
//       {selectedEvent ? (
//         <EventDetails
//           event={selectedEvent}
//           goBack={() => setSelectedEvent(null)}
//         />
//       ) : (
//         <>
//           <h1 className="events-title">Manage Events</h1>
//           {loading ? (
//             <p className="loading">Loading events...</p>
//           ) : events.length === 0 ? (
//             <p className="empty">No events yet.</p>
//           ) : (
//             <div className="events-card">
//               <table className="events-table">
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>Event Type</th>
//                     <th>Date</th>
//                     <th>Client Name</th>
//                     <th>Phone</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {events.map((event, index) => (
//                     <tr key={event._id}>
//                       <td>{index + 1}</td>
//                       <td>
//                         <span
//                           className="event-type-badge"
//                           style={{ backgroundColor: getTypeColor(event.eventType) }}
//                         >
//                           {event.eventType}
//                         </span>
//                       </td>
//                       <td>{new Date(event.eventDate).toLocaleDateString("en-GB")}</td>
//                       <td>{event.partnerName}</td>
//                       <td>{event.phone || "N/A"}</td>
//                       <td>
//                         <button
//                           className="details-btn"
//                           onClick={() => setSelectedEvent(event)}
//                         >
//                           View Details
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Events;








import React, { useState, useEffect } from "react";
import axios from "axios";
import EventDetails from "./EventDetails";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5002/api/bookings");
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case "Wedding": return "#ec4899";
      case "Engagement": return "#a855f7";
      case "Bridal Shower": return "#f59e0b";
      case "Anniversary": return "#06b6d4";
      default: return "#34d399";
    }
  };

  return (
    <div className="events-page">
      {selectedEvent ? (
        <EventDetails event={selectedEvent} goBack={() => setSelectedEvent(null)} />
      ) : (
        <>
          <h1>Manage Events</h1>
          {loading ? (
            <p>Loading events...</p>
          ) : events.length === 0 ? (
            <p>No events yet.</p>
          ) : (
            <table className="events-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Event Type</th>
                  <th>Date</th>
                  <th>Client Name</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={event._id}>
                    <td>{index + 1}</td>
                    <td>
                      <span
                        className="event-type-badge"
                        style={{ backgroundColor: getTypeColor(event.eventType) }}
                      >
                        {event.eventType}
                      </span>
                    </td>
                    <td>{new Date(event.eventDate).toLocaleDateString("en-GB")}</td>
                    <td>{event.partnerName}</td>
                    <td>{event.phone || "N/A"}</td>
                    <td>
                      <button className="details-btn" onClick={() => setSelectedEvent(event)}>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default Events;