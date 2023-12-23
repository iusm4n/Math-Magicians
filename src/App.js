import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Quote from './components/Quote.jsx'
import Home from "./components/Home.jsx"
import Calculator from './components/Calculator.jsx';


function App() {
  return (
    <>
      <BrowserRouter basename='Math-Magicians'>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
