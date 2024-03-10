import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Hero from './components/body/hero';
import SubHeader from './components/header/sub-header';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
    </div>
  );
}

export default App;