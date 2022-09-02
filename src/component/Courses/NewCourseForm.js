import React from 'react'
import { useState } from 'react';
import TrainingService from '../../service/TrainingService';
import {useNavigate} from "react-router-dom"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const NewCourseForm = (props) => {
    const [courseName,setCourseName] = useState('');
    const [courseDescription,setCourseDescription] = useState('');
    const navigate=useNavigate();

    const saveCourse=(e)=>{
        e.preventDefault();
        const course={courseName,courseDescription,batch:{batchId:currentBatch}}
        
        console.log(course)
        // console.log(trainee)
        


        TrainingService.addCourse(course).then((response)=>{
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
        
        <div className="create-update">
            <h2>Create a new Course</h2>
            <form>
               
    
                <label>Course Name</label>
                <input type="text" placeholder="Enter Course Name"
                name="courseName" value={courseName} onChange={(e)=>setCourseName(e.target.value)}
                />
    
                
    
                <label>Course Description</label>
                <textarea rows="5" type="text" placeholder="Enter Trainees Address"
                name="courseDescription" value={courseDescription} onChange={(e)=>setCourseDescription(e.target.value)}
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
                
    
                <button onClick={(e)=>saveCourse(e)}>Add</button>
                
            </form>
    
        </div>
        </div>
        </div>
        
    
      )
}

export default NewCourseForm