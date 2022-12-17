import React from 'react'
import { useEffect } from 'react'
import Card from '../../components/Card/Card'
import { useSelector,useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import Spinner from '../../components/Spinner/Spinner'

const MyCourses = () => {
  
   
    const Details =  useSelector((state) => (state.detailsReducer))
    
   
  return (
    <div className="my-course-details-container">
      <Navbar />
          {Details.data==null ? <Spinner  />:
          <div className="container my-5">
      <div className="row d-flex justify-content-center">
        {Details.data.enrolled.length==0 && <h2 className='text-center my-5'>NO POSTS CREATED</h2>}
        {Details?.data.enrolled.map(course => (
         <div className="col-sm-6 col-md-4 col-lg-3 my-3" key={course._id}>
                  <Card course={course} />
         </div>
        ))}
        </div>
      </div>
}
    </div>

  )
}

export default MyCourses
