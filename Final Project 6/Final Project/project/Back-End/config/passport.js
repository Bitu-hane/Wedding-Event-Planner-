const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  console.error("❌ GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET not set in .env");
} else {
  console.log("✅ Passport Google strategy loading...");

  // MUST match Google Cloud Console EXACTLY
  const CALLBACK_URL = "http://localhost:5002/api/auth/google/callback";

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;
          if (!email) {
            return done(new Error("No email received from Google"), null);
          }

          const name = profile.displayName || "Unknown User";

          let user = await User.findOne({ email });

          if (!user) {
            user = await User.create({
              name,
              email,
              googleId: profile.id,
              authProvider: "google",
            });
            console.log(`🆕 New Google user created: ${email}`);
          } else {
            console.log(`🔐 Existing Google user logged in: ${email}`);
          }

          return done(null, user);
        } catch (err) {
          console.error("❌ Google OAuth error:", err);
          return done(err, null);
        }
      }
    )
  );

  console.log(`Google OAuth callbackURL configured: ${CALLBACK_URL}`);
}

// Required for sessions
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});