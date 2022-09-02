import React from 'react'
import { useState } from "react"

import TrainingService from '../service/TrainingService';

export default function Login(props){
    const [username,setName] = useState('');
    const [password,setPass] = useState('');
    const {setAuthenticated}=props
    // const navigate=useNavigate();
   
    const handleLogin=(e)=>{
        e.preventDefault();
       
        const user={username,password}
        
        TrainingService.authenticateStudent(user).then((response)=>{
            setAuthenticated(true);
            props.setRole(response.data.role)
            
           
            localStorage.setItem("token","Bearer "+response.data.token)
            localStorage.setItem("id",response.data.id)
           
            
            
            
            

        }).catch(error=>{
            // console.log(error)
        })

    }
    return(
        <div className="create-update">
        <h2>Login</h2>
        <form>

            <label>Name</label>
            <input type="text" placeholder="Enter Name"
            name="username" value={username} onChange={(e)=>setName(e.target.value)}
            />

            <label>Password</label>
            <input type="text" placeholder="Enter Password"
            name="password" value={password} onChange={(e)=>setPass(e.target.value)}
            />
            
            <button onClick={(e)=>handleLogin(e)}>Login</button>

        </form>
        </div>
    )

}


