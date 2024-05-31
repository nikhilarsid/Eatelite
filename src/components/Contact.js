import React from "react";

const Contact = () => {
  return (
    <div className="contactus">
      <div className="info">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question about our menu, your order, or anything else, our team is ready to answer all your questions.</p>
        
        <h2>Get in Touch</h2>
        <p><strong>Address:</strong> 123 Foodie Street, Gourmet City, FL 56789</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> support@fooddeliveryapp.com</p>

        <h2>Follow Us</h2>
        <p>Stay connected with us on social media for the latest updates and offers:</p>
        <p>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
