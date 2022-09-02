import React, {useEffect, useState} from "react"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Course from './Course'
import TrainingService from '../../service/TrainingService'


const ListCourse = (props) => {
    const [courses, setCourse] = useState([]);
    // const { role, setAuthenticated } = props;
    useEffect(()=>{
      TrainingService.listCourse().then((response)=>{
        const {data} = response;
      	setCourse(data)
      }).catch(error=>{
          console.log(error);
      })
  },[])
    
  return (
    <div>
        <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
        <div className="alignflex">
        <Sidebar role = {props.role} />
    <div className="card">
        {courses.length !== 0 ? (
      	courses.map(eachElement => {
         return (
         	<Course key={eachElement.courseId} dataObject={eachElement}/>
         )
        })
      ) : <p style={{color:"red", textAlign:"center"}}>Course data is not available or still loading....</p>} 
        
        </div>
        </div>
        </div>
  )
}

export default ListCourse