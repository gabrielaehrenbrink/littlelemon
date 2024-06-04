import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer';
import Specials from './Components/Specials'
import About from './Components/About'
import BookingPage from './Components/BookingPage'
import './App.css';

const initializeTimes = () => (['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

const updateTimes = (state, action) => {
    // For now, return the same times regardless of the date
    return state;
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Specials />
            <Testimonials />
            <About />
          </>
        } />
        <Route path="/home" element={<Header />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
