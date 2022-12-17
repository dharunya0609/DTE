import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Payment.scss'
import { enrollCourse } from '../../actions/course'
const Payment =({user,course,handleDisplay}) => {
const dispatch = useDispatch()
const navigate=useNavigate()
    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log('called')
         const id =  user.result._id
        const course_id =  course._id
        dispatch(enrollCourse(id,course_id,navigate))
    }
  return (
    <div className="payment-container shadow">
    <div className="container p-0">
        <div className="card px-4">
            <form onSubmit={handleSubmit}>
           <div className="payment-header">
                <p className='payment-name'>PAYMENT FOR {course.name}</p>
                <p onClick={handleDisplay} className='span-x'>X</p>
           </div>
            <div className="row gx-3">
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Person Name</p>
                        <input className="form-control mb-3" type="text" placeholder="Name" value={user.result.name} required />
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Card Number</p>
                        <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" required />
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Expiry</p>
                        <input className="form-control mb-3" type="text" placeholder="MM/YYYY" required />
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">CVV/CVC</p>
                        <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary mb-3">
                        
                        <span className="ps-3">₹{course.cost}</span>
                        <span className="fas fa-arrow-right"></span>
                    </button>
                </div>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Payment
