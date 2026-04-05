import React from 'react'
import { Link, Outlet } from 'react-router'

function Dashboard() {
  return (
    <>
   <div>Dashboard</div>
   <div style={{display:'flex',
                justifyContent: 'center',
                alignItems:'center',
                gap:'20px',
                margin: '5px 0px'
   }}>

    <Link to={'/dashboard'}>Admain</Link>
    <Link to={'/dashboard/teacher'}>Teacher</Link>
    <Link to={'/dashboard/student'}>Student</Link>

   </div>
    <Outlet/>
</>
  )
}

export default Dashboard
