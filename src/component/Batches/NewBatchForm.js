import React from 'react'
import { useState } from 'react';
import TrainingService from '../../service/TrainingService';
import {useNavigate} from "react-router-dom"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'


const NewBatchForm = (props) => {
  const [batchName,setBatchName] = useState('');
  const [batchDescription,setBatchDescription] = useState('');
  const [batchStartDate,setBatchStartDate] = useState('');
  const [batchEndDate,setBatchEndDate] = useState('');
  const navigate=useNavigate();

    const saveBatch=(e)=>{
        e.preventDefault();
        const batch={batchName,batchDescription,batchStartDate,batchEndDate}
        
        console.log(batch)
        // console.log(trainee)
        


        TrainingService.addBatch(batch).then((response)=>{
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
    <div className="create-update">
            <h2>Create a new Batch</h2>
            <form>
               
    
                <label>Batch Name</label>
                <input type="text" placeholder="Enter Batch Name"
                name="batchName" value={batchName} onChange={(e)=>setBatchName(e.target.value)}
                />
    
                
    
                <label>Batch Description</label>
                <textarea rows="5" type="text" placeholder="Enter Batch description"
                name="batchDescription" value={batchDescription} onChange={(e)=>setBatchDescription(e.target.value)}
                />

                <label>Batch Start Date</label>
                <input type="text" placeholder="Enter Start Date"
                name="batchStartDate" value={batchStartDate} onChange={(e)=>setBatchStartDate(e.target.value)}
                />

                <label>Batch End Date</label>
                <input type="text" placeholder="Enter End Date"
                name="batchEndDate" value={batchEndDate} onChange={(e)=>setBatchEndDate(e.target.value)}
                />
    
                
    
                <button onClick={(e)=>saveBatch(e)}>Add</button>
                
            </form>
    
        </div>
        </div>
        </div>
  )
}

export default NewBatchForm