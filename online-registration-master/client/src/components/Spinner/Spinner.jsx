import React from 'react'
import './Spinner.scss'
const Spinner = () => {
  return (
    <div className="spinner-container">
        <div className="spinner-border" role="status">
                <div className="spinner-logo">
                        <i className="fa-solid fa-graduation-cap" /> 
                 </div>
        </div>
    </div>
  )
}

export default Spinner