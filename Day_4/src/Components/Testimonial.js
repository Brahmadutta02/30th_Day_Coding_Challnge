import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Trustpilot is an online review platform that promotes trustworthy reviews about a variety of business types. 
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Amazing food quality I ordered the food for my family living in Jaipur the staff is amazing and I got to know that food was very good and hygienic.
        Thanks Arya Restraunt for ur service during pandemic.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Robert Carry</h2>
      </div>
    </div>
  );
};

export default Testimonial;