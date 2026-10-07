import { useEffect, useState } from "react";
import axios from "axios";
import "./MyProfile.css";

export default function MyProfile() {
  const [activeTab, setActiveTab] = useState("collections");
  const [bookings, setBookings] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user?._id) {
      console.error("User ID missing");
      return;
    }

    const fetchAll = async () => {
      try {
        const [bookingsRes, cartRes] = await Promise.all([
          axios.get(`http://localhost:5002/api/bookings/user/${user._id}`),
          axios.get(`http://localhost:5002/api/cart/user/${user._id}`)
        ]);

        setBookings(bookingsRes.data || []);
        setCartItems(cartRes.data || []);
      } catch (err) {
        console.error("Fetch error:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [user?._id]);

  if (!user) return <p>Please login</p>;
  if (loading) return <p className="loader">Loading...</p>;

  return (
    <div className="profile-page">
      <h1>Welcome, {user.name}</h1>

      {/* TABS */}
      <div className="profile-tabs">
        <button
          className={activeTab === "collections" ? "tab active" : "tab"}
          onClick={() => setActiveTab("collections")}
        >
          Collections
        </button>

        <button
          className={activeTab === "cart" ? "tab active" : "tab"}
          onClick={() => setActiveTab("cart")}
        >
          Cart
        </button>
      </div>

      {/* COLLECTIONS */}
      {activeTab === "collections" && (
        <div className="table-wrapper">
          {bookings.length === 0 ? (
            <p>No bookings yet</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Vendor</th>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.flatMap((booking) =>
                  booking.vendorList.map((v, i) => (
                    <tr key={`${booking._id}-${i}`}>
                      <td>{v.vendorName}</td>
                      <td>{booking.eventType}</td>
                      <td>{new Date(booking.eventDate).toDateString()}</td>
                      <td className={`status ${v.status}`}>
                        {v.status}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* CART */}
      {activeTab === "cart" && (
        <div className="cart-grid">
          {cartItems.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="cart-card">
                <h3>{item.vendorName}</h3>
                <p>{item.serviceName}</p>
                <strong>${item.price}</strong>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}