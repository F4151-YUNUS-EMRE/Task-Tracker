import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";


const AddTutorial = ({ getTask}) => {
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")
  const url = "https://635182113e9fa1244e60855d.mockapi.io/api/tasks"

  const handleSubmit=(e)=>{
    e.preventDefault()
    const newTask={task,date}
    addNewTask(newTask)
    setTask("")
    setDate("")
  }

  const addNewTask=async(newTask)=>{
   try {
    await axios.post(url,newTask)
   } catch (error) {
    console.log(error);
   }
   getTask()
  }
  
  
  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Task
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Add Task"
          required
          onChange={(e) => setTask(e.target.value)}
        />
        <div id="emailHelp" className="form-text"></div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Day & Time
        </label>
        <input
          type="date"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Add Day"
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <Container className="text-center">
        <button
          type="submit"
          className="btn btn-primary text-center w-100 mt-3"
        >
          Save Task
        </button>
      </Container>
    </form>
  );
};

export default AddTutorial