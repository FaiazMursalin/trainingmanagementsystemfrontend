import React, { useEffect } from 'react'
import TrainingService from '../../service/TrainingService'
import ManageTrainers from './ManageTrainers'
import { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const ListTrainer = (props) => {
    const [trainers, setTrainers] = useState([])

    useEffect(()=>{
        TrainingService.listTrainer().then((response)=>{
            setTrainers(response.data)
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
        <h2>List of all Trainers</h2>
        <table className='table'>
            <thead>
                <th>Trainers Id</th>
                <th>Trainers Name</th>
                <th>Trainers Age</th>
                <th>Trainers Address</th>
                
            </thead>
            <tbody>
                {
                    trainers.map(
                        trainer=>
                        <tr key = {trainer.trainerid}>
                            <td>{trainer.trainerId}</td>
                            <td>{trainer.user.username}</td>
                            <td>{trainer.age}</td>
                            <td>{trainer.address}</td>
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

export default ListTrainer