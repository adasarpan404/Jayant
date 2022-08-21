import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiStepForm from "./Pages/MultiStepForm";
import PhoneOTPVerification from "./Pages/PhoneOTPVerification";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<MultiStepForm/>} />
            
          
          <Route path="/phoneVerification" element={<PhoneOTPVerification />}/>
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
