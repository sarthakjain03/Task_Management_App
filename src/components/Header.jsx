import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className="flex items-center bg-black shadow-md">
        <h1 className="text-3xl m-5 cursor-pointer text-white" onClick={handleClick}>Task Manager</h1>
    </div>
  )
}

export default Header