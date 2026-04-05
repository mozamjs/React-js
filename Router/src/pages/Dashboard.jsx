import React from 'react'
import { Link , Outlet } from 'react-router'

function Dashboard() {
  return (
    <div>
      <h3>Dashboard</h3>
      <nav>
            <Link to={"profile"}>Profile</Link>
            <Link to={"setting"}>Setting</Link>

            <Outlet/>
      </nav>
    </div>
  )
}

export default Dashboard
                                                           