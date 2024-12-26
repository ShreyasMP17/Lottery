import { useRef, useState } from "react";

const New = () => {
    let [name,setName]=useState("")
    let refValue=useRef('')
    let handleClick=()=>{
        console.log(refValue.current.value);
    }
    
    return ( 
        <div className="hunk">
            <div>
                <input type="text" name=""  id="" ref={refValue} value={name} onChange={(e)=>setName(e.target.value)}  />
                <button onClick={handleClick}>tap</button>
            </div>
        </div>
     );
}
 
export default New;