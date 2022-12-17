import React,{ useState }  from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../actions/auth'
import './Login.css'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
            e.preventDefault();
            if(!email || !password){
                alert("enter all credentails")
            }
            dispatch(login({email,password},navigate))
    }
  return (
    <div className='login-container mt-5'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card shadow">
                    <div className="card-body">
                        <h2 className='text-center '>LOGIN</h2>
                  
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                              <label className="form-label">EMAIL</label>       
                              <input type="text" className="form-control"  value={email} onChange={e => setEmail(e.target.value)}/>           
                        </div>
                        <div className="form-group mb-3">
                            <label  className="form-label">PASSWORD</label>
                            <input type="password" className='form-control' value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="d-grid gap-2 mb-3">
                            <button className="btn">LOGIN</button>
                        </div>
                        <p className='forgot'>FORGET PASSWORD</p>
                    </form>
            </div>
            </div>
    </div>
        </div>
    </div>
  )
}

export default Login