import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Result from './pages/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MessageContextProvider } from './components/MessageContext';

function App() {
  return (
    <Router>
      <MessageContextProvider>
          <div>
            <NavigationBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/result" element={<Result />} />
            </Routes>
          </div>
        </MessageContextProvider>
    </Router>
  );
}

export default App;