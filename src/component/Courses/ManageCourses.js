import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const ManageCourses = (props) => {
  const { role, setAuthenticated } = props;
    const navigate=useNavigate();

    const saveCourse=(e)=>{
      navigate("/newCourseForm")
    }
    const listCourse=(e)=>{
      navigate("/listCourse")
    }
  
    return (
      <div>
        <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
        <div className="alignflex">
        <Sidebar role = {props.role} />

        
        
      <div className='aligncenter' >
  
        <div>
        <h2>Create Course :</h2>  
        <button onClick={(e)=>saveCourse(e)}>Create Course</button>
        </div>
  
        <div>
        <h2>List Course :  </h2>
        <button onClick={(e)=>listCourse(e)}>List Course</button>
        </div>
  
        
        
      </div>
      </div>
      </div>
    )
}

export default ManageCourses