// import React, { useState } from "react";
// import "./Header.css";
// import { Link } from 'react-router-dom'

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="header">
//       {/* Top Bar */}
//       <div className="header-top">
//         <div className="header-logo">
//           <div className="logo-text">💚 EternalVows</div>
//         </div>

//         <div className="header-top-buttons">
//           <Link to="/Login" className="nav-link">Login</Link>
//          <Link to="/Booknow">
//          <button className="booknow-btn">Book Now</button>
//           </Link>


//           <button className="profile-btn">
//             {/* Pure CSS User Icon - No Lucide needed */}
//             <span className="user-icon"></span>
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="mobile-menu-toggle"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? "Close" : "Menu"}
//           </button>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className={`header-nav ${mobileMenuOpen ? "open" : ""}`}>
//         <ul className="nav-menu">
//           <li>
//            <Link to="/" className="nav-link">Home</Link>
//           </li>

//           <li className="dropdown">
//             <a href="#" className="nav-link dropdown-trigger">
//               Services <span className="arrow">▼</span>
//             </a>
//             <div className="dropdown-content">
//                <Link to="/Wedding" className="nav-link">Wedding</Link>
//                <Link to="/Engagement" className="nav-link">Engagement</Link>
//                <Link to="/BridalShower" className="nav-link">BridalShower</Link>
//                <Link to="/Anniversary" className="nav-link">Anniversary</Link>
//             </div>
//           </li>

//           <li className="dropdown">
//             <Link to="/VendorPage" className="nav-link">Vendors</Link>
//           </li>

//           <li className="dropdown">
//             <a href="#" className="nav-link dropdown-trigger">
//               About Us <span className="arrow">▼</span>
//             </a>
//             <div className="dropdown-content">
//               <Link to="/AboutContent" className="nav-link">About</Link>
//               <Link to="/FAQs" className="nav-link">FAQs</Link>
//             </div>
//           </li>

//           <li>
//              <Link to="/contact" className="nav-link">Contact Us</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
















// import React, { useState } from "react";
// import "./Header.css";
// import { Link } from 'react-router-dom'

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="header">
//       {/* Top Bar */}
//       <div className="header-top">
//         <div className="header-logo">
//           <div className="logo-text">💚 EternalVows</div>
//         </div>

//         <div className="header-top-buttons">
//           <Link to="/Login" className="nav-link">Login</Link>
//          <Link to="/Booknow">
//          <button className="booknow-btn">Book Now</button>
//           </Link>


//           <button className="profile-btn">
//             {/* Pure CSS User Icon - No Lucide needed */}
//             <span className="user-icon"></span>
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="mobile-menu-toggle"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? "Close" : "Menu"}
//           </button>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className={`header-nav ${mobileMenuOpen ? "open" : ""}`}>
//         <ul className="nav-menu">
//           <li>
//            <Link to="/" className="nav-link">Home</Link>
//           </li>

//           <li className="dropdown">
//             <a href="#" className="nav-link dropdown-trigger">
//               Services <span className="arrow">▼</span>
//             </a>
//             <div className="dropdown-content">
//                <Link to="/Wedding" className="nav-link">Wedding</Link>
//                <Link to="/Engagement" className="nav-link">Engagement</Link>
//                <Link to="/BridalShower" className="nav-link">BridalShower</Link>
//                <Link to="/Anniversary" className="nav-link">Anniversary</Link>
//             </div>
//           </li>

//           <li className="dropdown">
//             <Link to="/VendorPage" className="nav-link">Vendors</Link>
//           </li>

//           <li className="dropdown">
//             <a href="#" className="nav-link dropdown-trigger">
//               About Us <span className="arrow">▼</span>
//             </a>
//             <div className="dropdown-content">
//               <Link to="/AboutContent" className="nav-link">About</Link>
//               <Link to="/FAQs" className="nav-link">FAQs</Link>
//             </div>
//           </li>

//           <li>
//              <Link to="/contact" className="nav-link">Contact Us</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// import React, { useState } from "react";
// import "./Header.css";
// import { Link } from 'react-router-dom';

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

//   const toggleProfileDropdown = () => {
//     setProfileDropdownOpen(!profileDropdownOpen);
//   };

//   // Close dropdown when clicking elsewhere
//   const closeProfileDropdown = () => {
//     setProfileDropdownOpen(false);
//   };

//   return (
//     <header className="header">
//       {/* Top Bar */}
//       <div className="header-top">
//         <div className="header-logo">
//           <div className="logo-text">💚 EternalVows</div>
//         </div>

//         <div className="header-top-buttons">
//           {/* Removed the standalone Login link from here */}
//           <Link to="/Booknow">
//             <button className="booknow-btn">Book Now</button>
//           </Link>

//           {/* Profile Button with Dropdown */}
//           <div className="profile-dropdown-container">
//             <button 
//               className="profile-btn"
//               onClick={toggleProfileDropdown}
//               aria-expanded={profileDropdownOpen}
//               aria-label="User menu"
//             >
//               {/* Pure CSS User Icon */}
//               <span className="user-icon"></span>
//             </button>

//                         {/* Dropdown Menu */}
//             {profileDropdownOpen && (
//               <div className="profile-dropdown-menu">
//                 <Link 
//                   to="/Login" 
//                   className="dropdown-item"
//                   onClick={closeProfileDropdown}
//                 >
//                   Login
//                 </Link>
//                 <Link 
//                   to="/Signup" 
//                   className="dropdown-item"
//                   onClick={closeProfileDropdown}
//                 >
//                   Sign Up
//                 </Link>
//                 <div className="dropdown-divider"></div>
//                 <Link 
//                   to="/profile" 
//                   className="dropdown-item"
//                   onClick={closeProfileDropdown}
//                 >
//                   My Profile
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="mobile-menu-toggle"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? "Close" : "Menu"}
//           </button>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className={`header-nav ${mobileMenuOpen ? "open" : ""}`}>
//         <ul className="nav-menu">
//           <li>
//             <Link to="/" className="nav-link">Home</Link>
//           </li>

//           <li className="dropdown">
//             <a href="#" className="nav-link dropdown-trigger">
//               Services <span className="arrow">▼</span>
//             </a>
//             <div className="dropdown-content">
//               <Link to="/Wedding" className="nav-link">Wedding</Link>
//               <Link to="/Engagement" className="nav-link">Engagement</Link>
//               <Link to="/BridalShower" className="nav-link">BridalShower</Link>
//               <Link to="/Anniversary" className="nav-link">Anniversary</Link>
//             </div>
//           </li>

//           <li className="dropdown">
//             <Link to="/VendorPage" className="nav-link">Vendors</Link>
//           </li>

//           <li className="dropdown">
//             <a href="#" className="nav-link dropdown-trigger">
//               About Us <span className="arrow">▼</span>
//             </a>
//             <div className="dropdown-content">
//               <Link to="/AboutContent" className="nav-link">About</Link>
//               <Link to="/FAQs" className="nav-link">FAQs</Link>
//             </div>
//           </li>

//           <li>
//             <Link to="/contact" className="nav-link">Contact Us</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }












import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const closeProfileDropdown = () => {
    setProfileDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    closeProfileDropdown();
    navigate("/"); // redirect to home
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="header-logo">
          <div className="logo-text">💚 EternalVows</div>
        </div>

        <div className="header-top-buttons">
          {/* Book Now always visible */}
          <Link to="/Booknow">
            <button className="booknow-btn">Book Now</button>
          </Link>

          {/* Profile Dropdown */}
          <div className="profile-dropdown-container">
            <button 
              className="profile-btn"
              onClick={toggleProfileDropdown}
              aria-expanded={profileDropdownOpen}
              aria-label="User menu"
            >
              <span className="user-icon"></span>
            </button>

            {profileDropdownOpen && (
              <div className="profile-dropdown-menu">
                {!user ? (
                  <>
                    <Link to="/Login" className="dropdown-item" onClick={closeProfileDropdown}>
                      Login
                    </Link>
                    <Link to="/Signup" className="dropdown-item" onClick={closeProfileDropdown}>
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/profile" className="dropdown-item" onClick={closeProfileDropdown}>
                      My Profile
                    </Link>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`header-nav ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>

          <li className="dropdown">
            <a href="#" className="nav-link dropdown-trigger">
              Services <span className="arrow">▼</span>
            </a>
            <div className="dropdown-content">
              <Link to="/Wedding" className="nav-link">Wedding</Link>
              <Link to="/Engagement" className="nav-link">Engagement</Link>
              <Link to="/BridalShower" className="nav-link">BridalShower</Link>
              <Link to="/Anniversary" className="nav-link">Anniversary</Link>
            </div>
          </li>

          <li><Link to="/VendorPage" className="nav-link">Vendors</Link></li>

          <li className="dropdown">
            <a href="#" className="nav-link dropdown-trigger">
              About Us <span className="arrow">▼</span>
            </a>
            <div className="dropdown-content">
              <Link to="/AboutContent" className="nav-link">About</Link>
              <Link to="/FAQs" className="nav-link">FAQs</Link>
            </div>
          </li>

          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

