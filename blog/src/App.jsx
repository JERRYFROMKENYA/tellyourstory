import {Topbar} from "./components";
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import {Homepage, Single, Write, Login, Register, Settings} from "./pages";
import {useState} from "react";


function App() {
  const [currentUser, setCurrentUser]=useState(true)
  return (
    <>
      <Router>
      <Topbar/>
        <Routes>
        <Route exact path={"/"} element={<Homepage/>}/>
          <Route path={"/post"} element={<Homepage/>}/>
          <Route path={"/register"} element={currentUser ?  <Homepage/> : <Register/>}/>
          <Route path={"/post/:id"} element={<Single/>}/>
          <Route path={"/write"} element={currentUser ?<Write/> : <Login/>}/>
          <Route path={"/settings"} element={currentUser? <Settings/>:<Login/>}/>
        </Routes>
      </Router>


    </>
  )
}

export default App
