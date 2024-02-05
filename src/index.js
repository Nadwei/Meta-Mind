import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Reports from "./pages/Reports";


function App() {
return(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Reports" element={<Reports/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);

}

ReactDOM.render(<App/>, document.getElementById("root"));