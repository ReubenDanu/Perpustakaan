import './app.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
// import Footer from './components/Footer.js';
function App() {
  return (
    <div>
    {/* Navbar or Header */}
      <Navbar />
    {/* {/* Main content */}
    <Home />
    <About />
    {/* <Footer /> */} 
    </div>
  );
}

export default App;
