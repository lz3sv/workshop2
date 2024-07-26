import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Catalog from './components/catalog/Catalog'
import Create from './components/create/Create'
import Details from './components/details/Details'
import { AuthContext } from './context/AuthContext'







function App() {
  const [authState, setAuthState] = useState({})

  const changeAuthState=(state)=> {
    setAuthState(state)
  }

  const contextData={
    email: authState.email,
    userId: authState._id,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  }
  return (
    <AuthContext.Provider value={contextData}>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:gameId/details' element={<Details />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  )
}

export default App
