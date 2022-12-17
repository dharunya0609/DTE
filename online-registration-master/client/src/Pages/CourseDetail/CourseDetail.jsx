import React from 'react'
import './CourseDetail.scss'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect } from 'react'
import DetailsCard from '../../components/DetailsCard/DetailsCard'
import Spinner from '../../components/Spinner/Spinner'

const CourseDetail = () => {
 
  const courses = useSelector((state) => (state.courseReducer))
  const {id} = useParams()

  return (
    <div className="course-detail-container">
          <Navbar />
          {courses.data=== null ? <Spinner /> : 
            <div className="course-detail-container">
                {
                  courses.data.filter(course => course._id===id).map(course =>(
                    <DetailsCard course={course} key={course._id} />
                  ))
                }
            </div>
          }
          
    </div>
  )
}

export default CourseDetail