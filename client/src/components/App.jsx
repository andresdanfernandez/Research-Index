import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
