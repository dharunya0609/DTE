import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../actions/auth'
import './SignUp.scss'
const SignUp = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const dispatch=useDispatch()
  const navigate =useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
  
    dispatch(signUp({name,email,password},navigate))
  }

  return (
    <div className='signup-container mt-5'>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="my-3 text-center">SIGNUP</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label  className="form-label">NAME</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">EMAIL</label>
                    <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">PASSWORD</label>
                    <input type="password"  className="form-control" value={password} onChange={e=>setPassword(e.target.value)} />
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn">SIGNUP</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignUp