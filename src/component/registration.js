import React from "react";
import {TextField,Typography,Button} from '@mui/material';
import './loginUi.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
function AddFunction1()
{
    const navigate = useNavigate();
    const[name,setName]=useState(); 
    const[pass,setPass]=useState();

     function Tologin()
     {
      const api="http://localhost:3001/user";
      axios.post(api,
        {
          username:name,
          password:pass
        })
        // navigate('/home');
     }

   return(
    <div className="log">
    <form id="title">
       <div className="tit">
         <Typography variant="h3">Register</Typography>
       </div>
      <div id="text1">
          <TextField variant="outlined" type="text" margin="normal" placeholder="Name*" value={name}
           onChange={(e)=>(setName(e.target.value))}/>
      </div>
    
      <div id="text2">
          <TextField  variant="outlined" type="email" margin="normal" placeholder="Email*" value={pass}
           onChange={(e)=>(setPass(e.target.value))}/>
      </div>
      <div id="text3">
          <TextField variant="outlined" type="password" margin="normal" placeholder="Password*" />
      </div>
      <div id="text3">
          <TextField variant="outlined" type="password" margin="normal" placeholder="confirm Password*" />
      </div>
      <div>
       <Button 
       onClick={Tologin}
       sx={{marginTop: 3 ,borderRadius:3}}
       variant="contained" color="warning" type="submit"
        >SignUp</Button>
       {/* <Button  >Login</Button> */}
      </div>
    </form>
    </div>
   )
}
export default AddFunction1;