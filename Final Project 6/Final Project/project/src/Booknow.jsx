// import React, { useState } from 'react';
// import './Booknow.css';
// import { Link } from 'react-router-dom'

// // Placeholder images (replace with your actual images later)
// const placeholderImg = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

// const BookNow = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [activeCategory, setActiveCategory] = useState('Hotels');

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   const categories = [
//     { title: 'Hotels', icon: '🏨', items: ['Grand Palace Hotel', 'Seaside Resort', 'Mountain View Inn', 'Urban Lofts'] },
//     { title: 'Food Service', icon: '🍽️', items: ['Royal Caterers', 'Spice Heaven', 'Delight Foods', 'Global Fusion'] },
//     { title: 'Photographers', icon: '📸', items: ['Capture Moments', 'Lens & Love', 'Dream Frames', 'Visual Stories'] },
//     { title: 'Makeup & Spa', icon: '💄', items: ['Glow Studio', 'Bliss Spa', 'Beauty Haven', 'Serenity Spa'] },
//     { title: 'Car Rentals', icon: '🚗', items: ['Luxury Wheels', 'City Drive', 'Premium Rides', 'Eco Motors'] },
//     { title: 'Decoration', icon: '🎨', items: ['Elegant Decor', 'Floral Dreams', 'Event Stylers', 'Creative Themes'] },
//   ];

//   return (
//     <div className="booknow-container">
//       {/* Header */}
//       <header className="booknow-header">
//         <div className="header-content">
//           <h1>Book Your Dream Experience</h1>
//           <p className="header-subtitle">Discover premium services for your perfect occasion</p>
//         </div>
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? '✕' : '☰'}
//         </button>
//       </header>

//       <div className="main-layout">
//         {/* Left Sidebar */}
//         <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//           <div className="sidebar-header">
//             <h3 className="sidebar-title">Services</h3>
//             <button className="close-sidebar-btn" onClick={toggleSidebar} title="Close sidebar">
//               ✕
//             </button>
//           </div>
//           <nav className="sidebar-nav">
//             <ul>
//               {categories.map((cat) => (
//                 <li key={cat.title}>
//                   <a 
//                     href={`#${cat.title.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}`}
//                     className={activeCategory === cat.title ? 'active' : ''}
//                     onClick={() => setActiveCategory(cat.title)}
//                   >
//                     <span className="nav-icon">{cat.icon}</span>
//                     <span className="nav-text">{cat.title}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div className="sidebar-footer">
//             <Link to="/contact" className="nav-link"> Need help? Contact Us</Link>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="booknow-content">
//           <div className="content-header">
//             <h2>Most Popular Services</h2>
//             <p className="content-subtitle">Browse our curated selection of premium service providers</p>
//           </div>
          
//           {categories.map((cat) => (
//             <section key={cat.title} id={cat.title.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}>
//               <div className="section-header">
//                 <span className="section-icon">{cat.icon}</span>
//                 <h2 className="section-title">{cat.title}</h2>
//               </div>
//               <div className="cards-grid">
//                 {cat.items.map((item, idx) => (
//                   <div key={idx} className="service-card">
//                     <div className="card-image">
//                       <img src={placeholderImg} alt={item} />
//                       <div className="card-badge">Premium</div>
//                     </div>
//                     <div className="card-body">
//                       <h3>{item}</h3>
//                       <p className="card-description">Exceptional {cat.title.toLowerCase()} service with premium quality</p>
//                       <div className="card-rating">
//                         <span className="stars">★★★★★</span>
//                         <span className="rating-text">4.8 (120 reviews)</span>
//                       </div>
//                       <div className="card-footer">
//                         <button className="book-btn">Book Now</button>
//                         <button className="details-btn">Details</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           ))}
//         </main>
//       </div>
      
//       {/* Floating action button for mobile */}
//       <button className="floating-action-btn" onClick={toggleSidebar}>
//         {isSidebarOpen ? '✕' : '☰'}
//       </button>
//     </div>
//   );
// };

// export default BookNow;


//Marys code is above



// import React, { useState, useEffect } from 'react';
// import './Booknow.css';
// import { Link, useNavigate } from 'react-router-dom';

// // Placeholder images (replace with your actual images later)
// const placeholderImg = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

// const BookNow = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [activeCategory, setActiveCategory] = useState('Hotels');
//   const [user, setUser] = useState(null); // store logged-in user
//   const navigate = useNavigate();

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   useEffect(() => {
//     // Load user from localStorage if logged in
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleBooking = (item) => {
//     if (!user) {
//       alert('You must be logged in to book a service!');
//       navigate('/login');
//       return;
//     }
//     alert(`Booking confirmed for ${item}, ${user.name}!`);
//   };

//   const handleAddToCart = (item) => {
//     if (!user) {
//       alert('You must be logged in to add to cart!');
//       navigate('/login');
//       return;
//     }
//     alert(`${item} added to your cart, ${user.name}!`);
//   };

//   const categories = [
//     { title: 'Hotels', icon: '🏨', items: ['Grand Palace Hotel', 'Seaside Resort', 'Mountain View Inn', 'Urban Lofts'] },
//     { title: 'Food Service', icon: '🍽️', items: ['Royal Caterers', 'Spice Heaven', 'Delight Foods', 'Global Fusion'] },
//     { title: 'Photographers', icon: '📸', items: ['Capture Moments', 'Lens & Love', 'Dream Frames', 'Visual Stories'] },
//     { title: 'Makeup & Spa', icon: '💄', items: ['Glow Studio', 'Bliss Spa', 'Beauty Haven', 'Serenity Spa'] },
//     { title: 'Car Rentals', icon: '🚗', items: ['Luxury Wheels', 'City Drive', 'Premium Rides', 'Eco Motors'] },
//     { title: 'Decoration', icon: '🎨', items: ['Elegant Decor', 'Floral Dreams', 'Event Stylers', 'Creative Themes'] },
//   ];

//   return (
//     <div className="booknow-container">
//       {/* Header */}
//       <header className="booknow-header">
//         <div className="header-content">
//           <h1>Book Your Dream Experience</h1>
//           <p className="header-subtitle">Discover premium services for your perfect occasion</p>
//         </div>
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? '✕' : '☰'}
//         </button>
//       </header>

//       <div className="main-layout">
//         {/* Left Sidebar */}
//         <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//           <div className="sidebar-header">
//             <h3 className="sidebar-title">Services</h3>
//             <button className="close-sidebar-btn" onClick={toggleSidebar} title="Close sidebar">
//               ✕
//             </button>
//           </div>
//           <nav className="sidebar-nav">
//             <ul>
//               {categories.map((cat) => (
//                 <li key={cat.title}>
//                   <a 
//                     href={`#${cat.title.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}`}
//                     className={activeCategory === cat.title ? 'active' : ''}
//                     onClick={() => setActiveCategory(cat.title)}
//                   >
//                     <span className="nav-icon">{cat.icon}</span>
//                     <span className="nav-text">{cat.title}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div className="sidebar-footer">
//             <Link to="/contact" className="nav-link">Need help? Contact Us</Link>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="booknow-content">
//           <div className="content-header">
//             <h2>Most Popular Services</h2>
//             <p className="content-subtitle">Browse our curated selection of premium service providers</p>
//           </div>
          
//           {categories.map((cat) => (
//             <section key={cat.title} id={cat.title.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}>
//               <div className="section-header">
//                 <span className="section-icon">{cat.icon}</span>
//                 <h2 className="section-title">{cat.title}</h2>
//               </div>
//               <div className="cards-grid">
//                 {cat.items.map((item, idx) => (
//                   <div key={idx} className="service-card">
//                     <div className="card-image">
//                       <img src={placeholderImg} alt={item} />
//                       <div className="card-badge">Premium</div>
//                     </div>
//                     <div className="card-body">
//                       <h3>{item}</h3>
//                       <p className="card-description">Exceptional {cat.title.toLowerCase()} service with premium quality</p>
//                       <div className="card-rating">
//                         <span className="stars">★★★★★</span>
//                         <span className="rating-text">4.8 (120 reviews)</span>
//                       </div>
//                       <div className="card-footer">
//                         <button className="book-btn" onClick={() => handleBooking(item)}>Book Now</button>
//                         <button className="cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
//                         <button className="details-btn">Details</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           ))}
//         </main>
//       </div>
      
//       {/* Floating action button for mobile */}
//       <button className="floating-action-btn" onClick={toggleSidebar}>
//         {isSidebarOpen ? '✕' : '☰'}
//       </button>
//     </div>
//   );
// };

// export default BookNow;











// import React, { useState, useEffect } from 'react';
// import './Booknow.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const BookNow = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [activeCategory, setActiveCategory] = useState('Hotels');
//   const [user, setUser] = useState(null);
//   const [vendors, setVendors] = useState([]);
//   const navigate = useNavigate();

//   const API_URL = "http://localhost:5002/api/vendors";

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) setUser(JSON.parse(storedUser));
//     fetchVendors();
//   }, []);

//   const fetchVendors = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setVendors(res.data);
//     } catch {
//       alert("Failed to load vendors");
//     }
//   };

//   const handleBooking = (item) => {
//     if (!user) {
//       alert('You must be logged in to book a service!');
//       navigate('/login');
//       return;
//     }
//     alert(`Booking confirmed for ${item.name}`);
//   };

//   const handleAddToCart = (item) => {
//     if (!user) {
//       alert('You must be logged in to add to cart!');
//       navigate('/login');
//       return;
//     }
//     alert(`${item.name} added to cart`);
//   };

//   const categories = [
//     { title: 'Hotels', icon: '🏨', type: 'Hotels/Halls' },
//     { title: 'Food Service', icon: '🍽️', type: 'Foods/Catering/Cake' },
//     { title: 'Photographers', icon: '📸', type: 'Photographer/DJ' },
//     { title: 'Makeup & Spa', icon: '💄', type: 'Makeup/Spa' },
//     { title: 'Car Rentals', icon: '🚗', type: 'Car Rental' },
//     { title: 'Decoration', icon: '🎨', type: 'Decoration' },
//   ];

//   return (
//     <div className="booknow-container">
//       <header className="booknow-header">
//         <div className="header-content">
//           <h1>Book Your Dream Experience</h1>
//           <p className="header-subtitle">Discover premium services for your perfect occasion</p>
//         </div>
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? '✕' : '☰'}
//         </button>
//       </header>

//       <div className="main-layout">
//         <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//           <nav className="sidebar-nav">
//             <ul>
//               {categories.map((cat) => (
//                 <li key={cat.title}>
//                   <a
//                     href={`#${cat.title}`}
//                     className={activeCategory === cat.title ? 'active' : ''}
//                     onClick={() => setActiveCategory(cat.title)}
//                   >
//                     <span className="nav-icon">{cat.icon}</span>
//                     <span className="nav-text">{cat.title}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>

//         <main className="booknow-content">
//           {categories.map((cat) => {
//             const filtered = vendors.filter(v => v.type === cat.type);

//             return (
//               <section key={cat.title} id={cat.title}>
//                 <div className="section-header">
//                   <span className="section-icon">{cat.icon}</span>
//                   <h2 className="section-title">{cat.title}</h2>
//                 </div>

//                 {filtered.length === 0 ? (
//                   <p className="empty">No {cat.title.toLowerCase()} added yet.</p>
//                 ) : (
//                   <div className="cards-grid">
//                     {filtered.map((vendor) => (
//                       <div key={vendor._id} className="service-card">
//                         <div className="card-image">
//                           <img src={vendor.images?.[0]} alt={vendor.name} />
//                           <div className="card-badge">Premium</div>
//                         </div>

//                         <div className="card-body">
//                           <h3>{vendor.name}</h3>
//                           <p className="card-description">
//                             {vendor.shortDescription || "Premium service"}
//                           </p>

//                           <div className="card-footer">
//                             <button className="book-btn" onClick={() => handleBooking(vendor)}>
//                               Book Now
//                             </button>
//                             <button className="cart-btn" onClick={() => handleAddToCart(vendor)}>
//                               Add to Cart
//                             </button>
//                             <button className="details-btn">Details</button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </section>
//             );
//           })}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default BookNow;



//With cart button 



// import React, { useState, useEffect } from "react";
// import "./Booknow.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const BookNow = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("Hotels");
//   const [user, setUser] = useState(null);
//   const [vendors, setVendors] = useState([]);
//   const navigate = useNavigate();

//   const API_URL = "http://localhost:5002/api/vendors";
//   const ADD_TO_CART_URL = "http://localhost:5002/api/cart/add";

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//     fetchVendors();
//   }, []);

//   const fetchVendors = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setVendors(res.data);
//     } catch {
//       alert("Failed to load vendors");
//     }
//   };

//   // Add vendor to user's cart in DB
//   const handleAddToCart = async (vendor) => {
//     if (!user) {
//       alert("You must be logged in to add to cart!");
//       navigate("/login");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token"); // assuming JWT stored
//       await axios.post(
//         ADD_TO_CART_URL,
//         { vendorId: vendor._id },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert(`${vendor.name} added to your cart!`);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add to cart.");
//     }
//   };

//   const categories = [
//     { title: "Hotels", icon: "🏨", type: "Hotels/Halls" },
//     { title: "Food Service", icon: "🍽️", type: "Foods/Catering/Cake" },
//     { title: "Photographers", icon: "📸", type: "Photographer/DJ" },
//     { title: "Makeup & Spa", icon: "💄", type: "Makeup/Spa" },
//     { title: "Car Rentals", icon: "🚗", type: "Car Rental" },
//     { title: "Decoration", icon: "🎨", type: "Decoration" },
//   ];

//   return (
//     <div className="booknow-container">
//       {/* Header */}
//       <header className="booknow-header">
//         <div className="header-content">
//           <h1>Book Your Dream Experience</h1>
//           <p className="header-subtitle">
//             Discover premium services for your perfect occasion
//           </p>
//         </div>
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? "✕" : "☰"}
//         </button>
//       </header>

//       <div className="main-layout">
//         {/* Sidebar */}
//         <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
//           <nav className="sidebar-nav">
//             <ul>
//               {categories.map((cat) => (
//                 <li key={cat.title}>
//                   <button
//                     className={activeCategory === cat.title ? "active" : ""}
//                     onClick={() => setActiveCategory(cat.title)}
//                   >
//                     <span className="nav-icon">{cat.icon}</span>
//                     <span className="nav-text">{cat.title}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="booknow-content">
//           {categories.map((cat) => {
//             const filtered = vendors.filter((v) => v.type === cat.type);

//             return (
//               <section key={cat.title} id={cat.title}>
//                 <div className="section-header">
//                   <span className="section-icon">{cat.icon}</span>
//                   <h2 className="section-title">{cat.title}</h2>
//                 </div>

//                 {filtered.length === 0 ? (
//                   <p className="empty">No {cat.title.toLowerCase()} added yet.</p>
//                 ) : (
//                   <div className="cards-grid">
//                     {filtered.map((vendor) => (
//                       <div key={vendor._id} className="service-card">
//                         <div className="card-image">
//                           <img src={vendor.images?.[0]} alt={vendor.name} />
//                           <div className="card-badge">Premium</div>
//                         </div>

//                         <div className="card-body">
//                           <h3>{vendor.name}</h3>
//                           <p className="card-description">
//                             {vendor.shortDescription || "Premium service"}
//                           </p>

//                           <div className="card-footer">
//                             <button
//                               className="book-btn"
//                               onClick={() => handleAddToCart(vendor)}
//                             >
//                               Add to Cart
//                             </button>
//                             <button className="details-btn">Details</button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </section>
//             );
//           })}
//         </main>
//       </div>

//       {/* Floating View Cart button */}
//       {user && (
//         <Link to="/cart" className="floating-cart-btn">
//           🛒 View Cart
//         </Link>
//       )}
//     </div>
//   );
// };

// export default BookNow;













// import React, { useState, useEffect } from "react";
// import "./Booknow.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const BookNow = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("Hotels");
//   const [user, setUser] = useState(null);
//   const [vendors, setVendors] = useState([]);
//   const navigate = useNavigate();

//   const API_URL = "http://localhost:5002/api/vendors";
//   const ADD_TO_CART_URL = "http://localhost:5002/api/cart/add";

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//     fetchVendors();
//   }, []);

//   const fetchVendors = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setVendors(res.data);
//     } catch {
//       alert("Failed to load vendors");
//     }
//   };

//   // Add vendor to user's cart in DB
//   const handleAddToCart = async (vendor) => {
//     if (!user) {
//       alert("You must be logged in to add to cart!");
//       navigate("/login");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token"); // JWT stored on login
//       await axios.post(
//         ADD_TO_CART_URL,
//         { vendorId: vendor._id },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert(`${vendor.name} added to your cart!`);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add to cart.");
//     }
//   };

//   const categories = [
//     { title: "Hotels", icon: "🏨", type: "Hotels/Halls" },
//     { title: "Food Service", icon: "🍽️", type: "Foods/Catering/Cake" },
//     { title: "Photographers", icon: "📸", type: "Photographer/DJ" },
//     { title: "Makeup & Spa", icon: "💄", type: "Makeup/Spa" },
//     { title: "Car Rentals", icon: "🚗", type: "Car Rental" },
//     { title: "Decoration", icon: "🎨", type: "Decoration" },
//   ];

//   return (
//     <div className="booknow-container">
//       {/* Header */}
//       <header className="booknow-header">
//         <div className="header-content">
//           <h1>Book Your Dream Experience</h1>
//           <p className="header-subtitle">
//             Discover premium services for your perfect occasion
//           </p>
//         </div>
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? "✕" : "☰"}
//         </button>
//       </header>

//       <div className="main-layout">
//         {/* Sidebar */}
//         <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
//           <nav className="sidebar-nav">
//             <ul>
//               {categories.map((cat) => (
//                 <li key={cat.title}>
//                   <button
//                     className={activeCategory === cat.title ? "active" : ""}
//                     onClick={() => setActiveCategory(cat.title)}
//                   >
//                     <span className="nav-icon">{cat.icon}</span>
//                     <span className="nav-text">{cat.title}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="booknow-content">
//           {categories.map((cat) => {
//             const filtered = vendors.filter((v) => v.type === cat.type);

//             return (
//               <section key={cat.title} id={cat.title}>
//                 <div className="section-header">
//                   <span className="section-icon">{cat.icon}</span>
//                   <h2 className="section-title">{cat.title}</h2>
//                 </div>

//                 {filtered.length === 0 ? (
//                   <p className="empty">No {cat.title.toLowerCase()} added yet.</p>
//                 ) : (
//                   <div className="cards-grid">
//                     {filtered.map((vendor) => (
//                       <div key={vendor._id} className="service-card">
//                         <div className="card-image">
//                           <img src={vendor.images?.[0]} alt={vendor.name} />
//                           <div className="card-badge">Premium</div>
//                         </div>

//                         <div className="card-body">
//                           <h3>{vendor.name}</h3>
//                           <p className="card-description">
//                             {vendor.shortDescription || "Premium service"}
//                           </p>

//                           <div className="card-footer">
//                             {/* Book Now button still calls add to cart */}
//                             <button
//                               className="book-btn"
//                               onClick={() => handleAddToCart(vendor)}
//                             >
//                               Book Now
//                             </button>
//                             <button className="details-btn">Details</button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </section>
//             );
//           })}
//         </main>
//       </div>

//       {/* Floating View Cart button */}
//       {user && (
//         <Link to="/cart" className="floating-cart-btn">
//           🛒 View Cart
//         </Link>
//       )}
//     </div>
//   );
// };

// export default BookNow;










// import React, { useState, useEffect } from "react";
// import "./Booknow.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const BookNow = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("Hotels");
//   const [user, setUser] = useState(null);
//   const [vendors, setVendors] = useState([]);
//   const [loading, setLoading] = useState(true); // Added: Loading state for better UX
//   const [error, setError] = useState(null); // Added: Error state for API failures
//   const navigate = useNavigate();
//   const API_URL = "http://localhost:5002/api/vendors";
//   const ADD_TO_CART_URL = "http://localhost:5002/api/cart/add";

//   // Added: Placeholder image fallback
//   const placeholderImg = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//     fetchVendors();
//   }, []);

//   const fetchVendors = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const res = await axios.get(API_URL);
//       if (res.status === 200) {
//         setVendors(res.data);
//       } else {
//         throw new Error("Unexpected response status");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load vendors. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddToCart = async (vendor) => {
//     if (!user) {
//       alert("You must be logged in to add to cart!");
//       navigate("/login");
//       return;
//     }
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Authentication token missing. Please log in again.");
//       navigate("/login");
//       return;
//     }
//     try {
//       const res = await axios.post(
//         ADD_TO_CART_URL,
//         { vendorId: vendor._id },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       if (res.status === 200 || res.status === 201) {
//         alert(`${vendor.name} added to your cart!`);
//       } else {
//         throw new Error("Unexpected response status");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add to cart. Please check your connection or try again.");
//     }
//   };

//   // Added: Handle details navigation (adjust route if needed)
//   const handleDetails = (vendorId) => {
//     navigate(`/vendors/${vendorId}`);
//   };

//   const categories = [
//     { title: "Hotels", icon: "🏨", type: "Hotels/Halls" },
//     { title: "Food Service", icon: "🍽️", type: "Foods/Catering/Cake" },
//     { title: "Photographers", icon: "📸", type: "Photographer/DJ" },
//     { title: "Makeup & Spa", icon: "💄", type: "Makeup/Spa" },
//     { title: "Car Rentals", icon: "🚗", type: "Car Rental" },
//     { title: "Decoration", icon: "🎨", type: "Decoration" },
//   ];

//   return (
//     <div className="booknow-container">
//       {/* Header */}
//       <header className="booknow-header">
//         <div className="header-content">
//           <h1>Book Your Dream Experience</h1>
//           <p className="header-subtitle">
//             Discover premium services for your perfect occasion
//           </p>
//         </div>
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? "✕" : "☰"}
//         </button>
//       </header>
//       <div className="main-layout">
//         {/* Sidebar */}
//         <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
//           <nav className="sidebar-nav">
//             <ul>
//               {categories.map((cat) => (
//                 <li key={cat.title}>
//                   <button
//                     className={activeCategory === cat.title ? "active" : ""}
//                     onClick={() => {
//                       setActiveCategory(cat.title);
//                       // Added: Smooth scroll to section
//                       const section = document.getElementById(cat.title);
//                       if (section) {
//                         section.scrollIntoView({ behavior: "smooth" });
//                       }
//                     }}
//                   >
//                     <span className="nav-icon">{cat.icon}</span>
//                     <span className="nav-text">{cat.title}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>
//         {/* Main Content */}
//         <main className="booknow-content">
//           {loading ? (
//             <p>Loading services...</p> // Added: Loading indicator
//           ) : error ? (
//             <p className="error">{error}</p> // Added: Error display
//           ) : (
//             categories.map((cat) => {
//               const filtered = vendors.filter((v) => v.type === cat.type);
//               return (
//                 <section key={cat.title} id={cat.title}>
//                   <div className="section-header">
//                     <span className="section-icon">{cat.icon}</span>
//                     <h2 className="section-title">{cat.title}</h2>
//                   </div>
//                   {filtered.length === 0 ? (
//                     <p className="empty">No {cat.title.toLowerCase()} added yet.</p>
//                   ) : (
//                     <div className="cards-grid">
//                       {filtered.map((vendor) => (
//                         <div key={vendor._id} className="service-card">
//                           <div className="card-image">
//                             <img
//                               src={vendor.images?.[0] || placeholderImg} // Added: Fallback image
//                               alt={vendor.name}
//                             />
//                             <div className="card-badge">Premium</div>
//                           </div>
//                           <div className="card-body">
//                             <h3>{vendor.name}</h3>
//                             <p className="card-description">
//                               {vendor.shortDescription || "Premium service"}
//                             </p>
//                             <div className="card-footer">
//                               <button
//                                 className="book-btn"
//                                 onClick={() => handleAddToCart(vendor)}
//                               >
//                                 Add to Cart {/* Fixed: Label matches action */}
//                               </button>
//                               <button
//                                 className="details-btn"
//                                 onClick={() => handleDetails(vendor._id)}
//                               >
//                                 Details
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </section>
//               );
//             })
//           )}
//         </main>
//       </div>
//       {/* Floating View Cart button */}
//       {user && (
//         <Link to="/cart" className="floating-cart-btn">
//           🛒 View Cart
//         </Link>
//       )}
//     </div>
//   );
// };

// export default BookNow;

import React, { useState, useEffect } from "react";
import "./Booknow.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BookNow = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Hotels");
  const [user, setUser] = useState(null);
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState({}); // { vendorId: true/false }
  const navigate = useNavigate();

  const API_URL = "http://localhost:5002/api/vendors";
  const ADD_TO_CART_URL = "http://localhost:5002/api/cart/add";

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setVendors(res.data || []);
    } catch (err) {
      console.error("Failed to load vendors:", err);
      alert("Could not load services. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (vendor) => {
    if (!user) {
      alert("Please log in to add items to your cart");
      navigate("/login");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Session expired. Please log in again.");
      navigate("/login");
      return;
    }

    setAddingToCart((prev) => ({ ...prev, [vendor._id]: true }));

    try {
      const response = await axios.post(
        ADD_TO_CART_URL,
        { vendorId: vendor._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200 || response.status === 201) {
        alert(`${vendor.name} added to your cart!`);
      }
    } catch (err) {
      console.error("Add to cart failed:", err);
      const msg = err.response?.data?.message || "Failed to add to cart";
      alert(msg);
    } finally {
      setAddingToCart((prev) => ({ ...prev, [vendor._id]: false }));
    }
  };

  const categories = [
    { title: "Hotels", icon: "🏨", type: "Hotels/Halls" },
    { title: "Food Service", icon: "🍽️", type: "Foods/Catering/Cake" },
    { title: "Photographers", icon: "📸", type: "Photographer/DJ" },
    { title: "Makeup & Spa", icon: "💄", type: "Makeup/Spa" },
    { title: "Car Rentals", icon: "🚗", type: "Car Rental" },
    { title: "Decoration", icon: "🎨", type: "Decoration" },
  ];

  const handleCategoryClick = (title) => {
    setActiveCategory(title);
    const section = document.getElementById(title);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="booknow-container">
      <header className="booknow-header">
        <div className="header-content">
          <h1>Book Your Dream Experience</h1>
          <p className="header-subtitle">
            Discover premium services for your perfect occasion
          </p>
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? "✕" : "☰"}
        </button>
      </header>

      <div className="main-layout">
        <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <nav className="sidebar-nav">
            <ul>
              {categories.map((cat) => (
                <li key={cat.title}>
                  <button
                    className={activeCategory === cat.title ? "active" : ""}
                    onClick={() => handleCategoryClick(cat.title)}
                  >
                    <span className="nav-icon">{cat.icon}</span>
                    <span className="nav-text">{cat.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="booknow-content">
          {loading ? (
            <div className="loading">Loading premium services...</div>
          ) : (
            categories.map((cat) => {
              const filtered = vendors.filter((v) => v.type === cat.type);

              return (
                <section key={cat.title} id={cat.title}>
                  <div className="section-header">
                    <span className="section-icon">{cat.icon}</span>
                    <h2 className="section-title">{cat.title}</h2>
                  </div>

                  {filtered.length === 0 ? (
                    <p className="empty">No {cat.title.toLowerCase()} available yet.</p>
                  ) : (
                    <div className="cards-grid">
                      {filtered.map((vendor) => (
                        <div key={vendor._id} className="service-card">
                          <div className="card-image">
                            <img
                              src={vendor.images?.[0] || "https://via.placeholder.com/400x250?text=No+Image"}
                              alt={vendor.name}
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/400x250?text=Image+Error";
                              }}
                            />
                            <div className="card-badge">Premium</div>
                          </div>

                          <div className="card-body">
                            <h3>{vendor.name}</h3>
                            <p className="card-description">
                              {vendor.shortDescription || "Premium quality service"}
                            </p>

                            <div className="card-footer">
                              {/* <button
                                className="book-btn"
                                onClick={() => handleAddToCart(vendor)}
                              >
                                Book Now
                              </button> */}

                              <button
                                className="cart-btn"
                                onClick={() => handleAddToCart(vendor)}
                                disabled={addingToCart[vendor._id]}
                              >
                                {addingToCart[vendor._id] ? "Adding..." : "Add to Cart"}
                              </button>

                              <button className="details-btn">Details</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })
          )}
        </main>
      </div>

      {user && (
        <Link to="/cart" className="floating-cart-btn">
          🛒 View Cart
        </Link>
      )}
    </div>
  );
};

export default BookNow;