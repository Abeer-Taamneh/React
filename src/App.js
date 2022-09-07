import React,{useState,useEffect} from 'react'
import { ToastContainer} from 'react-toastify';
import {Routes,Route} from 'react-router-dom'
import Navigation from './components/navigation';
import Brands from'./components/brands'
import Products from './components/products';
import Origin from './components/origins';
import Units from './components/units';
import { CategoriesTreeView } from './components/categories';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import { getCurrentUser } from './service/userService';
const App = () => {
  const [user,setUser] = useState({})
  useEffect(() => {
    setUser(getCurrentUser())
  }, [])
  return (
   <div>
   <div>
     <ToastContainer />
     <Navigation user={user}/>  
     <Routes>    
        <Route path='/brands' element={<Brands user={user} />}/>
           <Route path='/products' element = {<Products/>} />
           <Route path='/origins' element = {<Origin/>} />
           <Route path='/categories' element = {<CategoriesTreeView allowEdit={true}/>} />
           <Route path='/register' element = {<Register/>} />
           <Route path='/units' element = {<Units/>} />
           <Route path='/login' element = {<Login/>} />
           <Route path='/logout' element = {<Logout/>} />
     </Routes>
    
   </div>

     </div>
  

  )
}

export default App

