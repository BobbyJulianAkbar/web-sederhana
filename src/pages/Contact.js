// Contact.js
import React, { useState, useContext } from 'react';
import { MessageContext } from '../components/MessageContext';
import './Home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
  const { addMessage } = useContext(MessageContext);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(message);
    setMessage(''); // Clear the input field
  };

  return (
    <div className="home">
      <Header className="header" />
      <section className="content">
        <h1>Contact Page</h1>
        <p>Silahkan ketik pesan pada form di bawah</p>
        <p>------------------------------------------------------</p>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
          />
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </section>
      <Footer className="footer" />
    </div>
  );
};

export default Contact;
