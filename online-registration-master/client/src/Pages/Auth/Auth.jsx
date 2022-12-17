import React,{useState,useEffect} from 'react'
import SignUp from '../../components/SignUp/SignUp'
import Login from '../../components/Login/Login'
import Logo from '../../components/Logo/Logo'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import './Auth.scss'

const Auth = () => {
    const [login,isLogin]=useState(true);

    const dispatch=useDispatch();
    const navigate=useNavigate()
    const handleSwitch = () =>{
        isLogin(!login)
    }

    


  return (
    <div className='auth-container container mt-5'>
      <Logo />
        {
            login ? 
            
            <> 
            <Login /> 
            <p className='text-center mt-4 switch-content' >Dont Have an account <span onClick={handleSwitch}>New User?</span></p>
             </>
            : <> 
            <SignUp />
             <p  className='text-center mt-4 switch-content' >Already a User <span onClick={handleSwitch}> Login?</span></p>
              </>
        }
    </div>
  )
}

export default Auth