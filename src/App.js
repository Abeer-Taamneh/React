import React,{useState} from 'react'
import { ToastContainer} from 'react-toastify';
import {Routes,Route} from 'react-router-dom'
import Navigation from './components/navigation';
import Brands from'./components/brands'
import Products from './components/products';
import Origin from './components/origins';
import Units from './components/units';
import { CategoriesTreeView } from './components/categories';
const App = () => {
  const [user] = useState()
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
           <Route path='/units' element = {<Units/>} />
     </Routes>
    
   </div>

     </div>
  

  )
}

export default App

