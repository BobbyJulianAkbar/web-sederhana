// Result.js
import React, { useContext } from 'react';
import { MessageContext } from '../components/MessageContext';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Result = () => {
  const { messages } = useContext(MessageContext);

  return (
    <div className="home">
      <Header className="header" />
        <section className="content">
          <h1>Result Page</h1>
          <table className="table table-bordered">
            <tbody>
              {messages.map((message, index) => (
                <tr key={index}>
                  <td>{message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      <Footer className="footer" />
    </div>
  );
};

export default Result;