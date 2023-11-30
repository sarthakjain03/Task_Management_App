import React from "react";
import { NavLink } from "react-router-dom";
import AddTaskForm from "../components/AddTaskForm";
import { useStateContext } from "../context/ContextProvider";

const AddTasks = () => {
  const { addTask } = useStateContext();

  return (
    <div className="bg-slate-100 p-4">
      <div>
        <NavLink to={"/"} key={"home"}>
          <button className="p-3 m-3 border-2 rounded-lg border-black bg-white">
            Back
          </button>
        </NavLink>
      </div>
      <AddTaskForm onAdd={addTask} />
    </div>
  );
};

export default AddTasks;
