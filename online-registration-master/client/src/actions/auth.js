import * as api from '../api'
import { setCurrentUser } from './currentUser'
import { setMyDetails } from './myDetails'

export const signUp=(authData,navigate) => async(dispatch) =>{
    try {
            const {data}= await api.signUp(authData)
            dispatch({type:'AUTH',data})
            dispatch(setCurrentUser(JSON.parse(localStorage.getItem('EduLearn'))))
            navigate("/home")
    } catch (err) {
        alert(err.message);
    }
}

export const login= (authData,navigate) => async(dispatch) =>{
    try{
        const {data} = await api.logIn(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('EduLearn'))))
        navigate("/home")
    }catch(err){
         alert(err.message)
    }
    
}

export const editProfile = (editData,navigate) =>async(dispatch) =>{
        try {
            const {data} =api.editProfile(editData)
            navigate('/home')
            alert("edit successfull")
            dispatch(setMyDetails())
        } catch (err) {
            console.log(err.message)
        }    
}

export const setMentor = (mentorData,navigate) => async(dispatch) =>{
    try {
        const {data} = api.setMentor(mentorData)
        navigate("/home")
        alert("you are a mentor")
        dispatch(setMyDetails())
    } catch (err) {
        alert(err.message)
    }
}