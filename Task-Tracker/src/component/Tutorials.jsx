import axios from "axios";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container"; 
import { FaTimes, FaEdit } from "react-icons/fa";
import EditTutorial from "./EditTutorial";
import "./Tutorials.css";


const Tutorials = ({ tasks, getTask, }) => {
  const [newItem, setNewItem] = useState([])
  

  const url = "https://635182113e9fa1244e60855d.mockapi.io/api/tasks";

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  const editTutorial=async(id,task,date)=>{
    try {
      await axios.put(`${url}/${id}`,{task,date})
    } catch (error) {
      console.log(error);
    }
    getTask()
  }


  return (
    <div className="container mt-4">
      <div>
        {tasks?.map((item) => {
          const { task, date, id } = item;
          return (
            <Container
              key={id}
              className={
                "mt-3 rounded bg-warning d-flex justify-content-between"
              }
            >
              <div className="mt-1 ms-1">
                <p className="fw-bold"> {task} </p>
                <p> {date} </p>
              </div>
              <div className="mt-1 me-1">
                <FaEdit
                  size={20}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#edit-modal"
                  className="text-success me-1"
                  onClick={() => setNewItem(item)}
                />
                <FaTimes
                  size={20}
                  className="text-danger"
                  type="button"
                  onClick={() => deleteTask(id)}
                />
              </div>
            </Container>
          );
        })}
      </div>
      <EditTutorial item={newItem} editTutorial={editTutorial} />
    </div>
  );
};

export default Tutorials