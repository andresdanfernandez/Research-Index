import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Signup() {

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      
        await axios.post("http://localhost:8000/signup", {
          email,password
        })
        .then(res => {
          if(res.data == "exist") {
            alert("User already has an account");
          }
          else if (res.data == "notexist") {
            history("/home");
          }
        })
        .catch(e => {
          alert("wrong credentials");
          console.log(e);
        })

    } catch(e) {
        console.log(e);
    }
  }


    return (
    <div className="flex justify-center items-center max-h-96 mt-16">
      <div className="bg-secondary p-8 rounded-lg shadow-md h-96 w-[450px] min-w-[350] ">
        <h1 className="text-3xl text-stone-300 font-bold mb-6 text-center">Sign up</h1>
        <form action="POST">
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