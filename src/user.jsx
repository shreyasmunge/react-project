export default function User({user}){
    const { avatar_url,followers,following,public_repos,login,name} = user;

    return (<div>
        <div >
            <img className="profile" src={avatar_url}/>
        </div>
        <div><p>Name: {login || name}</p></div>
        <div>
           <p>Public Repos</p>
           <p>{public_repos}</p> 
        </div>
        <div>
            <p>Followers</p>
            <p>{followers}</p>
        </div>
        <div>
            <p>Following</p>
            <p>{following}</p>
        </div>

    </div>);
}