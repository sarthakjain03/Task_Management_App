import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Task from "../components/Task";
import EditTaskForm from "../components/EditTaskForm";
import { useStateContext } from "../context/ContextProvider";

const TaskListPage = () => {
  const { taskLists, setTaskLists } = useStateContext();
  const [editedTask, setEditedTask] = useState(null);
  const [editTaskId, setEditTaskId] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const updateTask = (task, id) => {
    let updatedList = taskLists.map((t, index) => {
      if (index === id) {
        return {
          ...t,
          title: task.title,
          content: task.content,
          priority: task.priority,
        };
      }
      return t;
    });

    setTaskLists(updatedList);
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
  };

  const enterEditMode = (id) => {
    taskLists.map((task, index) => {
      if (index === id) {
        setEditedTask(task);
        setEditTaskId(id);
      }
    });
    setIsEditing(true);
  };

  return (
    <div className="p-4">
      {isEditing && (
        <div>
          <div>
            <button
              onClick={() => setIsEditing(false)}
              className="p-3 m-3 border-2 rounded-lg border-black bg-white"
            >
              Back
            </button>
          </div>
          <EditTaskForm
            editedTask={editedTask}
            editTaskId={editTaskId}
            updateTask={updateTask}
          />
        </div>
      )}
      {!isEditing && (
        <div>
          <div>
            <NavLink to={"/addtask"} key={"addtask"}>
              <button className="p-3 m-3 border-2 rounded-lg border-black bg-white">
                Add Tasks
              </button>
            </NavLink>
          </div>
          <div className="flex flex-wrap items-center">
            {taskLists.map((task, index) => {
              return (
                <Task
                  key={index}
                  id={index}
                  title={task.title}
                  content={task.content}
                  status={task.status}
                  priority={task.priority}
                  isComplete={task.complete}
                  onEdit={enterEditMode}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskListPage;
