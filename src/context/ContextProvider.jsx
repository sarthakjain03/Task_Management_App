import React, { useContext, createContext, useState, useEffect } from "react"

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
  const [taskLists, setTaskLists] = useState(() => {
    const storedData = localStorage.getItem("taskLists")
    return storedData ? JSON.parse(storedData) : []
  })

  useEffect(() => {
      localStorage.setItem("taskLists", JSON.stringify(taskLists));
  }, [taskLists])

  function deleteTask(id) {
    setTaskLists((prevTasks) => {
      return prevTasks.filter((task, index) => {
        return index !== id;
      })
    })
  }

  function addTask(newtask) {
    setTaskLists((prevTasks) => {
      return [...prevTasks, newtask];
    })
  }

  return (
    <StateContext.Provider
      value={{
        taskLists,
        setTaskLists,
        deleteTask,
        addTask,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
