import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { defaultDetails } from '../../actions/myDetails'
import { setCurrentUser } from '../../actions/currentUser'
import './Navbar.scss'
import { useEffect } from 'react'
const Navbar = () => {
  const dispatch=useDispatch();
  const User =  useSelector((state) => (state.currentUserReducer))
  const Details = useSelector((state) => (state.detailsReducer))
  useEffect(()=>{
    dispatch(defaultDetails())
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('EduLearn'))))
  },[dispatch])

 
  return (
   
    <nav className="navbar navbar-expand-md bg-light">
    <div className="container-lg">
      <a className="navbar-brand" href="#"><i class="fa-solid fa-location-dot"></i> RELIANT HOSTEL APPLICATION</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink to='/home' className="nav-link" activeclassname='active'>HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/mycourses' className='nav-link' activeclassname='active' >MY_WISHLIST</NavLink>
            </li>
            {
              (User?.result?.isMentor || Details?.data?.isMentor) &&
            <li className="nav-item">
                <NavLink to='/addcourse' className="nav-link" activeclassname='active'>SELL_PRODUCTS</NavLink>
            </li>
        }
            <li className="nav-item">
                <NavLink to='/profile/public' className='nav-link' activeclassname='active' >USER_PROFILE</NavLink>
            </li>
           
        </ul>
      </div>
    </div>
  </nav>
    
  )
}

export default Navbar