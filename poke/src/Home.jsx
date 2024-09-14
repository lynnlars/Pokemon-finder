//import React, {useContext, useEffect} from "react";
//import {Context} from "./ContextProvider"
import {Link} from 'react-router-dom'


export default function Home(){
    //home page 
    //button to go to mypoke,get starter, and pokeList
    return(
        <div className="home">
            
            <p className="home-p">Below you will be able to search for pokemon by name or type. Click their cards to see more about them!</p>
            <p className="disclaimer">**This is built off of an API with limited access, please note not all Pokemon are available**</p>
            <hr/>
            <div className='fake-card'>

            </div>
            <Link to="/pokelist"><button className="sbttn">Search Pokémon</button></Link>
            
        </div>
    )
}