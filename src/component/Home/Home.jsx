import '../../App.css'
import React from 'react'
import {NavLink} from 'react-router-dom';
function Home() {
  return (
    <div>
      <NavLink to='/cont'  className={({ isActive }) =>
     isActive ? "red" : "blue"
  }
 >
        CliCK ME
      </NavLink>
      <h6 onClick={()=>{
        alert()
      }}>HEllo Ew</h6>
    </div>
  )
}

export default Home
