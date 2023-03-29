import './App.css';
import Home from './views/Home';
import Navbar from './components/Navbar';
import About from './views/About';
import Gallery from './views/Gallery';
import Contact from './views/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className='divider' id='about'></div>
      <About/>
      <div className='divider' id='gallery'></div>
      <Gallery/>
      <div className='divider' id='contact'></div>
      <Contact/>
    </div>
  );
}

export default App;
