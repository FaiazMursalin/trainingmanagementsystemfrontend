import React from 'react'

const Course = (props) => {
    const {dataObject}=props
    const {courseId, courseName, courseDescription}=dataObject;
    return (
        <div className="course">
           <p>Course id : {courseId}</p>
          <h1>{courseName}</h1>
          <p>{courseDescription}</p>
                    
        </div>
      )
}

export default Course