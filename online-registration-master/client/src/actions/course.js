import * as api from '../api'
import { setMyDetails } from './myDetails'
export const createCourse = (courseData,navigate) => async(dispatch) =>{
    try{
        const {data}=await api.createCourse(courseData)
        navigate('/home')
        dispatch(getAllCourse())
    }catch(err){
        console.log(err.message)
    }
}

export const getAllCourse = () =>async(dispatch) =>{
    try {
        const {data} = await api.getAllCourse();
        dispatch({type:'FETCH_ALL_COURSE',payload:data})
    } catch (err) {
        console.log(err.message)
    }
}


export const enrollCourse = (id,course_id,navigate) => async(dispatch) =>{
    try {
        
        const {data} = await api.enrollCourse(id,course_id)
        navigate('/home')
        dispatch(setMyDetails())
            
    } catch (err) {
            console.log(err.message)
    }
}

