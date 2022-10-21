import React from 'react'
import { Carousel } from 'antd';
import axios from 'axios';
import { useEffect, useState,useContext } from 'react';
import ProductsItem from '../components/ProductsItem';
import { AppContext } from '../providers/Index';

const HomePage = () => {
    const useAppContext = useContext(AppContext)
    const { products, activeCat } = useAppContext;
    const [bestPrice, setbestPrice] = useState([]);
    const [topnews, settopnews] = useState([]);
    const [banners, setbanners] = useState([]);
    
    useEffect(() => {
        var config = {
            method: 'get',
            url: '//api.harau.vn/api/products/top-sale',
        };
        axios(config)
            .then(function (response) {
                setbestPrice(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        var config = {
            method: 'get',
            url: '//api.harau.vn/api/products/top-new',
        };
        axios(config)
            .then(function (response) {
                settopnews(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    // banners
    useEffect(() => {
        var config = {
            method: 'get',
            url: '//api.harau.vn/api/banners',
        };
        axios(config)
            .then(function (response) {
                setbanners(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
   
    const dohop=products.filter(item => item.categoryKey.includes('0e19c9c7-0cf2-448f-8dd7-aa186a7ee2c9'));
    const hoaqua=products.filter(item => item.categoryKey.includes('6b42b166-d624-4b70-9f9d-66b0cecab295'));
    const rauanla=products.filter(item => item.categoryKey.includes('45fa0d48-da37-4103-b297-1d63d7e151a3'));

    return (
        <>
            <div className='ant-row CarouselBanner__BannerSliderRow-sc-45hni4-1 cPLAsG'>
                <div className='CarouselBanner__BannerSliderWrapper-sc-45hni4-0 fSVfiM'>
                    <Carousel autoplay>
                        {
                            banners && banners.map(banner => <div className='slider' key={banner.key}>
                                <a href={banner.link} target="_blank">
                                    <img src={banner.imageUrl}></img>
                                </a>
                            </div>)
                        }
                    </Carousel>
                </div>
            </div>
            <div className="ShowcaseWidget__WidgetWrapper-jbddbf-1 kAkMuC">

                <div className="ShowcaseWidget__SectionTitle-jbddbf-0 cMedBm">
                    <h4 className="ant-typography">Giảm Giá</h4>
                    <a href="#"><span>Xem tất cả</span></a>
                </div>
                <div className="ShowcaseWidget__List-jbddbf-2 eYhdLP">
                    {products.length !== 0 ? products.map(item => <div className="ShowcaseWidget__Item-jbddbf-3 enmLXv" key={item.id}>
                        <article title="" className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                            <div className="CardLink__Container-dqor2y-0 jRvebg">
                                <div className="MarketItem__CardLinkContent-rr0c4s-3 dzitPw">
                                    <ProductsItem product={item}></ProductsItem>
                                </div>
                            </div>
                        </article>
                    </div>) : 'Khong co san pham nao'}
                </div>
            </div>
            <div className='ShowcaseWidget__WidgetWrapper-jbddbf-1 kAkMuC'>
                <div className="ShowcaseWidget__SectionTitle-jbddbf-0 cMedBm">
                    <h4 className="ant-typography">Đồ Hộp</h4>
                    <a href="#"><span>Xem tất cả</span></a>
                </div>
                <div className="ShowcaseWidget__List-jbddbf-2 eYhdLP">
                    {dohop && dohop.length !== 0 ? dohop.map(item => <div className="ShowcaseWidget__Item-jbddbf-3 enmLXv" key={item.id}>
                        <article title="" className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                            <div className="CardLink__Container-dqor2y-0 jRvebg">
                                <div className="MarketItem__CardLinkContent-rr0c4s-3 dzitPw">
                                <ProductsItem product={item}></ProductsItem>
                                </div>
                            </div>
                        </article>
                    </div>) : 'Khong co san pham nao'}


                </div>
            </div>
            <div className='ShowcaseWidget__WidgetWrapper-jbddbf-1 kAkMuC'>
                <div className="ShowcaseWidget__SectionTitle-jbddbf-0 cMedBm">
                    <h4 className="ant-typography">Hoa quả</h4>
                    <a href="#"><span>Xem tất cả</span></a>
                </div>
                <div className="ShowcaseWidget__List-jbddbf-2 eYhdLP">
                    {hoaqua && hoaqua.length !== 0 ? hoaqua.map(item => <div className="ShowcaseWidget__Item-jbddbf-3 enmLXv" key={item.id}>
                        <article title="" className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                            <div className="CardLink__Container-dqor2y-0 jRvebg">
                                <div className="MarketItem__CardLinkContent-rr0c4s-3 dzitPw">
                                <ProductsItem product={item}></ProductsItem>
                                </div>
                            </div>
                        </article>
                    </div>) : 'Khong co san pham nao'}


                </div>
            </div>
            <div className='ShowcaseWidget__WidgetWrapper-jbddbf-1 kAkMuC'>
                <div className="ShowcaseWidget__SectionTitle-jbddbf-0 cMedBm">
                    <h4 className="ant-typography">Rau ăn lá</h4>
                    <a href="#"><span>Xem tất cả</span></a>
                </div>
                <div className="ShowcaseWidget__List-jbddbf-2 eYhdLP">
                    {rauanla && rauanla.length !== 0 ? rauanla.map(item => <div className="ShowcaseWidget__Item-jbddbf-3 enmLXv" key={item.id}>
                        <article title="" className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                            <div className="CardLink__Container-dqor2y-0 jRvebg">
                                <div className="MarketItem__CardLinkContent-rr0c4s-3 dzitPw">
                                <ProductsItem product={item}></ProductsItem>
                                </div>
                            </div>
                        </article>
                    </div>) : 'Khong co san pham nao'}


                </div>
            </div>
            {/* <div className='ShowcaseWidget__WidgetWrapper-jbddbf-1 kAkMuC'>
                <div className="ShowcaseWidget__SectionTitle-jbddbf-0 cMedBm">
                    <h4 className="ant-typography">Sản Phẩm Mới</h4>
                    <a href="/market?tags=BEST_DEALS"><span>Xem tất cả</span></a>
                </div>
                <div className="ShowcaseWidget__List-jbddbf-2 eYhdLP">
                    {topnews.length !== 0 ? topnews.map(item => <div className="ShowcaseWidget__Item-jbddbf-3 enmLXv" key={item.id}>
                        <article title="" className="Card-gwofcb-0 MarketItem__Container-rr0c4s-0 gpLETI">
                            <div className="CardLink__Container-dqor2y-0 jRvebg">
                                <div className="MarketItem__CardLinkContent-rr0c4s-3 dzitPw">
                                <ProductsItem product={item}></ProductsItem>
                                </div>
                            </div>
                        </article>
                    </div>) : 'Khong co san pham nao'}


                </div>
            </div> */}


        </>
    )
}


export default HomePage;