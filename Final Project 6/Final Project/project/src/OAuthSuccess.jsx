import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function OAuthSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      // Store JWT in localStorage or context
      localStorage.setItem("token", token);
      alert("Google login successful!");
      navigate("/"); // redirect to home/dashboard
    } else {
      alert("No token received!");
      navigate("/login");
    }
  }, [searchParams, navigate]);

  return <p>Logging you in...</p>;
}