import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import './index.css';

function App() {
  return (
<>
<Navbar />
<Hero />
<Home /> 
</>
  );
}

export default App