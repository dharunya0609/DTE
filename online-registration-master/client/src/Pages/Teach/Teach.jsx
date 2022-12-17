import React,{useEffect} from 'react'
import './Teach.scss'
import SideBar from '../../components/SideBar/SideBar'
import Navbar from '../../components/Navbar/Navbar'
import Logo from '../../components/Logo/Logo'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import { setMentor } from '../../actions/auth'

const Teach = () => {
   const Details = useSelector((state) => (state.detailsReducer))
  const User=useSelector((state) => (state.currentUserReducer) )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [phone,setPhone] = useState(Details.data.phone)
 const [skills,setSkill] =useState('')
 const [experience,setExperience] = useState('')
 const [language,setLanguage]=useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    const isMentor = true;
    const id = User?.result?._id
    dispatch(setMentor({phone,skills,experience,language,isMentor,id},navigate))
    
  } 
  return (
    <div className="teach-container">
        <Navbar />
        <div className="row">
            <div className="col-3">
                <SideBar />
            </div>
            <div className="col-9">
              <Logo />
              <div className="teach-form-container mt-3">
                <div className="card shadow">
                  <div className="card-body">
                      <form onSubmit={handleSubmit}>
                         <div className="form-group mb-3">
                          <label  className="form-label">Name</label>
                          <input type="tel" className="form-control" value={User?.result?.name} readOnly />
                        </div>
                        <div className="form-group mb-3">
                          <label  className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">Product</label>
                          <input type="text" placeholder="Ex: Books" className="form-control" onChange={e => setSkill(e.target.value.split(','))} />
                        </div>
                        <div className="form-group mb-3">
                          <label  className="form-label">Product Description</label>
                          <input type="text" className="form-control" onChange={e => setExperience(e.target.value.split(','))}/>
                        </div>
                        <div className="form-group mb-3">
                          <label className="form-label">Reselling Price</label>
                          <input type="text"  className="form-control" onChange={e => setLanguage(e.target.value.split(','))} />
                        </div>
                        <div className="d-grid gap-8">
                          <button className="btn">BECOME A SELLER</button>
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

export default Teach