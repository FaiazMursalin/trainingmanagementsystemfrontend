import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrainingService from '../../service/TrainingService';

const GetYourMarks = (props) => {
    const [answers,setAnswers]=useState()
    useEffect(()=>{
        TrainingService.getYourMarks(localStorage.getItem('id')).then((response)=>{
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
        <div>
        <h2>your marks</h2>
        <table className='table'>
            <thead>
                <th>Assignment title</th>
                
                <th>Total Marks</th>
                <th>obtained marks</th>
                
                
            </thead>
            <tbody>
                {
                    answers?.map(
                        answer=>
                        <tr key = {answer.evaluationId}>
                            <td>{answer.assignment.assignmentTitle}</td>
                           
                            <td>{answer.assignment.totalMarks}</td>
                            <td>{answer.obtainedMarks}</td>


                        </tr>
                    )

                }
            </tbody>
        </table>
    </div>
    </div>
    </div>
  )
}

export default GetYourMarks