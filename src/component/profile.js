import React, { useContext } from "react";
import './profile.css'
import { Button } from "@mui/material";
import { MyProvider } from "../App";


function Profile()
{
    const context = useContext(MyProvider)



    return(
        <div>     
            <div class="alignn">
                <br />
                <div class="center">
                <i class="fa-solid fa-user fa-3xl" id="id1"></i>
                <br />
                <br />
                    <h2>General Information</h2><br />
                <div class="lll">
                    <h3> Name:</h3><br />
                    <div>
                      <p>Mani Kannan</p>
                    </div>
                </div>
                <div class="lll">
                    <h3>User:</h3>
                    <p>Manikannan@gmail.com</p>
                    <label ><h3>Gender:</h3></label>
                    <p>Male</p>
                    <h3>Contact No:</h3>
                    <p>9843249607</p>
                    <Button color="warning" class="but">Save</Button>
                
                </div>
                </div>
            </div>
        
            </div>
        
    )
}
export default Profile;















