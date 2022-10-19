import React, { useContext } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { AppContext } from '../providers/Index';
const ListCategories = () => {
    const initActive={
        "key": "all",
        "name":"Chợ",
        
    }
    const [categories, setCategories] = useState([]);
    const useAppContext=useContext(AppContext)
    const {activeCat,setactiveCat,setproductsCat,products}=useAppContext;
    
    useEffect(() => {
    
        var config = {
            method: 'get',
            url: '//api.harau.vn/api/categories',
        };
        axios(config)
            .then(function (response) {
                setCategories(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const hanleSelectedCat=(cat)=>{
        setactiveCat(cat);
    }



    return (
        <div id="category" className="desktop__CategoryWrapper-sc-1ligtl5-6 kZalnp">
            <nav className="desktop__CategoryNavContainer-sc-1ligtl5-4 eImZgp">
                <ul className="ant-menu ant-menu-light ant-menu-root ant-menu-vertical" role="menu">
                    <li onClick={() => { hanleSelectedCat(initActive) }} className={`${activeCat.key === 'all'&& 'selected' } ant-menu-submenu ant-menu-submenu-vertical desktop__SubMenu-sc-1ligtl5-8 jpyfpc`} role="menuitem">
                        <div className="ant-menu-submenu-title selected" ><Link to="/market">
                            <div className="desktop__LabelWrapper-sc-1ligtl5-3 BLWCH">
                                <div className="SVGIcon-uyvh4z-0 desktop__Icon-sc-1ligtl5-0 bYInAU">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" className="injected-svg" data-src="/static/media/All.d570acf6.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <path d="M17.0038 13H14.9962C14.4468 13 14 13.506 14 14.1282V15.8718C14 16.494 14.4468 17 14.9962 17H17.0038C17.5532 17 18 16.494 18 15.8718V14.1282C18 13.506 17.5532 13 17.0038 13ZM17.2755 15.8718C17.2755 16.0427 17.1517 16.1795 17.0038 16.1795H14.9962C14.8453 16.1795 14.7245 16.0393 14.7245 15.8718V14.1282C14.7245 13.9573 14.8483 13.8205 14.9962 13.8205H17.0038C17.1547 13.8205 17.2755 13.9607 17.2755 14.1282V15.8718Z" fill="currentColor" />
                                            <path d="M23 8.22513C23 8.13176 22.9775 8.04283 22.9281 7.96279L19.6555 2.27124C19.5611 2.10672 19.3813 2 19.188 2H4.80752C4.61422 2 4.43441 2.10227 4.34001 2.27124L1.07192 7.96279C1.02697 8.04283 1 8.13176 1 8.22513C1 9.50129 1.77769 10.5951 2.88803 11.0798V22.4664C2.88803 22.7599 3.13077 23 3.42746 23H6.40785C6.41234 23 6.41684 23 6.42133 23H10.602C10.6065 23 10.611 23 10.6154 23H20.568C20.8647 23 21.1075 22.7599 21.1075 22.4664V11.1465C21.1075 11.1243 21.1075 11.1065 21.103 11.0887C22.2178 10.604 23 9.50573 23 8.22513ZM5.12219 3.07161H18.8733L21.4311 7.52258H2.56886L5.12219 3.07161ZM16.6571 8.5853C16.4863 9.54575 15.6367 10.275 14.6163 10.275C13.5958 10.275 12.7462 9.54575 12.5754 8.5853H16.6571ZM11.4291 8.5853C11.2583 9.54575 10.4087 10.275 9.38823 10.275C8.3678 10.275 7.51819 9.54575 7.34287 8.5853H11.4291ZM2.11483 8.5853H6.20106C6.03024 9.54575 5.17613 10.275 4.1557 10.275C3.13527 10.2794 2.28566 9.54575 2.11483 8.5853ZM10.0625 21.9328H6.96077V14.8275C6.96077 14.4095 7.30241 14.0672 7.72946 14.0672H9.29832C9.72088 14.0672 10.067 14.4051 10.067 14.8275V21.9328H10.0625ZM20.0286 21.9328H11.1414V14.8275C11.1414 13.8226 10.3143 13 9.29383 13H7.72497C6.70903 13 5.8774 13.8182 5.8774 14.8275V21.9373H3.9669V11.3421C4.02983 11.3466 4.09277 11.3466 4.1557 11.3466C5.24356 11.3466 6.20556 10.7997 6.77197 9.96817C7.33837 10.7997 8.30037 11.3466 9.38823 11.3466C10.4761 11.3466 11.4336 10.7997 12.0045 9.96817C12.5709 10.7997 13.5329 11.3466 14.6163 11.3466C15.7041 11.3466 16.6616 10.7997 17.228 9.96817C17.7944 10.7997 18.7564 11.3466 19.8443 11.3466C19.9072 11.3466 19.9657 11.3421 20.0286 11.3421V21.9328ZM19.8443 10.2794C18.8239 10.2794 17.9743 9.5502 17.8034 8.58975H21.8897C21.7143 9.54575 20.8647 10.2794 19.8443 10.2794Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="desktop__Label-sc-1ligtl5-1 yAMyG">Tất cả</div>
                            </div>
                        </Link><i className="ant-menu-submenu-arrow" /></div>
                    </li>
                    {categories && categories.map(category => <li key={category.key} onClick={() => { hanleSelectedCat(category) }} className={`${activeCat.key === category.key && 'selected'} ant-menu-submenu ant-menu-submenu-vertical desktop__SubMenu-sc-1ligtl5-8 jpyfpc`} role="menuitem">
                        <div className="ant-menu-submenu-title">
                            <Link to={`/market?category=${category.code}`}>
                                <div className="desktop__LabelWrapper-sc-1ligtl5-3 BLWCH">
                                    <div className="SVGIcon-uyvh4z-0 desktop__Icon-sc-1ligtl5-0 bYInAU">
                                        <div>
                                            <img width='24px' height={'24px'} src={category.imageUrl}></img>
                                        </div>
                                    </div>
                                    <div className="desktop__Label-sc-1ligtl5-1 yAMyG">{category.name}</div>
                                </div>
                            </Link><i className="ant-menu-submenu-arrow" /></div>
                    </li>)}

                </ul>
            </nav>
            <div className="desktop__CategoryNavShadow-sc-1ligtl5-5 dXfayI" />
        </div>
    );
}

export default ListCategories;
