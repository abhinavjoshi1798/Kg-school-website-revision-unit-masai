import './App.css';
import Navbar from "./Components/Navbar"
import Offersection from './Components/Offersection';
import Welcomesection from './Components/Welcomesection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcomesection />
      <Offersection />
    </div>
  );
}

export default App;
