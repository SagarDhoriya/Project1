import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send message using a backend API or email service
    setSent(true);
  };

  return (
    <div className="contact-us-container my-5">
      <h1>Contact Us</h1>
      {!sent ? (
        <form onSubmit={handleSubmit} className="contactus">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          ></textarea>
          <button type="submit" onClick={()=>navigate('/')}>Send</button>
        </form>
      ) : (
        <p>Thank you for contacting us!</p>
      )}
    </div>
  );
};

export default ContactUs;
