
import { Route, Routes ,Outlet, Navigate} from "react-router-dom";
import BlogCard from "./components/Card";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";


import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard/index";
import Home from "./pages/Home";
import Trade from "./pages/Trade";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Earning from "./pages/Earning";
import Legal from "./pages/Legal";
import Resources from "./pages/Resources";
import Referral from "./pages/Referral"; 
import Signup from "./pages/Signup";
import ExrtaBonus from "./pages/ExrtaBonus";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App bg-black text-white  min-h-screen    ">
     
      <Routes>
        <Route path="/" element={<OutletLayout isLoggedIn={isLoggedIn} />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="trade" element={<Trade />} />
          <Route path="earning" element={<Earning />} />
          <Route path="refferal" element={<Referral />} />
          <Route path="extrabonus" element={<ExrtaBonus />} />

          <Route path="legal" element={<Legal />} />
          <Route path="resources" element={<Resources />} />
        </Route>
        <Route path="dashboard" element={isLoggedIn ?  <Dashboard onLogout={handleLogout}  /> : <Navigate to="/login" /> } />
        <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="login" element={isLoggedIn ? <Navigate to="/dashboard"/> : <Login setIsLoggedIn={setIsLoggedIn} />} />


        

      </Routes>
      
      {/* <Signup/> */}
   
 
      {/*<Sidebar/>*/}
    </div>
  );
}

export default App;


function OutletLayout({isLoggedIn}) {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </>
  );
}