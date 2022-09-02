import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const ManageBatches = (props) => {
    const navigate=useNavigate();

    const saveBatch=(e)=>{
      navigate("/newBatchForm")
    }
    const listBatch=(e)=>{
      navigate("/listBatch")
    }
  
    return (
      <div>
        <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
        <div className="alignflex">
        <Sidebar role = {props.role} />

        
        
      <div className='aligncenter' >
  
        <div>
        <h2>Create Batch :</h2>  
        <button onClick={(e)=>saveBatch(e)}>Create Batch</button>
        </div>
  
        <div>
        <h2>List Batch :  </h2>
        <button onClick={(e)=>listBatch(e)}>List Batch</button>
        </div>
  
        
        
      </div>
      </div>
      </div>
  
    )
}

export default ManageBatches