import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./component/AuthContext"; // Import AuthProvider
import PrivateRoute from "./component/PrivateRoute"; // Import PrivateRoute
import Logo from "./component/Logo";
import LotteryHome from "./component/Lottery";
import ADM from "./component/admLog"; // Login page
import AdminNavbar from "./component/adminNavbar";
import Pannel from "./component/pannel";
import Jodi from "./component/jodi";
import Footer from "./component/fotter";
import AdminLottery from "./component/admin-lottery";
import AdminPannel from "./component/admin-weekly";
import NotFoundPage from "./component/404"


function App() {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <div className="app">
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/logo" element={<Logo />} />
            <Route path="/login" element={<ADM />} />
            <Route path="/" element={<LotteryHome />} />
            <Route path="/lottery/:id" element={<Pannel />} />
            <Route path="/jodi/:id" element={<Jodi />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/admin-navbar" element={<PrivateRoute><AdminNavbar /></PrivateRoute>} />

            {/* Private/Admin Routes */}
            <Route
              path="/admin-lottery"
              element={
                <PrivateRoute>
                  <AdminLottery />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin-weekly/:id"
              element={
                
                  <AdminPannel />
                
              }
            />
          </Routes>
            {/* <Route
              path="/admin-weekly/:id"
              element={
                <PrivateRoute>
                  <AdminPannel />
                </PrivateRoute>
              }
            />
          </Routes> */}
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;




// import { createContext, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Logo from "./component/Logo";
// import LotteryHome from "./component/Lottery";
// import ADM from "./component/admLog"
// import AdminNavbar from "./component/adminNavbar"
// import Pannel from "./component/pannel"
// import Jodi from "./component/jodi"
// import Footer from "./component/fotter"
// import AdminLottery from "./component/admin-lottery"
// import AdminPannel from "./component/admin-weekly";






// function App() {

//   return (
//     <div className="app">
//         <BrowserRouter>
//         <Routes>
//           <Route path="/logo" element={<Logo/>} />
//           <Route path="/login" element={<ADM/>}/>/
//           <Route path="/admin-lottery" element={<AdminLottery/>}/>
//           <Route path="/admin-weekly/:id" element={<AdminPannel/>}/> 
//           <Route path="/" element={<LotteryHome />}/>
//           <Route path="/lottery/:id" element={<Pannel/>} />
//           <Route path="/jodi/:id" element={<Jodi/>} />
//           <Route path="/admin-navbar" element={<AdminNavbar/>}/>
//           <Route path="/footer" element={<Footer/>}/> 
//         </Routes>
//         </BrowserRouter>
//     </div>
//   );
// }
// export default App;
