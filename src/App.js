import './App.css';
import { Hero, About, Products, Press, Partners, Footer } from './components'

function App() {
  return (
    <div className="App">
      <main className='main'>
        <Hero/>
        <About/>
        <Products/>
        <Press/>
        <Partners/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
