import React,{useState} from 'react'
import './EditProfile.scss'
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import Logo from '../../components/Logo/Logo'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import  {editProfile} from '../../actions/auth'
const EditProfile = () => {
  const User = useSelector((state)=>(state.currentUserReducer))
  const Details = useSelector((state) => (state.detailsReducer))
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [name,setName]=useState(User?.result?.name)
  const [skills,setSkill] =useState()
  const [phone,setPhone]=useState(Details.data.phone)
  const id=User.result._id
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(editProfile({name,skills,phone,id},navigate))
  }
  return (
      <div className="edit-profile-container">
        <Navbar />
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
                <Logo />
                <div className="edit-form-container mt-2">
                <div className="card shadow">
                  <div className="card-body">
                      <form onSubmit={handleSubmit}>
                         <div className="form-group mb-3">
                          <label  className="form-label">Name</label>
                          <input type="tel" className="form-control" value={name} onChange={e => setName(e.target.value)}  />
                        </div>
                        <div className="form-group mb-3">
                          <label  className="form-label">Email</label>
                          <input type="email" className="form-control" value={User?.result?.email} readOnly/>
                        </div>
  
                        <div className="form-group mb-3">
                          <label  className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" value={phone} onChange={e => setPhone(e.target.value)}  />
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">Year of Study and Department</label>
                          <input type="text" placeholder="Ex: html,css" className="form-control"   onChange={(e) => setSkill(e.target.value.split(' '))} />
                        </div>
                      
                        <div className="d-grid gap-8">
                          <button className="btn">Update Profile</button>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default EditProfile