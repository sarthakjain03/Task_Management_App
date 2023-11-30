import React, { useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddTaskForm = (props) => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "Incomplete",
    priority: "",
    complete: false
  });

  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target;

    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }

  function submitTask(event) {
    if (task.title.trim() === "") {
      alert("Title is required.");
      return
    }

    props.onAdd(task);
    setTask({
      title: "",
      content: "",
      status: "Incomplete",
      priority: "",
      complete: false
    });
    event.preventDefault();
    navigate('/')
  }

  return (
    <div>
      <form className="relative w-[480px] mb-5 mx-auto p-4 rounded-lg shadow-lg bg-white">
        <input
          name="title"
          onChange={handleChange}
          value={task.title}
          placeholder="Title"
          className="w-full border-0 p-2 outline-none resize-none text-lg"
          required
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={task.content}
          placeholder="Description..."
          rows="3"
          className="w-full border-0 p-2 outline-none resize-none text-lg"
        />
        <button
          onClick={submitTask}
          className="absolute right-4 bottom-[-18px] bg-yellow-300 border-0 rounded-3xl w-10 h-10 shadow-sm cursor-pointer outline-none text-sm"
        >
          Add
        </button>

        <Box sx={{ maxWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="priority"
              value={task.priority}
              label="Priority"
              onChange={handleChange}
            >
              <MenuItem value={'low'}>Low</MenuItem>
              <MenuItem value={'medium'}>Medium</MenuItem>
              <MenuItem value={'high'}>High</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </form>
    </div>
  );
};

export default AddTaskForm;
