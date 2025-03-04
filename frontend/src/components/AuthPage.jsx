export function AuthPage({ setAuth }) {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const endpoint = isRegister ? "http://localhost:3000/api/v1/users/register" : "http://localhost:3000/api/v1/users/login";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setAuth(true);
      } else {
        alert(data.message || "Authentication failed");
      }
    };
  
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="p-8 rounded-lg shadow-lg bg-gray-800 w-96">
          <h2 className="text-2xl font-bold mb-4">{isRegister ? "Register" : "Login"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 bg-gray-700 rounded"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-700 rounded"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 bg-gray-700 rounded"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button type="submit" className="w-full bg-blue-600 p-2 rounded">
              {isRegister ? "Register" : "Login"}
            </button>
          </form>
          <button onClick={() => setIsRegister(!isRegister)} className="mt-4 text-blue-400">
            {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    );
  }
  