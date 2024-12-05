import React from 'react';
import './Testimonials.css'; // Make sure to import the CSS file

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Customers Are Saying</h2>
        
        <div className="testimonial">
          <p>"The food is absolutely amazing! The farm-to-table experience is unbeatable, and the staff is so friendly!"</p>
          <h4>- Kate Johnson</h4>
        </div>

        <div className="testimonial">
          <p>"A wonderful dining experience! The seasonal dishes are always fresh and tasty!"</p>
          <h4>- Jane Smith</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
