import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrainingService from '../../service/TrainingService';
import { useLocation, useNavigate } from 'react-router-dom';

const SetMarks = (props) => {
    const [marks,setMarks] = useState('');
    const location=useLocation()
    const navigate=useNavigate()
    const answer = location?.state?.answer;
    console.log(answer.assignment)

    const submitMarks=(e)=>{
        e.preventDefault();
        const evaluation={obtainedMarks:marks}
        TrainingService.submitMarks(answer.evaluationId,evaluation).then((response)=>{
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
            <h2>submit marks</h2>
            <h2>Assignment Question is: {answer?.assignment?.assignmentDescription}</h2>
            <h2>Assignment Answer is: {answer?.answers}</h2>
            <form>
            <label>Set marks</label>
            <input type="number" placeholder="Enter marks"
                name="marks" value={marks} onChange={(e)=>setMarks(e.target.value)}
                />
                
            
            <button onClick={(e)=>submitMarks(e)}>setMarks</button>
                
            </form>

    </div>
    </div>
    </div>
  )
}

export default SetMarks