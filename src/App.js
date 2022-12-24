import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import { AuthContext } from './context/useContext';
import { Provider } from 'react-redux'
import store from './store'
import ClickCounter from './components/ClickCounter/ClickCounter';

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
    <Provider store={store}>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
      }}>
        <BrowserRouter>
          <ClickCounter />
          <header>
            <Navbar />
          </header>
          <section>
            <AppRouter />
          </section>
        </BrowserRouter>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
