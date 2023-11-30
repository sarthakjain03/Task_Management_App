import React, { useState } from 'react';
import { useStateContext } from '../context/ContextProvider';

const Task = (props) => {
  const [isChecked, setIsChecked] = useState(props.isComplete);
  const { taskLists, setTaskLists, deleteTask } = useStateContext()

  let priorityColor = "";
  function fetchPriorityColor(p) {
    if (p === 'low') {
      priorityColor = "text-green-600";
    } else if (p === 'medium') {
      priorityColor = "text-yellow-500";
    } else {
      priorityColor = "text-red-500";
    }
  }
  fetchPriorityColor(props.priority);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    const updatedTasks = taskLists.map((task, index) => {
      if(index === props.id){
          return {...task, status: e.target.checked ? 'Complete' : 'Incomplete', complete: e.target.checked}
      }
      return task
    })
    setTaskLists(updatedTasks)
  }

  function handleDeleteClick() {
    deleteTask(props.id);
  }

  function handleEditClick() {
    props.onEdit(props.id)
  }

  return (
    <div className="rounded-lg p-3 w-[300px] m-4 float-left shadow-md h-fit bg-white">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className='flex items-center justify-between'>
        <p className="font-semibold text-2xl mb-1 break-all">{props.title}</p>
        <span className={`uppercase ml-5 text-xs ${priorityColor}`}>{props.priority}</span>
      </div>
      <p className="mb-3 whitespace-pre-wrap break-words">{props.content}</p>
      <div className='flex items-center justify-between my-auto'>
        <span className="text-sm font-light float-left">{props.status}</span>
        <button onClick={handleDeleteClick} className="relative float-right mr-3 w-9 h-9 cursor-pointer outline-none text-sm">DELETE</button>
      </div>
      <button 
        onClick={handleEditClick} 
        className={`mt-3 w-full h-9 cursor-pointer outline-none text-sm bg-blue-600 rounded-lg text-white  ${props.status === 'Complete' ? 'opacity-60 cursor-not-allowed' : 'hover:text-blue-600 hover:bg-white hover:border-2 hover:border-blue-600'}`}
        disabled={props.status === 'Complete'}
      >
        EDIT
      </button>
    </div>
  );
};

export default Task;
