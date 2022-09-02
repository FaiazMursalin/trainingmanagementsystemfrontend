import React, { useEffect } from 'react'
import TrainingService from '../../service/TrainingService'
import { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { Topics } from './Topics'

const AssignedTopics = (props) => {
  const [topics,setTopics]=useState([])
  useEffect(() => {
    TrainingService.listTrainerTopic().then((response)=>{
      console.log(response.data)
      setTopics(response.data)
    }).catch(error=>{
      console.log(error);
    })

  }, [])
  


  return (
    <div>
      <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
        <div className="alignflex">
        <Sidebar role = {props.role} />
        <div className='card'>
          {topics.length !==0 ? (
            topics.map(eachElement=>{
              return(
                <Topics key={eachElement.topicId} dataObject={eachElement}/>
              )
            })
          ): <p style={{color:"red", textAlign:"center"}}>Course data is not available or still loading....</p>} 
        

        </div>







        </div>
    </div>
  )
}

export default AssignedTopics