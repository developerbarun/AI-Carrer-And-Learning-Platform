import { useState } from "react";
import { useRecoilState } from "recoil";
import { authState, themeState } from "../state/atoms";
import { useNavigate } from "react-router-dom";

export default function AuthPage({ isSignup }) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [, setAuth] = useRecoilState(authState);
  const [theme] = useRecoilState(themeState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = isSignup
      ? "http://localhost:3000/api/v1/users/register"
      : "http://localhost:3000/api/v1/users/login";

    const payload = isSignup
      ? formData
      : { email: formData.email, password: formData.password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");

      localStorage.setItem("token", data.token);
      setAuth({ token: data.token, isAuthenticated: true });

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"}`}>
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gray-900 border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gold mb-6">{isSignup ? "Create Account" : "Welcome Back"}</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-gold outline-none transition-all"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-gold outline-none transition-all"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-gold outline-none transition-all"
          />
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold rounded-lg bg-gold hover:bg-yellow-500 transition-all duration-300 shadow-md"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
