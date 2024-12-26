import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPortal from "./component/adminPortal";
import Add from "./component/add";
import LotteryHome from "./component/Lottery";
import MilanMorningPannel from "./component/MilanMorningPannel"
import MilanMorningChart from "./component/data";
import Sridevi from "./component/srideviPannel";
import KalyanMorning from "./component/Kalyanmorning"
import Padmavathi from "./component/padmavathi"
import MadhuriPannel from "./component/madhuriPanel"
import ADM from "./component/admLog"
import AdminNavbar from "./component/adminNavbar"


function App() {

  return (
    <div className="app">
        <BrowserRouter>
        <Routes>
          
          <Route path="/admin" element={<ADM/>}/>
          <Route path="/admin-navbar" element={<AdminNavbar/>}/>
          <Route path="/" element={<LotteryHome />}/>
          <Route path="/milan-morning-pannel" element={<MilanMorningPannel/>}/>
          <Route path="/seidevi-pannel" element={<Sridevi />}/>
          <Route path="/kalyan-morning" element={<KalyanMorning />}/>
          <Route path="/padmavathi" element={<Padmavathi />}/>
          <Route path="/madhuriPannel>" element={<MadhuriPannel/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}
export default App;




{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Land/>}/>
  <Route path="/adminlog" element={<ADM/>}/>
  <Route path="/userlog" element={<User/>}/>
  <Route path="/admin/*" element={<AdminPortal/>}/>
  
  </Routes>
</BrowserRouter> */}
{/* <New/> */ }

{/* <State/> */ }
{/* <Effect/> }
<Comp1 data={start} />
<Comp2 fun={handleTouch}/>
<Comp3/> */}
