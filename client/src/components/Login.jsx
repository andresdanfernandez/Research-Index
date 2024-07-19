import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("https://research-index-api.vercel.app/login", {
        email, password
      });
      
      if (response.data.status === "success") {
        localStorage.setItem("userId", response.data.userId);
        navigate("/home", {
          state: {
            doneReading: response.data.doneReading,
            toRead: response.data.toRead
          }
        });
      } else if (response.data.status === "notexist") {
        alert("User has not signed up");
      } else if (response.data.status === "incorrect password") {
        alert("Incorrect password");
      } else {
        alert("Login failed");
      }
    } catch (e) {
      console.error("Login error:", e);
      alert("An error occurred during login");
    }
  }


    return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-stone-900">
      <div className="bg-secondary p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl sm:text-3xl text-stone-300 font-bold mb-6 text-center">Login</h1>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-stone-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none text-black"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-stone-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none text-black"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-stone-100 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-right">
          <Link to="/signup" className="text-sm text-slate-300 hover:text-slate-100 underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
    )
}

export default Login;