import React from 'react'
import './DetailsCard.scss'
import Spinner from '../Spinner/Spinner'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { enrollCourse } from '../../actions/course'
import { useEffect } from 'react'
import Payment from '../Payment/Payment'
import { useState } from 'react'

const DetailsCard = ({course}) => {
    const User = useSelector((state) => (state.currentUserReducer))
    const Details = useSelector((state) => (state.detailsReducer))
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [payment,setPayment]=useState(false)

    const handleSubmit = () =>{
        // const id =  User.result._id
        // const course_id =  course._id
        // dispatch(enrollCourse(id,course_id,navigate))
        setPayment(!payment)
    }

    const enrolled = Details?.data?.enrolled.filter(m => m._id == course._id)
    
    
  return (
    <>
     {course ==null ? <Spinner /> :
     
     <div className="details-card-container container mt-5">
        <div className="row first-container shadow">
            <div className="col-4">
              <div className="img-container">
                <img src={course.img} alt="" />
            </div>
            </div>
            <div className="col-6">
                <div className="course-details">
                      <p className="course-name">{course.name}</p>
                      <p className='course-author'>SELLER - {course.createdBy.name}</p>
                      <p className='course-description'>{course.desc}</p>
                      <p className="course-amount">₹{course.cost}</p>
                      <p className="course-duration">Duration : {course.duration}months</p>
                    {enrolled[0]?._id!=course._id ?<button onClick={handleSubmit} className='course-enroll-button btn'>BUY THIS !</button> :'' }                     
                </div>
            </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                  <h2 className='text-center'>VIDEOS</h2>
                  <div className="videos-container row my-5">

                  {course.videos.map((m,idx) => (
                    <div className="video-details col-4" key={idx} >
                        <p className='video-title text-center'>{idx+1}.{m.title}</p>
                            <div className="you-tube-container">
                              <iframe className='video'
                                      title='Youtube player'
                                      sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                      src={`https://youtube.com/embed/${m.link.slice(-11)}?autoplay=0`} >
                              </iframe>
                              </div>
                          </div>

                    
                  ))}
                  </div>
              </div>
            </div>
              <div className="payment shadow">
                
            {payment &&  <Payment handleDisplay={handleSubmit} user={User} course={course} />}
                </div>
            
            </div>
          
           
}

    </>    
  
    
  )
}

export default DetailsCard





