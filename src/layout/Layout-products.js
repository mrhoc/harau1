import React from 'react';
import Sidebar from './Sidebar';
import ListCategories from "./ListCategories";
import { AppContext } from '../providers/Index';
import { useEffect,useContext } from 'react';
const LayoutProducts = ({children}) => {
    const useAppContext = useContext(AppContext)
    const {favorites,products } = useAppContext;
    // useEffect(()=>{
    //     products&&products.map((d,index)=>{
    //           favorites&&favorites.map(k=>{
    //             if(k.key===d.key){
    //               d['liked']=true;
    //               console.log('liked');
    //             }
    //             return d;
    //           })
    //         })
    //   },[favorites])

    return (
        <>
            <Sidebar></Sidebar>
            <section className="MainLayout__Content-sc-1yxvn5u-0 bulZNJ">
                <div className="ProductListingLayout__Main-sc-8jubye-0 gBILlt">
                    <div className="desktop__CategoryContainer-sc-1ligtl5-9 fFdwTQ">
                        <div className="desktop__CategorySpacer-sc-1ligtl5-7 gADwkc" />
                        <ListCategories/>
                    </div>
                    <div className="ProductListingLayout__MainContainer-sc-8jubye-1 jZGjvL" style={{}}>
                        <div className="MarketPage__ProductListContainer-x35qcj-5 ftYIQd">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LayoutProducts;
