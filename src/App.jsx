import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/register/Register'
import Login from './components/login/Login'

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
function App() {
 
  return (
    <>
    
    <Router>
    <Navbar className="fixed z-10"/>
    
   
     <Routes>
     <Route exact path='/' element={<Cards/>}></Route>
       <Route  path='/register' element={<Register/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
      
       {/* <Route path='/cards' element={<Cards/>}></Route> */}
     </Routes>
    </Router>
       
    </>
  )
}

export default App
