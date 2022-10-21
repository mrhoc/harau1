import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from "react";
import { AppContext } from "../providers/Index";
import {Link} from 'react-router-dom'
import Moment from 'moment';

const OrdersDetail = () => {
    var token = localStorage.getItem('ajs_user_id')
    const useAppContext = useContext(AppContext)
    const navigate=useNavigate();
    const { ordersKey,setdetail,detail,products,setshopCart } = useAppContext;
    useEffect(() => {
        let today=new Date().toISOString()
        console.log(today);
        var config = {
            method: 'get',
            url: `//api.harau.vn/api/orders/${ordersKey}`,
            headers: { Authorization: `Bearer ${token}` },
        };

        axios(config)
            .then(function (response) {
                let db=response.data;
                setdetail(db)


            })
            .catch(function (error) {


            });
        return () => {

        };
    }, [ordersKey]);

   const handleAddAll=(items)=>{
    console.log(items);
         let yFilter  = items.map(itemY => { return itemY.productName; });
         let filteredX = products.filter(itemX => yFilter.includes(itemX.name));
      
         let newAr=filteredX.map(i=>({...i,sl:1}))
         console.log(newAr);
         setshopCart(newAr);
         navigate('/Checkout/step/1')

   }
    return (<>
        <div style={{ background: '#f9fafc' }}>
            <div className="PageHeader__Container-sc-19x4r8h-1 fVgVuB"><h2 className="PageHeader__Header-sc-19x4r8h-0 jTfioR"><span>Chi tiết</span></h2></div>
            <section className="Order__Container-xddenm-0 gOWETX">
                <div className="ant-card" style={{ marginBottom: '6pt', backgroundColor: 'white' }}>
                    <div className="ant-card-body">
                        <div className="ant-row" style={{ marginLeft: '-4px', marginRight: '-4px', marginBottom: '10pt' }}>
                            <div className="ant-col ant-col-24" style={{ paddingLeft: 4, paddingRight: 4 }}>
                                <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw" style={{ width: '100%', justifyContent: 'space-between' }}><a href="#"><h3 className="OrderSummary__SupplierName-ugckj3-3 irPdAO">HARAU</h3></a>
                                    <div onClick={()=>{window.print()}}   className="a ant-btn Button-jgr7l8-0 iPsOaJ ant-btn-primary ant-btn-background-ghost" ><i aria-label="icon: printer" className="anticon anticon-printer">
                                        <svg viewBox="64 64 896 896" focusable="false" className data-icon="printer" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path d="M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zm32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z" />
                                        </svg>
                                    </i><span> </span><span >In</span></div>
                                </div>
                                
                                <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw">
                                    <div className={`OrderStatus__Tag-sc-15c08kj-0 ljjTvm ${detail.orderStatus&&'hLleu'}`}>{detail.orderStatus===0?'Đã huỷ':'Đã gửi'}</div>
                                </div>
                            </div>
                        </div>
                        <div className="ant-row" style={{ marginLeft: '-4px', marginRight: '-4px' }}>
                            <div className="ant-col ant-col-sm-12 ant-col-lg-9" style={{ paddingLeft: 4, paddingRight: 4 }}>
                                <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw"><span className="styledComponents__Label-cp2vq4-2 gjrqGn"><span>Mã đơn hàng</span></span><span className="OrderSummary__Value-ugckj3-4 dTwnQL" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{detail.key}</span></div>
                                <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw"><span className="styledComponents__Label-cp2vq4-2 gjrqGn"><span>Ngày đặt hàng</span></span><span className="OrderSummary__Value-ugckj3-4 dTwnQL">{Moment(detail.createdAt).format('DD-MM-YYYY')}</span></div>
                                <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw"><span className="styledComponents__Label-cp2vq4-2 gjrqGn"><span>Ngày giao hàng</span></span><span className="OrderSummary__Value-ugckj3-4 dTwnQL">{}</span></div>
                                <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw"><span className="styledComponents__Label-cp2vq4-2 gjrqGn"><span>Người đặt hàng</span></span><span className="OrderSummary__Value-ugckj3-4 dTwnQL">Admin</span></div>
                                <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw"><span className="styledComponents__Label-cp2vq4-2 gjrqGn"><span>Tên cửa hàng</span></span><span className="OrderSummary__Value-ugckj3-4 dTwnQL">HARAU</span></div>
                            </div>
                            <div className="ant-col ant-col-sm-12 ant-col-lg-8" style={{ paddingLeft: 4, paddingRight: 4 }}>
                                <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw"><span className="styledComponents__Label-cp2vq4-2 gjrqGn"><span>Cách thanh toán</span></span><span className="OrderSummary__Value-ugckj3-4 dTwnQL"><span>Tiền mặt</span></span></div>
                                {/* <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw"><span className="styledComponents__Label-cp2vq4-2 gjrqGn"><span>Tổng số sản phẩm</span></span><span className="OrderSummary__Value-ugckj3-4 dTwnQL">{detail.items.length}</span></div> */}
                                {/* <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw"><span className="styledComponents__Label-cp2vq4-2 gjrqGn"><span>Ghi chú</span></span><span className="OrderSummary__Value-ugckj3-4 dTwnQL"><div className="SVGIcon-uyvh4z-0 styledComponents__NoteIcon-cp2vq4-1 cqMqPu"><div><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" className="injected-svg" data-src="/static/media/Notes.b387e5a3.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect opacity="0.01" width={16} height={16} fill="#FCFFFC" />
                                    <path d="M3.22891 15.1665C3.03554 15.1665 2.83941 15.1596 2.64121 15.1459C2.33222 15.1239 2.07414 14.8961 2.01495 14.5912C1.95577 14.2857 2.10924 13.9787 2.38726 13.8418C2.99767 13.5424 3.49726 13.1406 3.8792 12.6444C1.49744 11.4883 0 9.38795 0 7.11836C0 3.5612 3.58882 0.666748 8 0.666748C12.4112 0.666748 16 3.5612 16 7.11836C16 10.6755 12.4112 13.57 8 13.57C7.8954 13.57 7.79145 13.5672 7.6896 13.5624C6.55756 14.5988 4.98651 15.1665 3.22891 15.1665Z" fill="#E8EBF2" />
                                </svg></div></div></span></div> */}
                            </div>
                            <div className="ant-col ant-col-sm-24 ant-col-lg-7" style={{ paddingLeft: 4, paddingRight: 4 }}>
                                <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw"><span className="OrderSummary__TotalLabel-ugckj3-1 kSeiPc"><span>Tổng</span></span><span className="OrderSummary__Value-ugckj3-4 dTwnQL"><span className="OrderSummary__Price-ugckj3-6 bgbWRG"><span className="Money-doxtx5-0 brYFgQ">{detail.totalPaymentAmount ? detail.totalPaymentAmount.toLocaleString():'0'}đ</span></span></span></div>
                                {/* <div class="OrderSummary__InfoRow-ugckj3-0 cVHuBw"><span class="OrderSummary__LabelBtn-ugckj3-2 ghTrxj"><span>Huỷ đơn hàng</span></span></div> */}
                                <div className="OrderSummary__InfoRow-ugckj3-0 cVHuBw" />
                                <div className="OrderSummary__Actions-ugckj3-5 ZXUXL">
                                    {/* <button onClick={()=>{handleAddAll(detail.items)}} type="button" className="ant-btn Button-jgr7l8-0 iPsOaJ ant-btn-primary ant-btn-background-ghost"><span>Thêm tất cả</span>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ant-card" style={{ borderBottomRightRadius: 0 }}>
                    <div className="ant-card-body" style={{ padding: 0 }}>
                        <div className="styledComponents__OrderContainer-cp2vq4-4 dtsazv">
                            <div className="header styledComponents__OrderItem-cp2vq4-5 bpRJgs">
                                <div className="styledComponents__ItemCell-cp2vq4-6 iLBjVT"><span>Sản phẩm</span></div>
                                <div className="styledComponents__ItemCell-cp2vq4-6 cbrXtH"><span>Đơn Giá (có VAT)</span></div>
                                <div className="styledComponents__ItemCell-cp2vq4-6 cbrXtH"><span>Số lượng</span></div>
                                <div className="styledComponents__ItemCell-cp2vq4-6 cbrXtH"><span>Tổng tiền (có VAT)</span></div>
                                <div className="styledComponents__ItemCell-cp2vq4-6 ieooJH" />
                            </div>
                            {
                                detail.items&&detail.items.map(item=><>
                                    <div className="styledComponents__OrderItem-cp2vq4-5 bpRJgs">
                                <div className="styledComponents__ItemCell-cp2vq4-6 iLBjVT"><a title={item.productName} className="styledComponents__Styleda-cp2vq4-7 ebeCGK" href='#'>
                                {item.productName}</a></div>
                                <div className="styledComponents__ItemCell-cp2vq4-6 cbrXtH"><span className="Money-doxtx5-0 brYFgQ">{item.price.toLocaleString()}đ</span></div>
                                <div className="styledComponents__ItemCell-cp2vq4-6 cbrXtH"><span>{item.quantity} {item.unitName}</span></div>
                                <div className="styledComponents__ItemCell-cp2vq4-6 cbrXtH"><span><span className="Money-doxtx5-0 brYFgQ">{item.amount.toLocaleString()}đ</span><br /><span className="styledComponents__Label-cp2vq4-2 gjrqGn">( 0% VAT )</span></span></div>
                                <div className="styledComponents__ItemCell-cp2vq4-6 ieooJH" />
                            </div>
                                </>)
                            }
                            
                        </div>
                    </div>
                </div>
            </section>



        </div>
    </>

    );
}

export default OrdersDetail;
