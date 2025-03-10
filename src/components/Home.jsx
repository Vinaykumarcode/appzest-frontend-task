import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Cards from './Cards'
import ComponentNotExists from './ComponentNotExists';

function Home() {
    const [home ,setHome]=useState("Dashboard");
  return (
    <div className="flex justify-between sm:flex-col">
      <Sidebar className="fixed z-1" home={home} setHome = {setHome}/>
      {
        home === "Dashboard" ? <Cards/>:<ComponentNotExists/>
      }
   
    </div>
  )
}

export default Home