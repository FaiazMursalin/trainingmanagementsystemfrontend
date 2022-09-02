import React, { useEffect } from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom"

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrainingService from '../../service/TrainingService';

const YourAssignment = (props) => {
   
    const [assignments,setAssignment]=useState()

    useEffect(()=>{
        TrainingService.getAssignmentlistForTrainee(localStorage.getItem('id')).then((response)=>{
            setAssignment(response.data)
            console.log(assignments)

        }).catch(error=>{
            console.log(error);
        })
    },[])
    

    
  return (
    <div>
        <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
        <div className="alignflex">
        <Sidebar role = {props.role} />
        <div className='aligncenter'>
        <div>
        <h2>List of all Assignments</h2>
        <table className='table'>
            <thead>
                <th>Assignment title</th>
                <th>Question</th>
                <th>Total Marks</th>
                <th>provide answer</th>
                
                
            </thead>
            <tbody>
                {
                    assignments?.map(
                        assignment=>
                        <tr key = {assignment.assignmentId}>
                            <td>{assignment.assignmentTitle}</td>
                            <td>{assignment.assignmentDescription}</td>
                            <td>{assignment.totalMarks}</td>

                            <td><Link to="/submitAssignment" state={{assignmentId:assignment.assignmentId,question:assignment.assignmentDescription}} >submit assignment</Link></td>

                        </tr>
                    )

                }
            </tbody>
        </table>

        </div>
        </div>
    </div>
    </div>
  )
}

export default YourAssignment