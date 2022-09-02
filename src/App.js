import { Route,Routes } from 'react-router-dom';
import './App.css';
import { useState } from "react"
import Login from './component/Login'
import { Home } from './component/Home';



import ManageTrainers from './component/Trainers/ManageTrainers';
import NewTrainerForm from './component/Trainers/NewTrainerForm';
import ListTrainer from './component/Trainers/ListTrainer';

import ManageTrainees from './component/Trainees/ManageTrainees';
import NewTraineeForm from './component/Trainees/NewTraineeForm';
import ListTrainee from './component/Trainees/ListTrainee';

import ManageCourses from './component/Courses/ManageCourses';
import NewCourseForm from './component/Courses/NewCourseForm';
import ListCourse from './component/Courses/ListCourse';

import ManageBatches from './component/Batches/ManageBatches';
import NewBatchForm from './component/Batches/NewBatchForm';
import ListBatch from './component/Batches/ListBatch';

import ManageTopics from './component/Topics/ManageTopics';
import ListTopic from './component/Topics/ListTopic';
import NewTopicForm from './component/Topics/NewTopicForm';

import AssignAssignment from './component/Assignment/AssignAssignment';
import AssignedTopics from './component/Assignment/AssignedTopics';
import YourAssignment from './component/Assignment/YourAssignment';
import SubmitAssignment from './component/Assignment/SubmitAssignment';
import GiveMarks from './component/Assignment/GiveMarks';
import SetMarks from './component/Assignment/SetMarks';
import GetYourMarks from './component/Assignment/GetYourMarks';




function App() {
  const [authenticated,setAuthenticated]=useState(false)
  
  const [role, setRole] = useState('')
  const [id, setId] = useState('')
  return (
    <div>
      
      
        <Routes>

          {/* {console.log(authenticated)} */}
          {!authenticated && <Route path="/" element={<Login setAuthenticated={setAuthenticated} setRole={setRole} setId={setId}/>}/>}

          {authenticated && <Route path="/" element={<Home role={role} setAuthenticated={setAuthenticated} id={id}/>}/>}

          {/* Admin Routes */}
          
          <Route path ='/manageTrainers' element={<ManageTrainers {...{ role, setAuthenticated }} />}/>
           <Route path ='/newTrainerForm' element={<NewTrainerForm {...{ role, setAuthenticated }} />}/>
           <Route path ='/listTrainer' element={<ListTrainer {...{ role, setAuthenticated }} />}/>
          
           <Route path ='/manageTrainees' element={<ManageTrainees {...{ role, setAuthenticated }} />}/>
           <Route path ='/newTraineeForm' element={<NewTraineeForm {...{ role, setAuthenticated }} />}/>
           <Route path ='/listTrainee' element={<ListTrainee {...{ role, setAuthenticated }} />}/>

           <Route path ='/manageCourses' element={<ManageCourses {...{ role, setAuthenticated }} />}/>
           <Route path ='/newCourseForm' element={<NewCourseForm {...{ role, setAuthenticated }} />}/>
           <Route path ='/listCourse' element={<ListCourse {...{ role, setAuthenticated }} />}/>
           
           <Route path ='/manageBatches' element={<ManageBatches {...{ role, setAuthenticated }} />}/>
           <Route path ='/newBatchForm' element={<NewBatchForm {...{ role, setAuthenticated }} />}/>
           <Route path ='/listBatch' element={<ListBatch {...{ role, setAuthenticated }} />}/>
           
           <Route path ='/manageTopics' element={<ManageTopics {...{ role, setAuthenticated }} />}/>
           <Route path ='/newTopicForm' element={<NewTopicForm {...{ role, setAuthenticated }} />}/>
           <Route path ='/listTopic' element={<ListTopic {...{ role, setAuthenticated }} />}/>

           {/* Trainer routers */}
           <Route path ='/assignedTopics' element={<AssignedTopics{...{ role, setAuthenticated }} /> } />
           <Route path ='/assignAssignment' element={<AssignAssignment {...{ role, setAuthenticated }} />}/>

           <Route path ='/giveMarks' element={<GiveMarks {...{ role, setAuthenticated }} />}/>
           <Route path ='/setMarks' element={<SetMarks {...{ role, setAuthenticated }} />}/>
          
           {/*Trainee Routes*/}
           <Route path ='/yourAssignment' element={<YourAssignment{...{ role, setAuthenticated }} /> } /> 
           <Route path ='/submitAssignment' element={<SubmitAssignment{...{ role, setAuthenticated }} /> } /> 
           <Route path ='/yourAssignmentMarks' element={<GetYourMarks{...{ role, setAuthenticated }} /> } /> 
          

          

          
        </Routes>
    </div>
  );
}

export default App;
