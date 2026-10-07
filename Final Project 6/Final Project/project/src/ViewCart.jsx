// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./ViewCart.css";

// const ViewCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const CART_URL = "http://localhost:5002/api/cart"; // GET all cart items
//   const ADD_TO_CART_URL = "http://localhost:5002/api/cart/add"; // optional if re-adding

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await axios.get(CART_URL, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(res.data || []);
//     } catch (err) {
//       console.error("Failed to fetch cart:", err);
//       alert("Could not load cart items. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

// const handleBookNow = (vendor) => {
//   navigate("/booking", {
//     state: {
//       vendorId: vendor._id,
//       vendorName: vendor.name,
//     },
//   });
// };
// <button
//   className="book-now-btn"
//   onClick={() => handleBookNow(vendor)}
// >
//   Book Now
// </button>


//   if (loading) {
//     return <div className="loading">Loading your cart...</div>;
//   }

//   return (
//     <div className="viewcart-container">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items-grid">
//           {cartItems.map((vendor) => (
//             <div key={vendor._id} className="cart-item-card">
//               <img
//                 src={vendor.images?.[0] || "https://via.placeholder.com/300x200?text=No+Image"}
//                 alt={vendor.name}
//               />
//               <div className="cart-item-info">
//                 <h3>{vendor.name}</h3>
//                 <p>{vendor.shortDescription || "Premium service"}</p>
//                 <button
//                   className="book-now-btn"
//                   onClick={() => handleBookNow(vendor._id)}
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewCart;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./ViewCart.css";

// const ViewCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const CART_URL = "http://localhost:5002/api/cart";

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await axios.get(CART_URL, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(res.data || []);
//     } catch (err) {
//       console.error("Failed to fetch cart:", err);
//       alert("Could not load cart items. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ FIXED: expects FULL vendor object
//   const handleBookNow = (vendor) => {
//     navigate("/booking", {
//       state: {
//         vendorId: vendor._id,
//         vendorName: vendor.name,
//       },
//     });
//   };

//   if (loading) {
//     return <div className="loading">Loading your cart...</div>;
//   }

//   return (
//     <div className="viewcart-container">
//       <h1>Your Cart</h1>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items-grid">
//           {cartItems.map((vendor) => (
//             <div key={vendor._id} className="cart-item-card">
//               <img
//                 src={
//                   vendor.images?.[0] ||
//                   "https://via.placeholder.com/300x200?text=No+Image"
//                 }
//                 alt={vendor.name}
//               />

//               <div className="cart-item-info">
//                 <h3>{vendor.name}</h3>
//                 <p>{vendor.shortDescription || "Premium service"}</p>

//                 {/* ✅ FIXED: pass vendor object, NOT vendor._id */}
//                 <button
//                   className="book-now-btn"
//                   onClick={() => handleBookNow(vendor)}
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewCart;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ViewCart.css";

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const CART_URL = "http://localhost:5002/api/cart";
  const REMOVE_URL = "http://localhost:5002/api/cart/remove"; // DELETE endpoint

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(CART_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(res.data || []);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
      alert("Could not load cart items. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveVendor = async (vendorId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      setCartItems((prev) => prev.filter((v) => v._id !== vendorId));

      await axios.delete(`${REMOVE_URL}/${vendorId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.error("Failed to remove vendor:", err);
      alert("Could not remove vendor. Try again.");
    }
  };

  const handleBookAll = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/booking", {
      state: { vendors: cartItems }, // send all vendors
    });
  };

  if (loading) {
    return <div className="loading">Loading your cart...</div>;
  }

  return (
    <div className="viewcart-container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-grid">
          {cartItems.map((vendor) => (
            <div key={vendor._id} className="cart-item-card">
              <img
                src={
                  vendor.images?.[0] ||
                  "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={vendor.name}
              />
              <div className="cart-item-info">
                <h3>{vendor.name}</h3>
                <p>{vendor.shortDescription || "Premium service"}</p>

                <button
                  className="remove-btn"
                  onClick={() => handleRemoveVendor(vendor._id)}
                >
                  ✕ 
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <button className="book-all-btn" onClick={handleBookAll}>
          Book Now
        </button>
      )}
    </div>
  );
};

export default ViewCart;
