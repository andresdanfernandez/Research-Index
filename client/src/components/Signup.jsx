import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Signup() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    axios.defaults.baseURL = "https://research-index-api.vercel.app";
  
    try {
      const response = await axios.post("https://research-index-api.vercel.app/signup", {
        email, password
      });
      
      if (response.data.status === "exist") {
        alert("User already has an account");
      } else if (response.data.status === "success") {
        localStorage.setItem("userId", response.data.userId);
        navigate("/home", {
          state: {
            doneReading: response.data.doneReading,
            toRead: response.data.toRead
          }
        });
      } else {
        alert("Signup failed" + (response.data.message || "Unknown Error"));
      }
    } catch (e) {
      console.error("Signup error:", e);
      alert("An error occurred during signup" + (e.response?.data?.message || e.message));
    }
  }


    return (
    <div className="flex justify-center items-center max-h-96 mt-16">
      <div className="bg-secondary p-8 rounded-lg shadow-md h-96 w-[450px] min-w-[350] ">
        <h1 className="text-3xl text-stone-300 font-bold mb-6 text-center">Sign up</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-stone-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
              placeholder="Email"
              required
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-stone-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
              placeholder="Password"
              required
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </div> 
          <button
            type="submit"
            onClick={submit}
            className="w-full bg-blue-500 text-stone-100 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Sign Up
          </button>
        </form>
        <br/>
        <div className="flex float-right underline text-slate-300" >
          <Link to="/">Login</Link>
        </div>
        
      </div>
    </div>
    )
}

export default Signup;