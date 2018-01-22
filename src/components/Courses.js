import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';


import CourseContainer from './courses/CourseContainer';

// data 
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = () => (
 
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>Javascript</NavLink></li>
      </ul>
    </div>
    
    
      <Route path='/courses' render={() => <Redirect to="/courses/html" />} />
      <Route path='/courses/html' render={()=> <CourseContainer data={HTMLCourses}/>} />
      <Route path='/courses/css' render={()=> <CourseContainer data={CSSCourses} />} />
      <Route path='/courses/javascript' render={()=> <CourseContainer data={JSCourses} />} />
    
  </div>
 
);

export default Courses;