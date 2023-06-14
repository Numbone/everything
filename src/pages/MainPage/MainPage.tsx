import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div><Link to="/about">About</Link>
    <Link to="/">Main</Link></div>
  )
}

export default MainPage