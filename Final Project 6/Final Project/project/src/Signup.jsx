// import React, { useState } from "react"
// import "./Signup.css"

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   })

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!")
//       return
//     }
//     console.log("Sign up attempt:", formData)
//     alert("Account created successfully! (Demo)")
//   }

//   const handleGoogleSignup = () => {
//     console.log("Google Sign-Up clicked")
//     alert("Google Sign-Up (Demo)")
//   }

//   return (
//     <div className="signup-page">

//       {/* HERO HEADER */}
//       <header className="signup-header">
//         <h1>💚 EternalVows</h1>
//       </header>

//       {/* SIGN UP FORM */}
//       <main className="signup-container">
//         <div className="signup-card">
//           <h2>Create Your Account</h2>
//           <p className="signup-subtitle">
//             Join us and start planning your dream celebration
//           </p>

//           <form onSubmit={handleSubmit} className="signup-form">

//             <div className="input-group">
//               <label htmlFor="name">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Your full name"
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="your@email.com"
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 placeholder="Create a strong password"
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 placeholder="Re-enter your password"
//               />
//             </div>

//             <button type="submit" className="signup-btn">
//               Create Account
//             </button>
//           </form>

//           <div className="divider">
//             <span>or</span>
//           </div>

//           <button onClick={handleGoogleSignup} className="google-btn">
//             Sign up with Google
//           </button>

//           <p className="login-link">
//             Already have an account? <a href="/Login">Log in</a>
//           </p>
//         </div>
//       </main>
//     </div>
//   )
// }


//////////MARY'S CODE IS ABOVE/////////
import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5002/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data.error || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Google signup via redirect
  const handleGoogleSignup = () => {
    window.location.href = "http://localhost:5002/api/auth/google";
  };

  return (
    <div className="signup-page">
      <header className="signup-header">
        <h1>💚 EternalVows</h1>
      </header>

      <main className="signup-container">
        <div className="signup-card">
          <h2>Create Your Account</h2>
          <p className="signup-subtitle">
            Join us and start planning your dream celebration
          </p>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="input-group password-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a strong password"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
               
              </button>
            </div>

            <div className="input-group password-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter your password"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
               
              </button>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button onClick={handleGoogleSignup} className="google-btn" disabled={loading}>
            Sign up with Google
          </button>

          <p className="login-link">
            Already have an account? <Link to="/login" className="nav-link">Log in</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
