import React, { useEffect,useState } from 'react'
import TrainingService from '../../service/TrainingService'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'


const ListBatch = (props) => {
  const [batches, setBatches] = useState([])

    useEffect(()=>{
        TrainingService.listBatch().then((response)=>{
          setBatches(response.data)
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
        <h2>List of all Batches</h2>
        <table className='table'>
            <thead>
                <th>Batch Id</th>
                <th>Batch Name</th>
                <th>Batch Description</th>
                <th>Batch StartDate</th>
                <th>Batch EndDate</th>
                
            </thead>
            <tbody>
                {
                    batches.map(
                        batch=>
                        <tr key = {batch.batchId}>
                            <td>{batch.batchId}</td>
                            <td>{batch.batchName}</td>
                            <td>{batch.batchDescription}</td>
                            <td>{batch.batchStartDate}</td>
                            <td>{batch.batchEndDate}</td>
                        </tr>
                    )

                }
            </tbody>
        </table>
    </div>
    </div>
    </div>
  )
}

export default ListBatch