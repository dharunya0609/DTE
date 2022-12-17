import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import EditProfile from './Pages/EditProfile/EditProfile'
import Teach from './Pages/Teach/Teach'
import AddCourse from './Pages/AddCourse/AddCourse'
import CourseDetial from './Pages/CourseDetail/CourseDetail'
import LandingPage from './Pages/LandingPage/LandingPage'
import MyCourses from './Pages/MyCourses/MyCourses'
const AllRoutes = () => {
  return (
   <>
   <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/home' element={<Home />} />
      <Route path='/mycourses' element={<MyCourses />}/>
      <Route path='/profile/public' element={<Profile />} />
      <Route path='/profile/edit' element={<EditProfile/>} />
      <Route path='/profile/teach' element={<Teach />} />
      <Route path='/addcourse' element={<AddCourse />} />
      <Route path='/course/:id' element={<CourseDetial />} />
   </Routes>
   </>
  )
}

export default AllRoutes

