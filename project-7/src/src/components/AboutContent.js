import { Link } from "react-router-dom";
import"./AboutContent.css";
import React from 'react'

function AboutContent() {
  return (
    <div className="about"> 
    <div className="contant"> 
    <h1>Who Am I?</h1>
    <p>Hello,my name is abdelrahman Ali Ahmed and I'm student in computer science in fayoum university and l learn frontend react from meta in Coursera,and I want to improve my self by try to get opportunity in this track and I have leaned digital marketing in Coursera and I have graduated this year</p>
    <Link to={"/contact"} className="btn">Contact</Link>
    </div>
    </div>
  )
}

export default AboutContent