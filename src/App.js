import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <section>
        <AppRouter />
      </section>
    </BrowserRouter>
  );
}

export default App;
