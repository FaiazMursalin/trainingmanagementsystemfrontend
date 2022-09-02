import React from 'react'
import { useState } from 'react';
import TrainingService from '../../service/TrainingService';
import {useNavigate} from "react-router-dom"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const NewTrainerForm = (props) => {
    const [trainerName,setTrainerName] = useState('');
    const [trainerAddress,setTrainerAddress] = useState('');
    const [trainerAge,setTrainerAge] = useState('');
    const [trainerRole,setTrainerRole] = useState('');
    const [trainerPassword,setTrainerPassword] = useState('');
    const navigate=useNavigate();

    const saveTrainer=(e)=>{
        e.preventDefault();
        const user={username:trainerName,pass:trainerPassword,role:trainerRole}
        const trainer = {address:trainerAddress,age:trainerAge,user}
        console.log(user)
        console.log(trainer)
        


        TrainingService.addTrainer(trainer).then((response)=>{
            console.log(response.data)
            navigate("/")

        }).catch(error=>{
            console.log(error)
        })
        


    }
  return (
    <div>
    <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
    <div className="alignflex">
    <Sidebar role = {props.role} />

    
    
  <div className='aligncenter' >
    <div>
    <div className="create-update">
        <h2>Create a new Trainer</h2>
        <form>
           

            <label>Trainers Name</label>
            <input type="text" placeholder="Enter Trainers Name"
            name="trainerName" value={trainerName} onChange={(e)=>setTrainerName(e.target.value)}
            />

            

            <label>Trainers Address</label>
            <textarea rows="5" type="text" placeholder="Enter Trainers Address"
            name="trainerAddress" value={trainerAddress} onChange={(e)=>setTrainerAddress(e.target.value)}
            />

            <label>Trainers Age</label>
            <input type="number" placeholder="Trainers Age"
            name="trainerAge" value={trainerAge} onChange={(e)=>setTrainerAge(e.target.value)}
            />

            <label>Trainers Role</label>
            <input type="text" placeholder="Trainers Role"
            name="trainerRole" value={trainerRole} onChange={(e)=>setTrainerRole(e.target.value)}
            />

            <label>Trainers Password</label>
            <input type="text" placeholder="Trainers Password"
            name="trainerPassword" value={trainerPassword} onChange={(e)=>setTrainerPassword(e.target.value)}
            />

            <button onClick={(e)=>saveTrainer(e)}>Add</button>
            
        </form>

    </div>
    </div>
    </div>
    </div>
    </div>

  )
}

export default NewTrainerForm