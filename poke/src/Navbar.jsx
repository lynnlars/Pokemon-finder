import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(){
   return(
    <div className="nav">
        <h1 className="welcome">Pokemón Card Deck</h1>
        <div className="bar-bttns">
            <Link to="/"><button className="navbttn">Home</button></Link>
            <Link to="/about"><button className="navbttn">About</button></Link>
            <Link to="/starter"><button className="navbttn">Get Random</button></Link>
        </div>
    </div>
   )
}