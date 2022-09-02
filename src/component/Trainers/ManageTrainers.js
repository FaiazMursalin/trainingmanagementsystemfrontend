import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const ManageTrainers = (props) => {
  const navigate=useNavigate();

  const saveTrainer=(e)=>{
    navigate("/newTrainerForm")
  }
  const listTrainer=(e)=>{
    navigate("/listTrainer")
  }

  return (
    <div>
      <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
        <div className="alignflex">
        <Sidebar role = {props.role} />

        <div className='aligncenter' >

      <div>
      <h2>Create Trainer :</h2>  
      <button onClick={(e)=>saveTrainer(e)}>Create Trainer</button>
      </div>

      <div>
      <h2>List Trainer :  </h2>
      <button onClick={(e)=>listTrainer(e)}>List Trainer</button>
      </div>

      
      
    </div>
    </div>
    </div>

  )
}

export default ManageTrainers