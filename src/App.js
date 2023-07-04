
import { Route, Routes ,Outlet} from "react-router-dom";
import BlogCard from "./components/Card";
import Login from "./components/Login";

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

function App() {
  return (
    <div className="App bg-black text-white  min-h-screen    ">
     
      <Routes>
        <Route path="/" element={<OutletLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="login" element={<Login />} />
          <Route path="trade" element={<Trade />} />
          <Route path="earning" element={<Earning />} />
          <Route path="refferal" element={<Referral />} />
          <Route path="extrabonus" element={<ExrtaBonus />} />

          <Route path="legal" element={<Legal />} />
          <Route path="resources" element={<Resources />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signup" element={<Signup />} />
        

      </Routes>
      
      {/* <Signup/> */}
   
 
      {/*<Sidebar/>*/}
    </div>
  );
}

export default App;


function OutletLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}