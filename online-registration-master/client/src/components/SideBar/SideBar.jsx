import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCurrentUser } from '../../actions/currentUser'
import './SideBar.scss'
const SideBar = () => {
  const User = useSelector((state) => (state.currentUserReducer))
  const Details= useSelector((state) =>(state.detailsReducer))
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"});
    localStorage.removeItem('EduLearn')
    dispatch(setCurrentUser(null))
    navigate('/')

  }
  return (
   <nav className='profile-sidebar'>
    <NavLink to='/profile/public' className='side-nav-bar' activeclassname='active' >VIEW_PROFILE</NavLink>
    <NavLink to='/profile/edit' className='side-nav-bar' activeclassname='active'>EDIT_PROFILE</NavLink>
    {!Details.data.isMentor &&  <NavLink to='/profile/teach' className='side-nav-bar' activeclassname='active'>SELL_YOUR_PRODUCTS</NavLink>}
   
    <p className='side-nav-bar' onClick={handleLogout}>LOGOUT</p>
   </nav>
  )
}

export default SideBar