import "../assets/css/Form.css";
import React from 'react';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Form = () => {
  return (
    <div className="page-container">
      <div className="form-container">
        <div className="form-wrapper">
          <form action="" className="form">
            <input type="text" className="name" placeholder="Name"/>
            <input type="text" className="email" placeholder="Email"/>
            <input type="text" className="role" placeholder="Role"/>
            <input type="text" className="stack" placeholder="Stack"/>
            <input type="text" className="years" placeholder="Years of experience"/>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
    </div>
      <div className="calender-container">
        <Calendar />
      </div>
    </div>
  )
}

export default Form
