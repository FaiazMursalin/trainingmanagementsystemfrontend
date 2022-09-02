import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import {SidebarDataAdmin,SidebarDataTrainer,SidebarDataTrainee} from './SidebarData'


function Sidebar({role}) {
  console.log("role",role)
  const data = role === "ADMIN" ? SidebarDataAdmin : (role === "TRAINER" ? SidebarDataTrainer : SidebarDataTrainee)
  return (
    <div className='sidebar'>
      <ul className='sidebarList'>
        {data.map((val,key)=>{
          return(
            <Link to={val.link} key={key}>
                <li className="row">
                  <div id="title">{val.title}</div>
                </li>
              </Link>

          //   <li
          //   key={key}
          //   className="row"
          //   id={window.location.pathname===val.link?"active":""}
          //   onClick={()=>{
            

            // <Link className="btn" to={props.typeUrl==='trainees'?'/trainee_profile':'/trainer_profile'} 
            //         state={{id:props.id ,from:location}}></Link>


          //   window.location.pathname=val.link;
          // }}
          // >
          //   <div id='title'>{val.title}</div>
          //   </li>
        );
        })}
      </ul>

    </div>
  )
}

export default Sidebar