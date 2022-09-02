import React, { useEffect } from 'react'
import TrainingService from '../../service/TrainingService'
import ManageTrainees from './ManageTrainees'
import { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const ListTrainee = (props) => {
    const [trainees, setTrainees] = useState([])

    useEffect(()=>{
        TrainingService.listTrainee().then((response)=>{
            setTrainees(response.data)
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
        <h2>List of all Trainees</h2>
        <table className='table'>
            <thead>
                <th>Trainees Id</th>
                <th>Trainees Name</th>
                <th>Trainees Age</th>
                <th>Trainees Address</th>
                
            </thead>
            <tbody>
                {
                    trainees.map(
                        trainee=>
                        <tr key = {trainee.traineeId}>
                            <td>{trainee.traineeId}</td>
                            <td>{trainee.user.username}</td>
                            <td>{trainee.age}</td>
                            <td>{trainee.address}</td>
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

export default ListTrainee