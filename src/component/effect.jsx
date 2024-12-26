import { useEffect } from "react";
import { useState } from "react";

const Effect = ()=>{


    let [players,setPlayers]=useState([])
    useEffect(()=>{
        let fetching = async()=>{
            let response = await fetch("http://localhost:3000/players")
            let data =await response.json()
            setPlayers(data)
        }
        fetching()
        },[])
    
    return(
        <div className="effect">
{players.map(data=>(
    <div className="new">
<h1>{data.name}</h1>
<h1>{data.age}</h1>
    </div>
    
))}
        </div>
    );
}
export default Effect;