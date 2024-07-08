import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>

        <Routes>
          <Route path="/" element={<Login/>} ></Route>
        </Routes>

      </Router>
    </>
  )
}

export default App
