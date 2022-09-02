import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const ManageTopics = (props) => {
  const navigate=useNavigate();

    const saveTopic=(e)=>{
      navigate("/newtopicForm")
    }
    const listTopic=(e)=>{
      navigate("/listTopic")
    }
  return (
    <div>
        <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
        <div className="alignflex">
        <Sidebar role = {props.role} />

        
        
      <div className='aligncenter' >
  
        <div>
        <h2>Create Topic :</h2>  
        <button onClick={(e)=>saveTopic(e)}>Create Topic</button>
        </div>
  
        <div>
        <h2>List Topic :  </h2>
        <button onClick={(e)=>listTopic(e)}>List Topic</button>
        </div>
  
        
        
      </div>
      </div>
      </div>
  )
}

export default ManageTopics