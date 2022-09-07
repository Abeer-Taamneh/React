import axios from "axios";
import {toast} from 'react-toastify'
import jwtDecode from 'jwt-decode';
import httpService from "./httpService";
const url = "http://147.182.183.104/";
export async function registerUser(user){
    
        try {
            const res = await axios.post(url+"api/users",user);            
            const jwt = res.headers['x-auth-token'];
            localStorage.setItem('token', jwt)
            window.location.href='/'
            toast(res.data);
            
        } catch (ex) {
            console.log('ex',ex)
            toast.error(ex.message);
        }
    
}
export async function loginUser(user){
    try {
        const res = await axios.post(url+"api/auth",user); 
        const jwt = res.data;
        // toast(res.data);   
        localStorage.setItem('token',jwt)
        window.location.href='/'
    
    } catch (ex) {;
        toast.error(ex.response.data);
    }
}
export  function getCurrentUser(){
    let user = null;
    try{
        const jwt =localStorage.getItem('token');
        user=jwtDecode(jwt);
      }
      catch(ex){
        toast.error(ex.message);
      }
      return user;
}
export  function logOut(){
    localStorage.removeItem('token');
    
}

export  function getToken(){
    return localStorage.getItem('token');
}