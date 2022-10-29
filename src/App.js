import './App.css';
import NavBar from "./Navbar.js";
import {Routes,Route} from "react-router-dom";
import {Crypto} from "./crypto/list";
import {Stockmarket} from "./stockmarket";
import {About} from "./about";
import CryptoDetail from './crypto/detail/cryptoDetail';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/crypto" element={<Crypto/>} />
      <Route path="/stockmarket" element={<Stockmarket/>} />
      <Route path="/detail" element={<CryptoDetail/>}/>
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  );
}

export default App;
//api key = Q75778SE1TM96NYL
