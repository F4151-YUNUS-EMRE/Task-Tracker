
import {useEffect, useState} from "react";
import "./App.css";
import Container from "react-bootstrap/Container"
import AddTutorial from "./component/AddTutorial";
import Tutorials from "./component/Tutorials";
import axios from "axios";

const App=()=>{
  const [show, setShow] = useState(true);
  const [task, setTask] = useState([]);
  const url = "https://635182113e9fa1244e60855d.mockapi.io/api/tasks"

  const handleShow = () => {
    setShow(!show)
  }

  const getTask=async()=>{
    try {
      const {data}=await axios(url)
      console.log(data)
      setTask(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTask()
  }, [])
  

  return(
    <Container className="mt-4 p-4 w-50">

      <h1 className="display-5 fw-bold text-center">Task Tracker</h1>

      <Container className="text-center">
        <button onClick={handleShow} className="btn btn-danger mt-3 "> {show? "Close Add Task Bar":"Show Add Task Bar"} </button>
      </Container>

      {show ?<AddTutorial getTask={getTask} />:""}

      {/* {show ? <Tutorials tasks={tasks} getTask={getTask} />:""} */}
      <Tutorials task={task} getTask={getTask} setTask={setTask} />

    </Container>
  )
}

export default App;








