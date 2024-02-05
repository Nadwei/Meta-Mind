import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
    
    return(
        <header id="header">
            <nav id="navbar">
                <a className="site-title-link">
                   <h1 className="site-title">Meta Mind</h1>
                </a>
                <div id="navlink-div">
               <NavLink  className="all-navlinks navlink-home" to="/">Home</NavLink>
              <NavLink  className="all-navlinks navlink-reports" to="/Reports" >Reports</NavLink>
             <NavLink className="all-navlinks navlink-about" to="/About" >About</NavLink>
             </div>
            </nav>
        </header>
    )
}