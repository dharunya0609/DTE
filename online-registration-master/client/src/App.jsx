import React,{ useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { getAllCourse } from './actions/course';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from './actions/currentUser';
import AllRoutes from './AllRoutes';

import './App.scss';

function App() {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getAllCourse())
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('EduLearn'))))
   
  },[dispatch])

  return (
    <div className="App">
      <Router>
          <AllRoutes />
      </Router>
    </div>
  );
}

export default App;

