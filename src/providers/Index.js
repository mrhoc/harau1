import React from 'react'
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProviders = ({ children }) => {
   //user
   const [user, setuser] = useState({})
   const [token, settoken] = useState('');

   const [isOpenMenu, setisOpenMenu] = useState(false)
   const [products, setproducts] = useState([])
   const [productsCat, setproductsCat] = useState([])
   const [orders, setorders] = useState([])
   const [ordersKey, setordersKey] = useState([])
   const [detail, setdetail] = useState([])
   const [shopCart, setshopCart] = useState([])
   const [count, setcount] = useState(0)

   const [favorites, setfavorites] = useState([])
   const [activeCat, setactiveCat] = useState({})
   const [txtSearch, settxtSearch] = useState('')
   const [reloadFoverites,setreloadFoverites]=useState(false)

   
   //init login
  
   const [currentUser, setcurrentUser] = useState(()=>{
      let userName=localStorage.getItem('userName');
      let password=localStorage.getItem('password');
      if(userName&&userName!==null && password&&password!==null){
         return {
            userName,
            password
         }
      }
      else{
         return {}
      }
   })

   return <AppContext.Provider value={
      {
         isOpenMenu, setisOpenMenu,
         txtSearch, settxtSearch,
         products, setproducts,
         productsCat, setproductsCat,
         activeCat,setactiveCat,
         currentUser,setcurrentUser,
         favorites,setfavorites,
         reloadFoverites,setreloadFoverites,
         orders,setorders,
         ordersKey,setordersKey,
         detail,setdetail,
         user,setuser,
         shopCart,setshopCart,
         count,setcount

         
      }
   }>
      {children}
   </AppContext.Provider>
}
export default AppProviders