import React from 'react'

export const Topics = (props) => {
    const {dataObject}=props
    const {topicId, topicName, topicDescription,day,topicStartTime,topicEndTime}=dataObject;
  return (
    <div className="course">
           <p>Topic id : {topicId}</p>
          <h1>{topicName}</h1>
          <p>{topicDescription}</p>
          <p>Topic day : {day}</p>
          <p>Topic Start Time: {topicStartTime}</p>
          <p>Topic End Time: {topicEndTime}</p>
                    
        </div>
  )
}

/*
day: "sunday"
topicDescription: "aafdsasff"
topicEndTime: "18:00:00"
topicId: 1
topicName: "finance"
topicStartTime: "17:00:00"
*/
