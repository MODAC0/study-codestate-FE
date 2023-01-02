import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Aside from './components/Aside';
import Footer from './components/Footer'
import data from './static/staticData'

function App() {
  const [idx, setIdx] = useState(0)
  return (
    <div className="App">
      <Header />
      <div class="container">
        <Nav idx={idx} setIdx={setIdx} />
        <Main idx={idx} />
        <Aside idx={idx} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
