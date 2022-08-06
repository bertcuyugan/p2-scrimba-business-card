import { useState } from 'react';
import './App.css';

import Header from "./components/Header";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";




export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Header />
      <About />
      <Interest />
      <Footer />
    </div>
  );
};

