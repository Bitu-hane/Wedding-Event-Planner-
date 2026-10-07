// const express = require("express");
// const passport = require("passport");
// const User = require("../models/User");
// const jwt = require("jsonwebtoken");

// const router = express.Router();
// const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// // =======================
// // SIGNUP
// // =======================
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (await User.findOne({ email })) {
//       return res.status(400).json({ error: "Email already exists" });
//     }

//     const user = new User({ name, email, password });
//     await user.save();

//     res.status(201).json({ message: "Account created successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error creating account" });
//   }
// });

// // =======================
// // LOGIN (LOCAL)
// // =======================
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user || !(await user.comparePassword(password))) {
//       return res.status(401).json({ error: "Email or password is incorrect" });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

//     res.json({
//       message: "Login successful",
//       token,
//       user: { name: user.name, email: user.email }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error logging in" });
//   }
// });

// // =======================
// // GOOGLE OAUTH (JWT, NO SESSIONS)
// // =======================

// // Start Google login
// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//     session: false
//   })
// );

// // Google callback
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "http://localhost:5173/login",
//     session: false
//   }),
//   (req, res) => {
//     // Create JWT
//     const token = jwt.sign(
//       { id: req.user._id },
//       JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     // Redirect to frontend with token
//     res.redirect(
//       `http://localhost:5173/oauth-success?token=${token}`
//     );
//   }
// );


// module.exports = router;








// NEW CODE WITH SESSIONS AND COOKIES

const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error("JWT_SECRET is not set in .env file! Cannot start server.");
  process.exit(1); // Crash early in production
}

// =======================
// SIGNUP
// =======================
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email and password are required" });
    }

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash password (very important!)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Account created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Error creating account" });
  }
});

// =======================
// LOGIN (LOCAL)
// =======================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ error: "Email or password is incorrect" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Email or password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.json({
      message: "Login successful",
      token,
      user: { name: user.name, email: user.email, _id: user._id },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Error logging in" });
  }
});

// =======================
// GOOGLE OAUTH (JWT, NO SESSIONS)
// =======================

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login?error=google_failed",
    session: false,
  }),
  (req, res) => {
    try {
      const token = jwt.sign({ id: req.user._id }, JWT_SECRET, { expiresIn: "7d" });
      res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
    } catch (err) {
      console.error("Google callback error:", err);
      res.redirect("http://localhost:5173/login?error=token_failed");
    }
  }
);

// =======================
// JWT AUTH MIDDLEWARE
// =======================
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Forbidden: Invalid or expired token" });
  }
};

// =======================
// GET CURRENT USER
// =======================
router.get("/me", authenticateJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ user });
  } catch (err) {
    console.error("Get me error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;





// const express = require("express");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs"); // ← add this if not already
// const User = require("../models/User");

// const router = express.Router();

// const JWT_SECRET = process.env.JWT_SECRET;
// if (!JWT_SECRET) {
//   console.error("JWT_SECRET is not set in environment variables!");
//   process.exit(1); // crash early in production
// }

// // =======================
// // SIGNUP
// // =======================
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "Name, email and password are required" });
//     }

//     if (await User.findOne({ email })) {
//       return res.status(400).json({ error: "Email already exists" });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: "Account created successfully" });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({ error: "Error creating account" });
//   }
// });

// // =======================
// // LOGIN (LOCAL)
// // =======================
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email }).select("+password");
//     if (!user) {
//       return res.status(401).json({ error: "Email or password is incorrect" });
//     }

//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({ error: "Email or password is incorrect" });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

//     res.json({
//       message: "Login successful",
//       token,
//       user: { name: user.name, email: user.email, _id: user._id },
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ error: "Error logging in" });
//   }
// });

// // =======================
// // GOOGLE OAUTH (JWT, NO SESSIONS)
// // =======================

// // Start Google login
// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//     session: false,
//   })
// );

// // Google callback
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "http://localhost:5173/login?error=google_failed",
//     session: false,
//   }),
//   (req, res) => {
//     try {
//       const token = jwt.sign({ id: req.user._id }, JWT_SECRET, { expiresIn: "7d" });
//       // Redirect with token (frontend will store it)
//       res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
//     } catch (err) {
//       console.error("Google callback error:", err);
//       res.redirect("http://localhost:5173/login?error=token_failed");
//     }
//   }
// );

// // =======================
// // JWT Authentication Middleware (used in other routes)
// // =======================
// const authenticateJWT = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized: No token provided" });
//   }

//   try {
//     const payload = jwt.verify(token, JWT_SECRET);
//     req.user = payload; // { id: user._id }
//     next();
//   } catch (err) {
//     return res.status(403).json({ error: "Forbidden: Invalid or expired token" });
//   }
// };

// // =======================
// // GET CURRENT USER
// // =======================
// router.get("/me", authenticateJWT, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json({ user });
//   } catch (err) {
//     console.error("Get me error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = { router, authenticateJWT }; // export both if you use middleware elsewhere