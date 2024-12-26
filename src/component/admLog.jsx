import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADM = () => {

    let navigate=useNavigate()
    let login = (m)=>{
        m.preventDefault();
        let data= [email,password]

        
        if(email=="lottery@gmail.com" && password =="4321" ){
        navigate("/admin-navbar")
        }else{
            alert("Invalid details")
        }
    }
    let [email,setEmail] = useState("")
        let [password,setPassword]=useState("")

    
    return (  
        <div className="admLogin">
            <h1>ADMIN login</h1>
            <div className="form">

                <form onSubmit={login}>
                    <div className="email">
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}   placeholder="enter email" />
                </div>
                <div className="password">
                    <input type="password" required value={password} onChange={(s)=>setPassword(s.target.value)}  placeholder="enter password" />
                </div>
            <button>LOGIN</button>
            </form>
            </div>
        </div>
    );
}
 
export default ADM;