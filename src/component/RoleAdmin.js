import React from 'react'

const RoleAdmin = (props) => {
    
  return (
    <div className='create-update'>
        <p>You have entered as an admin</p>
        <p>your id is {props.user.id}</p>
        <p>your username is {props.user.username}</p>
       
    </div>
  )
}

export default RoleAdmin