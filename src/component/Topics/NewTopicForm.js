import React from 'react'
import { useState } from 'react';
import TrainingService from '../../service/TrainingService';
import {useNavigate} from "react-router-dom"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'


const NewTopicForm = (props) => {
  const [topicName,setTopicName] = useState('');
  const [topicDescription,setTopicDescription] = useState('');
  const [topicStartTime,setTopicStartTime] = useState('');
  const [topicEndTime,setTopicEndTime] = useState('');
  const [day,setDay] = useState('');
  const [errormsg,setErrormsg] = useState('');
  const navigate=useNavigate();
  

  const saveTopic=(e)=>{
    e.preventDefault();
    const topic={topicName,topicDescription,topicStartTime,topicEndTime,trainer:{trainerId:currentTrainer},course:{courseId:currentCourse},day}
    
    TrainingService.addTopic(topic).then((response)=>{
        console.log(response.data)
        navigate("/")

    }).catch(error=>{
        console.log(error)
        setErrormsg(error.response.data.message)
    })
  }
  const [currentCourse,setCurrentCourse]=useState('');
    const [courses,setCourses]=useState([]);
    TrainingService.listCourse().then((response)=>{
      setCourses(response.data)
    }).catch(error=>{
        console.log(error);
    })
  const [currentTrainer,setCurrentTrainer]=useState('');
    const [trainers,setTrainers]=useState([]);
    TrainingService.listTrainer().then((response)=>{
      setTrainers(response.data)
      console.log(response.data)
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
            <h2>Create a new Topic</h2>
            <form>
               
    
                <label>Topic Name</label>
                <input type="text" placeholder="Enter Topic Name"
                name="topicName" value={topicName} onChange={(e)=>setTopicName(e.target.value)}
                />
    
                
    
                <label>Topic Description</label>
                <textarea rows="5" type="text" placeholder="Enter Topic description"
                name="topicDescription" value={topicDescription} onChange={(e)=>setTopicDescription(e.target.value)}
                />


                <label>Topic Day</label>
                <input type="String" placeholder="Enter Day"
                name="day" value={day} onChange={(e)=>setDay(e.target.value)}
                />



                <label>Topic Start Time</label>
                <input type="time" placeholder="Enter Start Date"
                name="topicStartTime" value={topicStartTime} onChange={(e)=>setTopicStartTime(e.target.value)}
                />

                <label>Topic End Time</label>
                <input type="time" placeholder="Enter End Date"
                name="topicEndTime" value={topicEndTime} onChange={(e)=>setTopicEndTime(e.target.value)}
                />

              

              <label>Assign to Course</label>
            <select defaultValue={'default'} onChange={e=>setCurrentCourse(e.target.value)}>

                <option value={'default'} disabled>Select Course</option>
                {
                    courses?.map(course=>(
                        <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
                    ))
                }

            </select>
    
            <label>Assign to Trainer</label>
            <select defaultValue={'default'} onChange={e=>setCurrentTrainer(e.target.value)}>

                <option value={'default'} disabled>Select Trainer</option>
                {
                    trainers?.map(trainer=>(
                        <option key={trainer.trainerId} value={trainer.trainerId}>{trainer.user.username}</option>
                    ))
                }

            </select>

            <label>{errormsg}</label>
                
    
                <button onClick={(e)=>saveTopic(e)}>Add</button>
                
            </form>
    
        </div>
        </div>
        </div>
        </div>
  )
}

export default NewTopicForm