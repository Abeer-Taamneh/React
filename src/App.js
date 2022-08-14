import './App.css';

import { ToastContainer,toast} from 'react-toastify';
import {Routes,Route} from 'react-router-dom'
import Brands from './components/brands';
import BrandsTable from './components/brandsTable';
import Navigation from './components/navigation';
import HomePage from './components/homePage'
import Products from './components/products'
import Login from './components/login';
import Logout from './components/logout';
import Register from './components/register';
import {getCurrentUser} from './services/userService';

import { useState,  useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
function App() {
  const [user,setuser]= useState(null);
  useEffect(() => {
    setuser(getCurrentUser());
  }, [])
  return (
    <div>
      <ToastContainer />
      <Navigation user={user}/>  
     
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/products' element = {<Products/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/logout' element = {<Logout/>} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/brands' element={<Brands user={user}/>}/>
      </Routes>
      
    </div>
  );
}
export default App;
