import React from 'react'
import axios from "axios";
import { useEffect, useContext } from "react";
import { AppContext } from "../providers/Index";
import {Link} from 'react-router-dom'
import { NumericFormat } from 'react-number-format';
const Orders = () => {
    var token = localStorage.getItem('ajs_user_id')
    const useAppContext = useContext(AppContext)
    const { orders, setorders,setordersKey,currentUser } = useAppContext;
    useEffect(() => {
        let today=new Date().toISOString()
       
        var config = {
            method: 'get',
            url: `//api.harau.vn/api/orders?From=2015-03-04T00:00:00.000&To=${today}`,
            headers: { Authorization: `Bearer ${token}` },
        };

        axios(config)
            .then(function (response) {
                let db=response.data;
                setorders(db.data)


            })
            .catch(function (error) {


            });
        return () => {

        };
    }, [currentUser]);

    const renderOrders = () => {
        return orders && orders.map(order =>
            <Link to={`/orders/${order.key}`} className="OrderTable__OrderRowWrapper-sc-1dw820r-5 bhmBvK" onClick={()=>{setordersKey(order.key)}}>
                <div className="hideOnSmall">
                    <div status="CANCELED" className="SVGIcon-uyvh4z-0 StatusIcon-sc-154vhxy-0 iQvygr">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none" className="injected-svg" data-src="/static/media/Cancelled.4995380a.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M15.6151 7.77998L15.6153 7.78021C15.8282 7.99284 15.9017 8.25208 15.9017 8.75361V18.4612C15.9017 19.8641 14.83 20.9944 13.3689 20.9944H3.18282C1.79108 20.9944 0.65 19.8533 0.65 18.4616V3.18358C0.65 1.79164 1.79128 0.65 3.18282 0.65H7.79811C8.08203 0.65 8.4826 0.797599 8.83098 0.995838L15.6151 7.77998Z" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.5152 7.66954L8.92515 0.961446V5.12138L8.92492 5.13848L8.92494 5.13805L8.92495 5.13738L8.92493 5.1393L8.92484 5.15685C8.92487 5.17404 8.92518 5.20183 8.92645 5.23866C8.929 5.31254 8.93538 5.42151 8.9508 5.55343C8.98208 5.82095 9.04845 6.16421 9.18365 6.49605C9.3188 6.82775 9.51148 7.12106 9.78059 7.32817C10.0401 7.52785 10.4132 7.68088 10.9792 7.66967L10.9921 7.66941V7.66954H15.5152Z" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.8197 11.4586H12.7328" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.81873 14.6418H12.7318" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.77527 17.8254H12.688" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="16.5517" cy="18.2069" r="5.7931" fill="currentColor" />
                                <path d="M18.6911 16.1184C18.5333 15.9605 18.2774 15.9605 18.1195 16.1184L16.5 17.7379L14.8805 16.1184C14.7227 15.9605 14.4667 15.9605 14.3089 16.1184L14.1184 16.3089C13.9605 16.4667 13.9605 16.7227 14.1184 16.8805L15.7379 18.5L14.1184 20.1195C13.9606 20.2773 13.9606 20.5333 14.1184 20.6911L14.3089 20.8816C14.4668 21.0395 14.7227 21.0395 14.8805 20.8816L16.5 19.2621L18.1195 20.8816C18.2773 21.0395 18.5333 21.0395 18.6911 20.8816L18.8816 20.6911C19.0395 20.5333 19.0395 20.2773 18.8816 20.1195L17.2621 18.5L18.8816 16.8805C19.0395 16.7227 19.0395 16.4667 18.8816 16.3089L18.6911 16.1184Z" fill="#FFFFFF" strokeWidth={0} />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="OrderTable__CellWrapper-sc-1dw820r-4 hdJLSn">
                    <div className="OrderTable__CellLabel-sc-1dw820r-1 dOpsoI">
                        <span>Ngày đặt hàng</span>
                    </div>
                    <div className="OrderTable__styleDiv-sc-1dw820r-2 no-wrap OrderTable__CellValue-sc-1dw820r-3 icoZsW">{}</div>
                </div>
                <div className="OrderTable__CellWrapper-sc-1dw820r-4 hdJLSn">
                    <div className="OrderTable__CellLabel-sc-1dw820r-1 dOpsoI"><span>Ngày giao hàng</span></div>
                    <div className="OrderTable__styleDiv-sc-1dw820r-2 no-wrap OrderTable__CellValue-sc-1dw820r-3 icoZsW"></div>
                </div>
                <div className="OrderTable__CellWrapper-sc-1dw820r-4 hdJLSn">
                    <div className="OrderTable__CellLabel-sc-1dw820r-1 dOpsoI"><span>Nhà cung cấp</span></div>
                    <div className="OrderTable__styleDiv-sc-1dw820r-2 no-wrap OrderTable__CellValue-sc-1dw820r-3 icoZsW">HARAU</div>
                </div>
                <div className="OrderTable__CellWrapper-sc-1dw820r-4 hdJLSn">
                    <div className="OrderTable__CellLabel-sc-1dw820r-1 dOpsoI"><span>Người mua</span></div>
                    <div className="OrderTable__styleDiv-sc-1dw820r-2 no-wrap OrderTable__CellValue-sc-1dw820r-3 icoZsW">Admin</div></div>
                <div className="OrderTable__CellWrapper-sc-1dw820r-4 hdJLSn">
                    <div className="OrderTable__CellLabel-sc-1dw820r-1 dOpsoI"><span>Trạng thái</span></div>
                    <div className={`OrderTable__styleDiv-sc-1dw820r-2 no-wrap OrderTable__CellValue-sc-1dw820r-3 icoZsW `}>
                        <div className={`OrderStatus__Tag-sc-15c08kj-0 ljjTvm ${order.orderStatus&&'hLleu'}`}>{order.orderStatus==2?'Đã huỷ':'Đã gửi'}</div></div>
                </div>
                <div className="OrderTable__CellWrapper-sc-1dw820r-4 hdJLSn">
                    <div className="OrderTable__CellLabel-sc-1dw820r-1 dOpsoI"><span>Tổng</span></div>
                    <div className="OrderTable__styleDiv-sc-1dw820r-2 no-wrap OrderTable__CellValue-sc-1dw820r-3 icoZsW">{order.totalPaymentAmount.toLocaleString()}đ</div>
                </div>
                <div className="hideOnSmall"><span className="SVGIcon-uyvh4z-0 hideOnMobile OrderTable__CellArrow-sc-1dw820r-0 fJIGUG"><span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none" className="injected-svg" data-src="/static/media/Ellipse.73b26f86.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <circle cx={13} cy={13} r="12.5" fill="#FCFFFC" stroke="#2e904e" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.1855 7.81448C10.9252 8.07483 10.9252 8.49694 11.1855 8.75729L15.4281 12.9999L11.1854 17.2426C10.9251 17.503 10.9251 17.9251 11.1854 18.1854C11.4458 18.4458 11.8679 18.4458 12.1282 18.1854L16.8366 13.477C16.8385 13.4751 16.8405 13.4732 16.8424 13.4713C17.1027 13.211 17.1027 12.7889 16.8424 12.5285L12.1283 7.81448C11.868 7.55413 11.4459 7.55413 11.1855 7.81448Z" fill="#2e904e" />
                    </svg></span></span>
                </div>
            </Link>)
    }

    return <>
        <div style={{ background: '#f9fafc' }}>
            <div className="PageHeader__Container-sc-19x4r8h-1 fVgVuB"><h2 className="PageHeader__Header-sc-19x4r8h-0 jTfioR"><span>Đơn hàng</span></h2></div>
            {renderOrders()}


            {/* <table>
                <tbody>
                    <tr>
                        <th>Ngày đặt hàng</th>
                        <th>Ngày giao hàng</th>
                        <th>Ngày đặt hàng</th>
                        <th>Ngày đặt hàng</th>
                    </tr>
                </tbody>
            </table> */}
        </div>

    </>
}
export default Orders;