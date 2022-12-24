import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import { AuthContext } from './context/useContext';


function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const isAuthLS = localStorage.getItem('auth')
    const isAuthParsed = JSON.parse(isAuthLS)
    if (isAuthParsed) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <section>
          <AppRouter />
        </section>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
