import React, { useState ,useEffect} from 'react'
import { deleteBrand, getBrands } from '../services/brandsService';
import BrandsTable from './brandsTable'
import {  insertBrand, updateBrand } from '../services/brandsService';
import _ from 'lodash';
import IconButton from '@mui/material/IconButton';
import {AddCircleOutline} from '@mui/icons-material';
import ConfirmDeleteDialog from './ConfirmDeleteDialog';
import BrandsDialog from './brandsDialog';



export default function Brands({user}) {
  const [brands, setsBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [openConfirmDelDlg, setopenConfirmDelDlg] = useState(false);
  const [open, setOpen] = useState(false);
  // const[Transition]=useState(); 
  useEffect(()=>{
    update();
  }, []);

  async function update(){
    const brands= await getBrands();
    setsBrands(brands);
  }
  async function handleDelete(){
    if(!selectedBrand)return;
    await deleteBrand(selectedBrand._id);
    setSelectedBrand(null);
    update();
  }
  async function handleSave(){
    if(selectedBrand._id){
        await updateBrand(selectedBrand._id,_.omit(selectedBrand,['_id','__v']));
    }
    else
        await insertBrand(selectedBrand);
    setSelectedBrand(null);
    update();
  }

  return (
    <div>
      <div>
        <IconButton aria-label="delete"  color="secondary" className='my-auto' 
            onClick={ ()=>{
              setSelectedBrand({nameen:'',namear:'',logo:''	,descriptionen:'',descriptionar:'',});
              setOpen(true);
            }}
          >
          <AddCircleOutline />
        </IconButton>
      </div>
  
    <BrandsTable 
      brands={brands} 
      onDelete ={(brand)=>{
        setSelectedBrand(brand);
        setopenConfirmDelDlg(true);

      }} 
      onEdit={(brand)=>{
          setSelectedBrand(brand);
          setOpen(true);
          
      }}
      user={user}
    />

    {selectedBrand&&
    <ConfirmDeleteDialog 
      open={openConfirmDelDlg} 
      setopen={setopenConfirmDelDlg}
      text={`Brand ${selectedBrand.nameen}  will be deleted permenantly, are you sure?`} 
      onConfirm ={()=>{
        handleDelete()
    }}
   /> }

    <BrandsDialog
      open={open}
      setOpen={setOpen}
      brand ={selectedBrand}
      setBrand={setSelectedBrand}
      onSave={()=>{
        handleSave()
      }}
    />
  </div>
  );
}





