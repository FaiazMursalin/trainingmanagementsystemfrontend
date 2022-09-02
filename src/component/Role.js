import React, {useEffect, useState} from "react"
import TrainingService from '../service/TrainingService';
import RoleAdmin from "./RoleAdmin";
import RoleTrainee from "./RoleTrainee";
import RoleTrainer from "./RoleTrainer";

const Role = (props) => {

  const [data, setData] = useState('');
    
    useEffect(()=>{
      TrainingService.listSingleUser(localStorage.getItem('id')).then((response)=>{
        
      	setData(response.data)
        console.log(response.data)
      }).catch(error=>{
          console.log(error);
      })
  },[])

  
  
  return (
    <div style={{width:"100%"}}>


      {data?.user? (data?.user?.role==="TRAINEE"? <RoleTrainee user={data}/> : <RoleTrainer user={data}/>) : <RoleAdmin user={data}/>}






      
    
    </div>
  )
}

export default Role