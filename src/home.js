import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return (
        <header>
            
           
            
            <Link  className="first" to ='/one'>Quotes
            
            </Link> 
            <p>Click on 'Quotes' for uplifting quotes.</p>
            <br></br>
            <br></br>
            <Link className="second" to ='/two'>Github Profile Finder</Link>
            <p>Click on 'Github Profile Finder' to discover GitHub profiles. </p>
            
            
        </header> 
        
    );
}

export default Home;