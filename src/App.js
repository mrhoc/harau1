import React from 'react'
import './App.css';
import Header from './layout/Header';
import RouteApp from './routes/Index';
import Footer from './layout/Footer';
import {useContext,useEffect} from 'react'
import { AppContext } from './providers/Index';
import axios from 'axios';
function App() {
  var token=localStorage.getItem('ajs_user_id')
  const useAppContext = useContext(AppContext)
  const {setproducts, setproductsCat,setuser,user,favorites,currentUser,products,setfavorites,reloadFoverites } = useAppContext;
  

  useEffect(() => {
    var config = {
      method: 'get',
      url: '//api.harau.vn/api/wishlist',
      headers: { Authorization: `Bearer ${token}` }
    };
    axios(config)
      .then(function (response) {
        let dt = response.data;
   
        setfavorites(dt.map(obj=>({...obj,sl:0})))
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [reloadFoverites]);

  useEffect(() => {
    var config = {
      method: 'get',
      url: '//api.harau.vn/api/products/',
      
    };
    axios(config)
      .then(function (response) {
        let dt = response.data;
        setproducts(dt.data.map(obj=>({...obj,sl:0})))
        setproductsCat(dt.data.map(obj=>({...obj,sl:0})))
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentUser]);


  useEffect(() => {
    var config = {
      method: 'get',
      url: '//api.harau.vn/profile/user',
      headers: { Authorization: `Bearer ${token}` },
    };
    axios(config)
      .then(function (response) {
        setuser(response.data)
   
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentUser]);

  

  return (
    <div className="App">
      <Header></Header>
      <RouteApp></RouteApp>
      <Footer></Footer>
    </div>
  );
}

export default App;
