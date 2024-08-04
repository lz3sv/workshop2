
import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Catalog from './components/catalog/Catalog'
import Create from './components/create/Create'
import Details from './components/details/Details'
import { AuthContextProvider } from './context/AuthContext'
import Logout from './components/logout/Logout'
import Edit from './components/edit/Edit'
import RouteGuard from './components/common/routeGuard'
import PrivateGuard from './components/common/privateGuard'







function App() {
  




  return (
    <AuthContextProvider>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:gameId/details' element={<Details />} />
            
            <Route path='/create' element={<RouteGuard><Create /></RouteGuard>} />
            <Route element={<PrivateGuard/>}>
              <Route path='/create' element={<Create />} />
              <Route path='/catalog/:gameId/edit' element={<Edit />} />
              <Route path='/logout' element={<Logout />} />
            </Route>
            
            {/* <Route path='/create' element={<RouteGuard><Create /></RouteGuard>} /> */}

          </Routes>
        </main>
      </div>
    </AuthContextProvider>
  )
}

export default App
