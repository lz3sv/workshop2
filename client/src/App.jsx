import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Catalog from './components/catalog/Catalog'
import Create from './components/create/Create'






function App() {


  return (
    <div id="box">
      <Header/>
      <main id="main-content">
        <Routes>
          <Route path= '/' element={<Home/>}/>
          <Route path= '/login' element={<Login/>}/>
          <Route path= '/register' element={<Register/>}/>
          <Route path= '/catalog' element={<Catalog/>}/>
          <Route path= '/create' element={<Create/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
