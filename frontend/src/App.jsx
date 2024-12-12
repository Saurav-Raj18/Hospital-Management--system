import React from 'react'
import Home from './pages/Home'
import { Link, Route,Routes } from 'react-router-dom'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from './pages/SignUp'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='max-w-7xl mx-auto p-5'>
     <Navbar/>
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path='/doctor' element={<Doctors/>}/>
         <Route path='/doctor/:speciality' element={<Doctors />} />
         <Route path='/login' element={<Login/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/sign-up' element={<SignUp/>}/>
         <Route path='/my-profile' element={<MyProfile/>}/>
         <Route path='/my-appointment' element={<MyAppointment/>}/>
         <Route path='/appointment/:docId' element={<Appointment/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App