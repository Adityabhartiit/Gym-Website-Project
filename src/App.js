import './App.css';
import Home from './components/Home';
import Program from './components/Programs/Program';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans'
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Home/>
        <Program/>
        <Reasons/>
        <Plans/>
        <Testimonials/>  
        <Join/>
        <Footer/>
    </div>
  );
}

export default App;
