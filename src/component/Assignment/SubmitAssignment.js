import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrainingService from '../../service/TrainingService';

import { useLocation, useNavigate } from 'react-router-dom';

const SubmitAssignment = (props) => {
    const [answers,setAnswers] = useState('');
    const location=useLocation()
    const navigate=useNavigate()
    const assignmentId = location?.state?.assignmentId;
    const question = location?.state?.question;
    // console.log(assignmentId)
    // console.log(question)
    const submitAnswers=(e)=>{
        e.preventDefault();
        const evaluationAnswer = {answers,assignment:{assignmentId:assignmentId},trainee:{user:{id:localStorage.getItem('id')}}}
        TrainingService.postAssignmentAnswer(evaluationAnswer).then((response)=>{
            // console.log(response.data)
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
            <h2>submit answer</h2>
            <h2>Assignment Question is: {question}</h2>
            <form>
            <label>write answer here</label>
                <textarea rows="5" type="text" placeholder="write answer here"
                name="answers" value={answers} onChange={(e)=>setAnswers(e.target.value)}
                />
            
            <button onClick={(e)=>submitAnswers(e)}>Submit</button>
                
            </form>

        
        
    </div>
    </div>
    </div>
  )
}

export default SubmitAssignment