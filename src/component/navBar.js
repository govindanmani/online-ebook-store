import React from "react";
import './footer.css'
import { BrowserRouter,Link,Routes,Route } from "react-router-dom"
import AddFunction1 from "./registration"
import AddFunction5 from "./loginUi"
import ReturnStar from "./home";
// import About from "./about";
import './Navbar.css';
import AboutAdd from "./about1";
import About from "./about";
import Profile from "./profile";
import { MenuItem, MenuList } from "@mui/material";
export const NavBar=()=>{
    return(
      <div>    
      {/* <BrowserRouter  > */}
      
        <nav className="navbar navbar-expand-lg bg-dark-subtle" > 

       {/* <li className="logo">< i class="fa-solid fa-book"></i> BookHaven</li> */}

       <div className="logo1">
       < i class="fa-solid fa-book"></i>
       <h2 id="margin">BookHaven</h2>
       </div>
            <ul className="navbar-nav" id="Hi">
                   <div className="kas"> 
                <li className="nav-item">
                    <Link to="/" className="nav-link"><h3>Home</h3></Link>
                </li>
                <li className="nav-item">
                  
                      <Link to="/About1" className="nav-link"><h3>AboutUs</h3></Link>        
                </li>
                {/* <li className="nav-item">
                      <Link to="" className="nav-link">
                        
                        <datalist valure="commuinty">
                        <option value="group">
                        <option value="quotes">
                        </datalist>
                      </Link>
                </li> */}
                  
                <li className="nav-item">
                  <Link to="/contactUs" className="nav-link" ><h3 className="Contact">ContactUs</h3></Link>
                </li>
                <li className="nav-item">
                  <Link to="/registration" className="nav-link" ><h3 className="login">Registration</h3></Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link"><h3 className="login1">Login</h3></Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link"><h3 className="profile"><i class="fa-solid fa-user"></i></h3></Link>
                </li>
                </div>
                {/* <li>
                <div class="search" >
                <input type="" placeholder="search"  style={{marginBottom:"50px"}}></input>
            </div>
            
                </li> */}

            </ul>
        </nav>
        <div>
          {/* <footerApp /> */}
        </div>
        
            {/* <Route exact path="/About1" element={<About />} /> */}
      
      {/* <About /> */}
      {/* </BrowserRouter> */}
      {/* <AboutAdd /> */}
      </div>
    )
}