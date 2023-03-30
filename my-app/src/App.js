import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/BODY/USER/Pages/Home/user";
import Login from "./components/BODY/LOGIN/Login";
import Signup from "./components/BODY/REGISTER/Register";
import Recurter from "./components/BODY/RECRUTER/Recruter";
import Body from "./components/cvgenerator/Body/Body";
import Upload from "./components/BODY/USER/Pages/UploadFiles/Upload";
import LandingPage from "./components/BODY/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />}/>
        <Route exact path="/user" element={<User />}/>
        <Route exact path="/recruiter" element={<Recurter />}/>
        <Route exact path="/cvmaker" element={<Body />}/>
        <Route exact path="/upload" element={<Upload />}/>
      </Routes>
    </Router>
  );
}

export default App;
