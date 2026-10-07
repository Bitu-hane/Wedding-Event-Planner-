// import React, { useState } from "react"
// import "./Login.css"
// import { Link } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Login attempt:", { email, password })
//     // Add your login logic here (e.g., Firebase, API call)
//     alert("Login successful! (Demo)")
//   }

//   const handleGoogleLogin = () => {
//     console.log("Google login clicked")
//     // Add Google OAuth logic here
//     alert("Google Sign-In clicked (Demo)")
//   }

//   return (
//     <div className="login-page">

//       {/* HERO HEADER */}
//       <header className="login-header">
//         <h1>💚 EternalVows</h1>
//       </header>

//       {/* LOGIN FORM */}
//       <main className="login-container">
//         <div className="login-card">
//           <h2>Welcome Back</h2>
//           <p className="login-subtitle">Sign in to continue planning your dream celebration</p>

//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="your@email.com"
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="••••••••"
//               />
//             </div>

//             <button type="submit" className="login-btns">
//               Login
//             </button>
//           </form>

//           <div className="divider">
//             <span>or</span>
//           </div>

//           <button onClick={handleGoogleLogin} className="google-btns">
//             Continue with Google
//           </button>

//           <p className="signup-link">
//             Don’t have an account? <Link to="/Signup" className="nav-link">Sign Up</Link>
//           </p>
//         </div>
//       </main>
//     </div>
//   )
// }



///////MARY'S CODE IS ABOVE/////////

// import React, { useState } from "react";
// import "./Login.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await axios.post("http://localhost:5001/api/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));
//       alert("Login successful!");
//       navigate("/"); // Redirect to dashboard or home
//     } catch (err) {
//       setError(err.response?.data.error || "Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Google login via redirect
//   const handleGoogleLogin = () => {
//     window.location.href = "http://localhost:5001/api/auth/google";
//   };

//   return (
//     <div className="login-page">
//       <header className="login-header">
//         <h1>💚 EternalVows</h1>
//       </header>

//       <main className="login-container">
//         <div className="login-card">
//           <h2>Welcome Back</h2>
//           <p className="login-subtitle">Sign in to continue planning your dream celebration</p>

//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="your@email.com"
//                 aria-invalid={error ? "true" : "false"}
//               />
//             </div>

//             <div className="input-group password-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="••••••••"
//               />
//               <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>

//             {error && <p className="error-message">{error}</p>}

//             <button type="submit" className="login-btn" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <div className="divider">
//             <span>or</span>
//           </div>

//           <button onClick={handleGoogleLogin} className="google-btn" disabled={loading}>
//             Continue with Google
//           </button>

//           <p className="signup-link">
//             Don’t have an account? <Link to="/signup" className="nav-link">Sign Up</Link>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }






// import React, { useState } from "react";
// import "./Login.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:5002/api/auth/login",
//         { email, password },
//         { withCredentials: true } // ← Important: sends/accepts cookies
//       );

//       // Optional: store minimal user info locally if needed (but not token!)
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       alert("Login successful!");
//       navigate("/"); // or "/dashboard"
//     } catch (err) {
//       setError(err.response?.data?.error || "Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = () => {
//     // Redirect to backend Google auth route – cookie will be set automatically
//     window.location.href = "http://localhost:5002/api/auth/google";
//   };

//   return (
//     <div className="login-page">
//       <header className="login-header">
//         <h1>💚 EternalVows</h1>
//       </header>

//       <main className="login-container">
//         <div className="login-card">
//           <h2>Welcome Back</h2>
//           <p className="login-subtitle">Sign in to continue planning your dream celebration</p>

//           {error && <p className="error-message">{error}</p>}

//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="your@email.com"
//                 aria-invalid={error ? "true" : "false"}
//               />
//             </div>

//             <div className="input-group password-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="••••••••"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="eye-btn"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>

//             <button type="submit" className="login-btn" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <div className="divider">
//             <span>or</span>
//           </div>

//           <button
//             onClick={handleGoogleLogin}
//             className="google-btn"
//             disabled={loading}
//           >
//             Continue with Google
//           </button>

//           <p className="signup-link">
//             Don’t have an account?{" "}
//             <Link to="/signup" className="nav-link">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }









import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5002/api/auth/login", {
        email,
        password,
      });

      // Store auth data
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");

      // Check if user was redirected from BookNow with pending cart item
      const from = location.state?.from || "/";
      const pendingVendorId = localStorage.getItem("pendingAddToCart");

      if (pendingVendorId) {
        // Automatically add the pending item now that we're logged in
        try {
          await axios.post(
            "http://localhost:5002/api/cart/add",
            { vendorId: pendingVendorId },
            {
              headers: {
                Authorization: `Bearer ${res.data.token}`,
              },
            }
          );
          alert("Pending item added to your cart!");
          localStorage.removeItem("pendingAddToCart");
        } catch (addErr) {
          console.error("Failed to add pending item:", addErr);
          alert("Item could not be added automatically. Please try again.");
        }
      }

      // Redirect to intended page or home
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err.response?.data || err);
      const errMsg = err.response?.data?.error || "Login failed. Please try again.";
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5002/api/auth/google";
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <h1>💚 EternalVows</h1>
      </header>

      <main className="login-container">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">
            Sign in to continue planning your dream celebration
          </p>

          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                disabled={loading}
              />
            </div>

            <div className="input-group password-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="eye-btn"
                disabled={loading}
              >

              </button>
            </div>

            <button type="submit" className="login-btns" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="google-btn"
            disabled={loading}
          >
            Continue with Google
          </button>

          <p className="signup-link">
            Don’t have an account? <Link to="/signup" className="nav-link">Sign Up</Link>
          </p>
        </div>
      </main>
    </div>
  );
}


//the above is my code 


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:5002/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );

//       // ✅ SAVE TOKEN (THIS IS THE KEY FIX)
//       localStorage.setItem("token", res.data.token);

//       alert("Login successful");
//       navigate("/"); // or "/vendors" or wherever your home page is
//     } catch (err) {
//       alert(
//         err.response?.data?.message || "Login failed, please try again"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <div style={{ marginBottom: "10px" }}>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px" }}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px" }}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           style={{ width: "100%", padding: "10px" }}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;





