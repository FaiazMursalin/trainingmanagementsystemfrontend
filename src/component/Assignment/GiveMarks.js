import React, { useEffect,useState } from 'react'
import {Link} from "react-router-dom"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrainingService from '../../service/TrainingService';

const GiveMarks = (props) => {
    const [answers,setAnswers]=useState()
    useEffect(()=>{
        TrainingService.getAssignmentAnswer(localStorage.getItem('id')).then((response)=>{
            setAnswers(response.data)
            // console.log(response.data)
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
                <th>Trainee name</th>
                <th>Total Marks</th>
                <th>provide marks</th>
                
                
            </thead>
            <tbody>
                {
                    answers?.map(
                        answer=>
                        <tr key = {answer.evaluationId}>
                            <td>{answer.assignment.assignmentTitle}</td>
                            <td>{answer.trainee.user.username}</td>
                            <td>{answer.assignment.totalMarks}</td>
                            

                            <td><Link to="/setMarks" state={{answer}} >provide marks</Link></td>

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

export default GiveMarks