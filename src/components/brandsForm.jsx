import React from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import {AddCircleOutline} from '@mui/icons-material';
import { Dialog } from '@mui/material';
function BrandsForm({brand,setBrand,onSubmit
  }) {
  return (
    <div>
      <TextField 
        label="Nameen" 
        variant="filled" 
        color="success" 
        focused 
        className='m-2' 
        placeholder='الاسم بالانجليزيه'
        onChange={(e)=>{
          const updatedBrand = {...brand};
          updatedBrand.nameen = e.target.value;
          setBrand(updatedBrand);
        }}
        value={brand?brand.nameen:''}
    />
  
      <TextField
        label="namear"
        variant="filled"
        color="success"
        focused  
        className='m-2' 
        placeholder='الاسم بالعربي'
        onChange={(e)=>{
          const updatedBrand = {...brand};
          updatedBrand.namear = e.target.value;
          setBrand(updatedBrand);
       }}
        value={brand?brand.namear:''}
      />
      
      <TextField
        label="logo"
        variant="filled"
        color="success"
        focused  
        className='m-2' 
        placeholder='logo'
        onChange={(e)=>{
          const updatedBrand = {...brand};
          updatedBrand.logo = e.target.value;
          setBrand(updatedBrand);
        }}
        value={brand?brand.logo:''}
      />
     
      <TextField
        label="	descriptionen"
        variant="filled"
        color="success"
        focused  
        className='m-2' 
        placeholder='	descriptionen'
        onChange={(e)=>{
          const updatedBrand = {...brand};
          updatedBrand.descriptionen = e.target.value;
          setBrand(updatedBrand);
       }}
        value={ brand?brand.descriptionen:''}
      />
      
      <TextField
        label="		descriptionar"
        variant="filled"
        color="success"
        focused  
        className='m-2' 
        placeholder='		descriptionar'
       onChange={(e)=>{
        const updatedBrand = {...brand};
          updatedBrand.descriptionar = e.target.value;
          setBrand(updatedBrand);
        }}
        value={ brand?brand.descriptionar:''}
      />
   
    <IconButton aria-label="delete"  color="secondary" className='my-auto' 
        onClick={ ()=>onSubmit() }
      >
      <br/>
      <AddCircleOutline />
    </IconButton>

    


    </div>
  );
}

export default BrandsForm;




























