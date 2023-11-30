import React, { useState } from 'react'
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const EditTaskForm = ({editedTask, editTaskId, updateTask}) => {
  const [newEditedTask, setEditTask] = useState(editedTask)

  function handleChange(event) {
    const { name, value } = event.target;

    setEditTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }

  function submitTask(event) {
    event.preventDefault();
    if (newEditedTask.title.trim() === "") {
      alert("Title is required.");
      return
    }
    
    updateTask(newEditedTask, editTaskId)
  }

  return (
      <div>
      <form 
        onSubmit={submitTask}
        className="relative w-[480px] mb-5 mx-auto p-4 rounded-lg shadow-lg bg-white"
      >
        <input
          name="title"
          onChange={handleChange}
          value={newEditedTask.title}
          placeholder="Title"
          className="w-full border-0 p-2 outline-none resize-none text-lg"
          required
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={newEditedTask.content}
          placeholder="Description..."
          rows="3"
          className="w-full border-0 p-2 outline-none resize-none text-lg"
        />
        <button
          type='submit'
          className="absolute right-4 bottom-[-18px] bg-yellow-300 border-0 rounded-3xl w-11 h-11 shadow-sm cursor-pointer outline-none text-sm"
        >
          SAVE
        </button>

        <Box sx={{ maxWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="priority"
              value={newEditedTask.priority}
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
  )
}

export default EditTaskForm