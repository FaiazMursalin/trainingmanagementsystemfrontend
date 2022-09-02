import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Role from './Role'



export const Home = (props) => {

  return (
    <div>
      <section>
        <div>
        <Navbar setAuthenticated={props.setAuthenticated} role = {props.role} />
        </div>
      </section>
      <section>
        <div className='home'>
        <Sidebar role = {props.role}/>

          {/* <Role role={props.role}/> */}
          <Role id={props.id}/>
        </div>
      </section>
        

    
        
    </div>
  )
}


