import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Home from './Home.jsx';
import ContactForm from './ContactForm.jsx';
import VendorPage from "./Vendor.jsx";

import AboutContent from './AboutContent.jsx';
import FAQs from './FAQs.jsx';
import Wedding from './Wedding.jsx';
import Engagement from './Engagement.jsx';
import BridalShower from './BridalShower.jsx';
import Anniversary from './Anniversary.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import BookNow from './Booknow.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Halls from "./Halls.jsx";
import Catering from './Catering.jsx';
import OAuthSuccess from './OAuthSuccess.jsx';
import ViewCart from "./ViewCart";
import BookingDetail from "./BookingDetails";
import MyProfile from "./MyProfile.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header /> {/* Header appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/VendorPage" element={<VendorPage />}/>
         <Route path="/Halls" element={<Halls />} />
          <Route path="/catering" element={<Catering />} />
        <Route path="/AboutContent" element={<AboutContent />}/>
        <Route path="/FAQs" element={ <FAQs />} />
        <Route path="/Wedding" element={ <Wedding />} />
        <Route path="/Engagement" element={ <Engagement />} />
        <Route path="/BridalShower" element={ <BridalShower />} />
        <Route path="/Anniversary" element={ <Anniversary />} />
        <Route path="/Login" element={ <Login />} />
  <Route path="/oauth-success" element={<OAuthSuccess />} />
<Route path="/profile" element={<MyProfile />} />
        <Route path="/Signup" element={ <Signup />} />
        <Route path="/Booknow" element={ <BookNow />} />
                <Route path="/cart" element={<ViewCart />} />
        <Route path="/booking" element={<BookingDetail />} />
        <Route path="/booking" element={<BookingDetail />} />

      </Routes>
      <Footer /> {/* Footer appears on all pages */}
    </BrowserRouter>
  </StrictMode>,
);


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// import './index.css';

// // Pages
// import Home from './Home.jsx';
// import ContactForm from './ContactForm.jsx';
// import VendorPage from './Vendor.jsx';        // rename file to Vendor.jsx if needed
// import Halls from './Halls.jsx';
// import AboutContent from './AboutContent.jsx';
// import FAQs from './FAQs.jsx';
// import Wedding from './Wedding.jsx';
// import Engagement from './Engagement.jsx';
// import BridalShower from './BridalShower.jsx';
// import Anniversary from './Anniversary.jsx';
// import Login from './Login.jsx';
// import Signup from './Signup.jsx';
// import BookNow from './Booknow.jsx';          // consistent naming

// // Components
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';

// // Auth-related
// import { AuthProvider } from './context/AuthContext.jsx'; // create this file
// import ProtectedRoute from './components/ProtectedRoute.jsx'; // create this

// // Layout wrapper (Header + content + Footer)
// const MainLayout = ({ children }) => (
//   <>
//     <Header />
//     <main>{children}</main>
//     <Footer />
//   </>
// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Public routes with Header/Footer */}
//           <Route element={<MainLayout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/contact" element={<ContactForm />} />
//             <Route path="/vendor" element={<VendorPage />} />     {/* lowercase */}
//             <Route path="/halls" element={<Halls />} />
//             <Route path="/about" element={<AboutContent />} />
//             <Route path="/faqs" element={<FAQs />} />
//             <Route path="/wedding" element={<Wedding />} />
//             <Route path="/engagement" element={<Engagement />} />
//             <Route path="/bridal-shower" element={<BridalShower />} />
//             <Route path="/anniversary" element={<Anniversary />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />

//             {/* Protected routes (only logged-in users) */}
//             <Route
//               path="/booknow"
//               element={
//                 <ProtectedRoute>
//                   <BookNow />
//                 </ProtectedRoute>
//               }
//             />
//             {/* Add more protected routes here, e.g. */}
//             {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
//           </Route>

//           {/* Catch-all redirect */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   </StrictMode>
// );























// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import AdminDashboard from './AdminDashboard.jsx';  // Adjust path if needed

// import './index.css';  // Keep your global styles

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AdminDashboard />
//   </StrictMode>
// ); 