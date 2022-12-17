import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Logo from '../../components/Logo/Logo'
import SideBar from '../../components/SideBar/SideBar'
import {useSelector} from 'react-redux'
import moment from 'moment'
import './Profile.scss'

const Profile = () => {
  const User=useSelector((state) => (state.currentUserReducer) )
  const Details = useSelector((state) => (state.detailsReducer))
  return (
    <div className='profile-container'>
                <Navbar/>
                <div className="row">
                     <div className="col-3">
                      <SideBar />
                      </div>
                      <div className="col-9">
                          <Logo />
                          <div className="public-profile-details my-5">
                                <div className="profile-avator shadow">
                                     {Details.data.name.charAt(0)}
                                </div>
                                <p className='text-muted'>Joined On - {moment(Details?.data?.joinedOn).fromNow()}</p>
                                <div className="profile-name my-3 shadow">
                                  {Details?.data?.name}
                                </div>
                                <div className="profile-email my-3 shadow">
                                  {Details?.data?.email}
                                </div>
                                <div className="profile-courses-enrolled my-3 shadow">
                                  POSTS UPLOADED - <span> {Details.data.enrolled.length} </span>
                                </div>
                          </div>
                      </div>

                </div>
    </div>
  )
}

export default Profile