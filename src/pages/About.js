// About.js
import React from 'react';
import './Home.css';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="home">
      <section className="content">
      <h1>About</h1>
        <p>------------------------------------------------------</p>
        <p>
          Program ini dibuat oleh Bobby Julian Akbar
        </p>
        <p>------------------------------------------------------</p>
        <p>
          Program ini dibuat menggunakan Library React JS
        </p>
        <p>------------------------------------------------------</p>
        <p>
          Program ini dibuat menggunakan bahasa javascript dengan HTML dan CSS
        </p>
        <p>------------------------------------------------------</p>
        <h1>
          SEMOGA PROGRAM INI DAPAT MEMBERIKAN WAWASAN YANG LEBIH LUAS DALAM PENGGUNAKAN LIBRARY REACT JS :)
        </h1>
      </section>
      <Footer className="footer" />
    </div>
  );
};

export default About;