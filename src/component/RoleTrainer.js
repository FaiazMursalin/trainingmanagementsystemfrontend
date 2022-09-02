import React from 'react'
import { useState } from 'react';
import TrainingService from '../service/TrainingService';
import {useNavigate} from "react-router-dom"

const RoleTrainer = (props) => {
    const navigate=useNavigate();
    const {user}=props.user
    const [username,setUsername]=useState(user.username)
    const [address,setAddress]=useState(props.user.address)
    const [age,setAge]=useState(props.user.age)
    const updateTrainer=(e)=>{
        e.preventDefault()
        const user={username}
        const trainer = {address,age,user}
        TrainingService.updateTrainer(localStorage.getItem('id'),trainer).then((response)=>{
            console.log("updated successfuly")
            localStorage.setItem("token","")
       
            localStorage.clear()
            navigate("/");
            window.location.reload()
        }).catch(error=>{
            console.log(error)
        })
    }
  return (
    <div>
        <div className='create-update'>
        {console.log(props)}
       
        <p>your role is {user.role}</p>
        
        <form>
            
        {/* <p>your name is {user.username}</p> */}
        <label>Your Name</label>
            <input type="text" placeholder="Enter Trainers Name"
            name="username" value={username} onChange={(e)=>setUsername(e.target.value)}
            />

        {/* <p>your name is {props.user.address}</p> */}
        <label>Your Address</label>
            <input type="text" placeholder="Enter Trainers Name"
            name="address" value={address} onChange={(e)=>setAddress(e.target.value)}
            />
        
        {/* <p>your age is {props.user.age}</p> */}
        <label>Your Age</label>
            <input type="text" placeholder="Enter Trainers Name"
            name="age" value={age} onChange={(e)=>setAge(e.target.value)}
            />


        <button onClick={(e)=>updateTrainer(e)}>Update and Login</button>


        </form>
    </div>
    </div>
  )
}

export default RoleTrainer