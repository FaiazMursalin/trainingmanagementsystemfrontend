import React, { useEffect } from 'react'
import TrainingService from '../../service/TrainingService'
import { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'



const ListTopic = (props) => {
  const [topics, setTopics] = useState([])

    useEffect(()=>{
        TrainingService.listTopic().then((response)=>{
          setTopics(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error);
        })
    },[])
  return (
    <div>
        <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
        <div className="alignflex">
        <Sidebar role = {props.role} />

        
        
      <div className='aligncenter' >
    <div>
        <h2>List of all Topics</h2>
        <table className='table'>
            <thead>
                <th>Topics Id</th>
                <th>Topics Name</th>
                <th>Topics Description</th>
                <th>Topics Start Time</th>
                <th>Topics End Time</th>
                
            </thead>
            <tbody>
                {
                    topics.map(
                        topic=>
                        <tr key = {topic.topicId}>
                            <td>{topic.topicId}</td>
                            <td>{topic.topicName}</td>
                            <td>{topic.topicDescription}</td>
                            <td>{topic.topicStartTime}</td>
                            <td>{topic.topicEndTime}</td>
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

export default ListTopic