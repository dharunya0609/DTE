import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Card.scss'
const Card = ({course}) => {
    const navigate = useNavigate()
    const navigation = () =>{
        const id = course._id;
        navigate(`/course/${id}`)
    }

  return (
    <div className="card-container" onClick={navigation}>
    <div className="card shadow">
        <div className="card-body">

        <div className="img-container mb-3">
            <img src={course.img ? course.img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR533f2Wg9gzzXVTLxQ3P5GLNJEzqd1H6pN3Q&usqp=CAU'} alt="img" />
        </div>
            <p className="card-title">{course.name}</p>
                        <p className="card-author">{course?.createdBy.name} | Seller</p>
                    
                        <div className="card-price mb-3">₹  {course.cost}</div>
                        <Link to={`/course/${course._id}`}className='card-btn btn mb-3' >Read More</Link>
        </div>
    </div>
            </div>
      )
}


export default Card
