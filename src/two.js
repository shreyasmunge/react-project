import React, { useEffect, useState } from 'react'; 
import User from './user'; 
function  GithubProfileFinder(){  
    const [userName,setUserName] = useState('shreyasmunge');
    const [userData,setUserData] = useState(null);
    async function fetchGithubUserData(){
        const res = await fetch (`https://api.github.com/users/${userName}`)
        const data = await res.json();
        if (data){
            setUserData(data)
            setUserName('')
        }
        console.log(data);
    }
    function handleSubmit(){
        fetchGithubUserData()

    }   
    useEffect(()=>{
        fetchGithubUserData();
    },[]);
    return (     
    <div>         
       <div className='searchBox'>
        <input
        name='search-by-user-name'
        type='text'
        placeholder='Search Github Username'
        value={userName}
        onChange={(event)=>setUserName(event.target.value)}
        />
        <button className='searchbutton' onClick={handleSubmit}>Search</button>

        </div>  
        { userData!==null ?<User user={userData}/>:null}
        </div>
        ); 
    }  
    
export default GithubProfileFinder; 