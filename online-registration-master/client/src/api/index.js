import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/'})


export const logIn = (authData) => API.post('/user/login',authData)
export const signUp = (authData) => API.post('/user/signup',authData)

export const getAllCourse = () => API.get('/course');
export const createCourse = (courseData) =>API.post("/course",courseData);
export const enrollCourse = (id,course_id) =>API.post('/course/enroll',{id,course_id})


export const editProfile = (editData) =>API.patch('/user/profile',editData)

export const setMentor =(mentorData)=> API.patch('/user/mentor',mentorData)

export const myDetails=(id) => API.get(`/user/${id}`)