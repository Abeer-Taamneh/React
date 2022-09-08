import React,{useState,useEffect} from 'react'
import { ToastContainer} from 'react-toastify';
import {Routes,Route} from 'react-router-dom'
import Navigation from './components/navigation';
import Brands from'./components/brands'
import Products from './components/products';
import Origin from './components/origins';
import Units from './components/units';
import { CategoriesAdminPage } from './components/categories';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import { getCurrentUser } from './service/userService';
import { Update } from '@mui/icons-material';
import Profile from './components/profile'
const App = () => {
  const [user,setUser] = useState({})
  const [notuser,setnotuser]=useState({})
  
  useEffect(() => {
    update();
    
  }, [])

  async function  update(){
    const _user = await getCurrentUser();
    setUser(_user);
  }
  return (
   <div>
   <div>
     <ToastContainer />
     <Navigation user={user} notuser={notuser}/>  
     <Routes>    
        <Route path='/brands' element={<Brands user={user} notuser={notuser} />}/>
           <Route path='/products' element = {<Products  notuser={notuser}/>} />
           <Route path='/origins' element = {<Origin   notuser={notuser}/>} />
           <Route path='/categories' element = {<CategoriesAdminPage allowEdit={true}  notuser={notuser}/>} />
           <Route path='/register' element = {<Register   notuser={notuser}/>} />
           <Route path='/units' element = {<Units    notuser={notuser}/>} />
           <Route path='/login' element = {<Login   notuser={notuser}/>} />
           <Route path='/logout' element = {<Logout   notuser={notuser}/>} />
           <Route path='/profile' element = {<Profile/>} />
     </Routes>
    
   </div>

     </div>
  

  )
}

export default App

