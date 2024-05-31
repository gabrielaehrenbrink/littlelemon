import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer';
import Specials from './Components/Specials'
import About from './Components/About'
import './App.css';

function App() {
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
