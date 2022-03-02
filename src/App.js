import About from './components/About';
import Conact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <header>
        <h1>Claire Wright</h1>
        <ul>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </header>
      <main>
        {/* conditionally render components here */}
      </main>
      <footer>
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Other</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
