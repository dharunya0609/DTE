import * as api from '../api'

export const defaultDetails = () => async(dispatch)=>{
    try {
         const user=JSON.parse(localStorage.getItem('EduLearn'))
        const result=user.result
        dispatch({type:'SET_DEFAULT_DETAILS',payload:result})
    } catch (err) {
        alert(err.message)
    }
 }

 export const setMyDetails = ()=> async(dispatch) =>{
    try {
         const user=JSON.parse(localStorage.getItem('EduLearn'))
        const id = user.result._id
        const {data}= await api.myDetails(id);
        console.log(data)
        dispatch({type:'SET_DETAILS',payload:data})
    } catch (err) {
        alert(err.message)
    }
 }
