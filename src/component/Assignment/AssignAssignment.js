import React from 'react'
import { useState } from 'react';
import TrainingService from '../../service/TrainingService';
import {useNavigate} from "react-router-dom"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const AssignAssignment = (props) => {
    const [assignmentTitle,setAssignmentTitle]=useState('');
    const [assignmentDescription,setAssignmentDescription]=useState('');
    const [totalMarks,setTotalMarks]=useState('');
    const navigate=useNavigate();

    const saveAssignment=(e)=>{
        e.preventDefault();
        const assignment={assignmentTitle,assignmentDescription,totalMarks,batch:{batchId:currentBatch},trainer:{user:{id:localStorage.getItem('id')}}}
        
        console.log(assignment)
        
        TrainingService.addAssignment(assignment).then((response)=>{
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
    <div>
    <div className="create-update">
        <h2>Create a new Assignment</h2>
        <form>
           

            <label>Assignment Title</label>
            <input type="text" placeholder="Enter assignment Name"
            name="assignmentTitle" value={assignmentTitle} onChange={(e)=>setAssignmentTitle(e.target.value)}
            />

            

            <label>Assignment Description</label>
            <textarea rows="5" type="text" placeholder="Enter assignment Description"
            name="assignmentDescription" value={assignmentDescription} onChange={(e)=>setAssignmentDescription(e.target.value)}
            />

            <label>Total Marks</label>
            <input type="number" placeholder="assignment number"
            name="totalMarks" value={totalMarks} onChange={(e)=>setTotalMarks(e.target.value)}
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

            <button onClick={(e)=>saveAssignment(e)}>Add</button>
            
        </form>

    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default AssignAssignment