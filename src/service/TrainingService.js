import axios from "axios";


const authenticate_url = 'http://localhost:8080/authenticate';
const postTrainer_url = 'http://localhost:8080/api/v1/saveTrainer';
const getTrainers_url = 'http://localhost:8080/api/v1/listTrainer';
const postTrainee_url = 'http://localhost:8080/api/v1/saveTrainee';
const getTrainees_url = 'http://localhost:8080/api/v1/listTrainee';
const postCourse_url = 'http://localhost:8080/api/v1/saveCourse';
const getCourse_url = 'http://localhost:8080/api/v1/listCourse';
const postBatch_url = 'http://localhost:8080/api/v1/saveBatch';
const getBatch_url = 'http://localhost:8080/api/v1/listBatch';
const postTopic_url = 'http://localhost:8080/api/v1/saveTopic';
const getTopic_url = 'http://localhost:8080/api/v1/listTopic';

const postAssignment_url = 'http://localhost:8080/api/v1/postAssignment';
const listTrainerTopic_url = 'http://localhost:8080/api/v1/listTrainersTopic?id=';


const updateTrainer_url = 'http://localhost:8080/api/v1/updateTrainer/';
const updateTrainee_url = 'http://localhost:8080/api/v1/updateTrainee/';
const getTraineesAssignment_url = 'http://localhost:8080/api/v1/getAssignmentforTrainee/';
const submitAssignment_url = 'http://localhost:8080/api/v1/submitAssignment';

const getAssignmentAnswer = 'http://localhost:8080/api/v1/getAssignmentAnswer/'
const submitmarks_url = 'http://localhost:8080/api/v1/provideMarks/'
const getYourMarks_url = 'http://localhost:8080/api/v1/getYourmarks/'





const getSingleUser='http://localhost:8080/api/v1/getUserinfo/'

class TrainingService{
    
    
    authenticateStudent(user){
        return axios.post(authenticate_url,user);
    }

    addTrainer(trainer){
        return axios.post(postTrainer_url,trainer,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });

    }
    listTrainer(){
        return axios.get(getTrainers_url,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }

    addTrainee(trainee){
        return axios.post(postTrainee_url,trainee,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });

    }

    listTrainee(){
        return axios.get(getTrainees_url,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }

    addCourse(course){
        console.log(course)
        return axios.post(postCourse_url,course,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });

    }
    listCourse(){
        return axios.get(getCourse_url,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }

    addBatch(batch){
        // console.log(course)
        return axios.post(postBatch_url,batch,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });

    }
    listBatch(){
        return axios.get(getBatch_url,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }
    addTopic(topic){
        // console.log(course)
        return axios.post(postTopic_url,topic,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });

    }
    listTopic(){
        return axios.get(getTopic_url,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }
    addAssignment(assignment){
        // console.log(course)
        return axios.post(postAssignment_url,assignment,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });

    }

    listTrainerTopic(){
        return axios.get(listTrainerTopic_url+localStorage.getItem('id'),{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }

    listSingleUser(id){
        
        // console.log(getSingleUser)
        return axios.get(getSingleUser+id,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }

    updateTrainer(id,trainer){
        return axios.put(updateTrainer_url+id,trainer,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }
    updateTrainee(id,trainee){
        return axios.put(updateTrainee_url+id,trainee,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }

    getAssignmentlistForTrainee(id){
        return axios.get(getTraineesAssignment_url+id,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }

    postAssignmentAnswer(answer){
        // console.log(course)
        return axios.post(submitAssignment_url,answer,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });

    }
    getAssignmentAnswer(id){
        return axios.get(getAssignmentAnswer+id,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });

    }

    submitMarks(id,evaluation){
        return axios.put(submitmarks_url+id,evaluation,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }

    getYourMarks(id){
        return axios.get(getYourMarks_url+id,{
            headers:{
                'Authorization':localStorage.getItem("token")
            }
        });
    }


}
export default new TrainingService();