import React, { useEffect } from 'react';  
import { useState } from 'react';
function One(){ 
    const [quote,setQuote]=useState(""); 
    const [author,setAuthor]=useState("");
    async function getQuote(){
        const res= await fetch('https://api.quotable.io/random');
        const data = await res.json();
        setQuote(data.content);
        setAuthor(data.author);

    } 
    useEffect(function(){
        getQuote();
        
    },[]);

    return (     
    <div>         
        <h1> Quote </h1>  
        <h2>{quote}</h2> 
        <p>{author}</p>
        <button className='nextbutton' onClick={getQuote}>Next</button>  
        </div>
        ); 
    }  
    
export default One; 