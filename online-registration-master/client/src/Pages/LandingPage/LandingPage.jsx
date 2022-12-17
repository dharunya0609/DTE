import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'
import { setCurrentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'

import { defaultDetails } from '../../actions/myDetails'
const LandingPage = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
      
        const result = JSON.parse(localStorage.getItem("EduLearn"))
        const token=result?.token;
      if(!result){
                  navigate('/Auth')
                }
        if(token){
                const decodedToken = decode(token)
                
                if(decodedToken.exp *1000  < new Date().getTime()){
                    handleLogout()
                    return
                }
              
               
                navigate('/home')
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("EduLearn"))))
        dispatch(defaultDetails())
    },[dispatch])
    
    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
        navigate('/Auth')
        dispatch(setCurrentUser(null))   
        
    }
    
  return (
    <Spinner />
  )
}

export default LandingPage