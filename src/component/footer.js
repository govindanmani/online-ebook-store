import React from "react";
import './footer.css'
import { Link,Routes,Route } from "react-router-dom"
import {Button} from '@mui/material';
// import Terms from "./terms";
// import Terms from "./component/terms";
import Terms from "./terms";
function FoterDis (){
    return(
        
            <div className="container4">
                 
                <div class="final_box">
                    <div class="final1">
                         <li><h3 >About Us</h3></li>
                         <li>
                          
                           <Link to="/terms" className="terms" ><h4>Terms for use</h4></Link>
                           
                           
                         </li>
                         <li>Our Mission</li>
                         <li>Our Teams</li>
                         <li>News</li>
                         <li>program</li>
                         <li>Events</li>
                         <li>Volunteering</li>
                    </div>
                    <div class="final1">
                        <li><h3 >More To Explore</h3></li>
                       
                         <li>Visuals Arts & Books &Poems</li>
                         <li>Eco-Adventure program</li>
                         <li>STEAM Lecture Poems</li>
                         <li>Crafts & Cuisines Workshop</li>
                         <li>Art & Melody</li>
                    </div>
                    <div class="final1">
                          <Button 
                            sx={{marginTop: 3 ,borderRadius:3}}
                            variant="contained" color="warning" type="submit"
                                >Completion</Button>
                          <br/>
                          <li><h3 >Contacts</h3></li>
                          <li>1/17,BK PUDUR,JM Hostal</li>
                          <li>Coimbatore,Pin:606 107</li>
                          <li>Phone:+1 240 345 6789</li>
                          <li>Email:NagaArjun@gmail.com</li>
                    {/* </div>
                    <div class="icon"> */}
                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        <a href=""><i class="fa-brands fa-instagram" ></i></a>
                        
                    </div>

                </div>

            </div>
    )
}
export default FoterDis;