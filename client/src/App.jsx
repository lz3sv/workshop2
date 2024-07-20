import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './home/Home'
import Login from './login/Login'
import Register from './register/Register'
import Catalog from './catalog/Catalog'
import Create from './create/Create'






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
