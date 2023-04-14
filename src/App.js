import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header.js';
import Home from './Home';
import Project from './Project';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
