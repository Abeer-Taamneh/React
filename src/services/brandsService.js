import axios from "axios";
import {toast} from 'react-toastify'
import {getToken} from './userService'
const url = 'http://147.182.183.104/api/brands';
// const url = 'https://development-shop.herokuapp.com/api/brands';

axios.defaults.headers.common['x-auth-token']=getToken();
export async function getBrands(){
    const res = await axios.get(url)
    return res.data;
}
export async function insertBrand(brand){
    try {
        const res = await axios.post(url,brand); 
        toast(res.data);   
    } catch (ex) {
        toast.error(ex.response.data);
    }
}
export async function deleteBrand(id){
    console.log('deleting');
    try {
        const res = await axios.delete(url+'/'+id);
        toast(res.data);  
    } catch (ex) {
        toast.error(ex.response.data);
    }
}
export async function updateBrand(id,brand){                                
    try {
        const res = await axios.put(url+'/'+id,brand);
        toast(res.data);   
    } catch (ex) {
        toast.error(ex.response.data);
    }
}