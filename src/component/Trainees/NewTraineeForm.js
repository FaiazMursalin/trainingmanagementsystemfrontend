import React from 'react'
import { useState } from 'react';
import TrainingService from '../../service/TrainingService';
import {useNavigate} from "react-router-dom"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'


const NewTraineeForm = (props) => {
    const [traineeName,setTraineeName] = useState('');
    const [traineeAddress,setTraineeAddress] = useState('');
    const [traineeAge,setTraineeAge] = useState('');
    const [traineeRole,setTraineeRole] = useState('');
    const [traineePassword,setTraineePassword] = useState('');
    const navigate=useNavigate();

    

    const saveTrainee=(e)=>{
        e.preventDefault();
        const user={username:traineeName,pass:traineePassword,role:traineeRole}
        const trainee = {address:traineeAddress,age:traineeAge,user,batch:{batchId:currentBatch}}
        console.log(trainee)
        
        TrainingService.addTrainee(trainee).then((response)=>{
            console.log(response.data)
            navigate("/")

        }).catch(error=>{
            console.log(error)
        })
    }

    const [currentBatch,setCurrentBatch]=useState('');
    const [batches,setBatches]=useState([]);
    TrainingService.listBatch().then((response)=>{
        setBatches(response.data)
    }).catch(error=>{
        console.log(error);
    })
  return (
    <div>
    <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
    <div className="alignflex">
    <Sidebar role = {props.role} />

    
    
  <div className='aligncenter' >
    <div className="create-update">
        <h2>Create a new Trainee</h2>
        <form>
           

            <label>Trainees Name</label>
            <input type="text" placeholder="Enter Trainees Name"
            name="traineeName" value={traineeName} onChange={(e)=>setTraineeName(e.target.value)}
            />

            

            <label>Trainees Address</label>
            <textarea rows="5" type="text" placeholder="Enter Trainees Address"
            name="traineeAddress" value={traineeAddress} onChange={(e)=>setTraineeAddress(e.target.value)}
            />

            <label>Trainees Age</label>
            <input type="number" placeholder="Trainees Age"
            name="traineeAge" value={traineeAge} onChange={(e)=>setTraineeAge(e.target.value)}
            />

            <label>Trainees Role</label>
            <input type="text" placeholder="Trainees Role"
            name="traineeRole" value={traineeRole} onChange={(e)=>setTraineeRole(e.target.value)}
            />

            <label>Trainees Password</label>
            <input type="text" placeholder="Trainees Password"
            name="traineePassword" value={traineePassword} onChange={(e)=>setTraineePassword(e.target.value)}
            />

            <label>Assign to Batch</label>
            <select defaultValue={'default'} onChange={e=>setCurrentBatch(e.target.value)}>

                <option value={'default'} disabled>Select Batch</option>
                {
                    batches?.map(batch=>(
                        <option key={batch.batchId} value={batch.batchId}>{batch.batchName}</option>
                    ))
                }

            </select>

            <button onClick={(e)=>saveTrainee(e)}>Add</button>
            
        </form>

    </div>
    </div>
    </div>
    </div>

  )
}

export default NewTraineeForm