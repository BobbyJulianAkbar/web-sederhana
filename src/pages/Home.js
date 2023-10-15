// Home.js
import React, { useContext } from 'react';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Gambar1 } from '../components/Gambar';
import { MessageContext } from '../components/MessageContext';

const Home = () => {
  const { messages } = useContext(MessageContext);
  return (
    <div className="home">
      <Header className="header" />
      <section className="content">
        <p>
          Selamat datang pada program ini
        </p>
        <p>Saya, Bobby Julian Akbar Membuat program ini dalam rangka memenuhi</p>
        <div>
          <Gambar1 />
        </div>
        <h1>Jumlah Pesan: {messages.length}</h1>
      </section>
      <Footer className="footer" />
    </div>
  );
};

export default Home;