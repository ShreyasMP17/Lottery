import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // Import AuthContext
import "../styles/login.css";

const ADM = () => {
  const { login } = useContext(AuthContext); // Use AuthContext for login
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your actual authentication logic
    if (email === "lottery@gmail.com" && password === "4321") {
      login(); // Set user as authenticated
      navigate("/admin-navbar"); // Redirect to admin navbar
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="admLogin">
      <div className="logo">
        <img src="dplogo.png" alt="Logo" style={{ width: "200px", height: "auto" }} />
      </div>

      <div className="form">
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="password">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default ADM;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../styles/login.css'

// const ADM = () => {

//     let navigate=useNavigate()
//     let login = (m)=>{
//         m.preventDefault();
//         let data= [email,password]

        
//         if(email=="lottery@gmail.com" && password =="4321" ){
//         navigate("/admin-navbar")
//         }else{
//             alert("Invalid details")
//         }
//     }
//     let [email,setEmail] = useState("")
//         let [password,setPassword]=useState("")

    
//         return (
//             <div className="admLogin">
//               <div className="logo">
//                 <img src="dplogo.png" alt="Logo" style={{ width: "200px", height: "auto" }} />
//               </div>
              
//               <div className="form">
//               <h1>Admin Login</h1>
//                 <form onSubmit={login}>
//                   <div className="email">
//                     <input
//                       type="email"
//                       required
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter email"
//                     />
//                   </div>
//                   <div className="password">
//                     <input
//                       type="password"
//                       required
//                       value={password}
//                       onChange={(s) => setPassword(s.target.value)}
//                       placeholder="Enter password"
//                     />
//                   </div>
//                   <button>LOGIN</button>
//                 </form>
//               </div>
//             </div>
//           );
// }
 
// export default ADM;