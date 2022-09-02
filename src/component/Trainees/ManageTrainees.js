import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const ManageTrainees = (props) => {
  const navigate=useNavigate();

  const saveTrainee=(e)=>{
    navigate("/newTraineeForm")
  }
  const listTrainee=(e)=>{
    navigate("/listTrainee")
  }

  return (
    <div>
        <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
        <div className="alignflex">
        <Sidebar role = {props.role} />

        
        
      <div className='aligncenter' >
      <div>
      <h2>Create Trainee :</h2>  
      <button onClick={(e)=>saveTrainee(e)}>Create Trainee</button>
      </div>

      <div>
      <h2>List Trainee :  </h2>
      <button onClick={(e)=>listTrainee(e)}>List Trainee</button>
      </div>

      
      
    </div>
    </div>
    </div>

  )
}

export default ManageTrainees