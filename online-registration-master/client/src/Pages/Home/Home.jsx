import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import Spinner from '../../components/Spinner/Spinner'

import './Home.scss'
import { useEffect } from 'react'




const Home = () => {
  const courses =  useSelector((state) => (state.courseReducer))
  

  const [dataList,setDataList]=useState([])
  const [key,setKey]=useState('')
  
  const dispatch =  useDispatch()
  useEffect(()=>{
        const User = JSON.parse(localStorage.getItem('EduLearn'))
        
  },[dispatch])
 
  return (
    <>
    {
      courses.data === null ? <Spinner /> :
    
    <div className='home-container'>
        <Navbar />
        <div className="home-content container">
        <div className=" mt-5">
{/*         
            <input list="courses" name="course" id="course" value={key} className="form-control" onChange={e => setKey(e.target.value)}/>

            <datalist id="courses">
              {dataList.map(d=>(
                <option value={d.name} key={d._id} ><Link to={`/courses/${d._id}`} >{d.name}</Link></option>
              ))}
            
            </datalist> */}
            
        </div>
        <div className="row  my-5 d-flex justify-content-center">
          {courses.data.length==0 && <h2 className='text-center my-5'>NO POSTS CREATED</h2> }
          {courses.data.map(course => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={course._id}>
            <Card course={course}  />
            </div>
          ))}
          
        </div>
        </div>
    </div>
  
 
    }
     </>
  )
}

export default Home