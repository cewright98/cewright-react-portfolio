import About from './components/About';
import Conact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        {/* conditionally render components here */}
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
