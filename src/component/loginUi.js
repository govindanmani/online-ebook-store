import React, { useEffect } from "react";
import {TextField,Typography,Button} from '@mui/material';
import './loginUi.css'
import { useNavigate } from 'react-router-dom';
import { NavBar } from "./navBar";
import axios from "axios";
import { useState } from "react";

function AddFunction5()
{
  const[name,setName]=useState(); 
  const[pass,setPass]=useState();
  const[user,setuser]=useState([]);
  const navigate = useNavigate();


  
  const Verify = (e) =>{
    e.preventDefault();
    const url="http://localhost:3001/user";
    axios.get(url).then(Response =>{
      setuser(Response.data);
    })
    // console.log(user);
    const isMatch = user.some((use)=> use.username==name && use.password==pass);
    if(isMatch){
      navigate('/');
    }else{
      alert("Failed");
    }
  }
   return(
    <div className="log">
      
     <form id="title">
       <div id="head">
         <Typography variant="h2" >
          Login
          </Typography>
       </div>
      <div id="text2">
          <TextField  variant="outlined" type="email" placeholder="Email" margin="normal"  
          onChange={(e)=>(setName(e.target.value))}/>
      </div >
      <div id="text3">
          <TextField variant="outlined" type="password" placeholder="password" margin="normal" 
          onChange={(e)=>(setPass(e.target.value))}
          />
      </div >
      <div id="button">
       <Button  
       sx={{marginTop: 3 ,borderRadius:3}}
       variant="contained" color="warning" type="submit" onClick={Verify} >
       submit
       </Button>
      </div>
    </form>
    </div>

   )
}
export default AddFunction5;