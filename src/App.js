import Header from './Components/Header';
import Nav from './Components/Nav';
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer';
import Specials from './Components/Specials'
import About from './Components/About'
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
