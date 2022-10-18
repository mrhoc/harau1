import React from 'react'
import { Link } from "react-router-dom";
const Checkout3 = () => {
    return <div>
        <div className="CheckoutPage__Container-sc-10rj4ea-0 EalTZ">
            <div className="PageHeader__Container-sc-19x4r8h-1 kahPTg"><h2 className="PageHeader__Header-sc-19x4r8h-0 jTfioR"><span>Đặt hàng</span>
            </h2></div>
            <div className="Checkout__StepContainer-oij88w-3 LDHVZ">
                <Link to={'/checkout/step/1'}  className="ant-btn Button-jgr7l8-0 selected Checkout__Step-oij88w-2 kFIMIV ant-btn-primary ant-btn-circle">
                    <div className="Checkout__StepNumber-oij88w-0 hgCJJe">1</div>
                    <div className="text-align-left Checkout__StepLabel-oij88w-1 jsDJUV"><span>Giỏ hàng</span></div>
                </Link>
                <div className="Checkout__StepDivider-oij88w-4 dQjYUn" />
                <Link to={'/checkout/step/2'}  className="ant-btn Button-jgr7l8-0 Checkout__Step-oij88w-2 kYIKsw ant-btn-circle">
                    <div className="Checkout__StepNumber-oij88w-0 hgCJJe">2</div>
                    <div className="Checkout__StepLabel-oij88w-1 jsDJUV"><span>Giao hàng</span></div>
                </Link>
                <div className="Checkout__StepDivider-oij88w-4 dQjYUn" />
                <Link to={'/checkout/step/3'}  className="ant-btn Button-jgr7l8-0 Checkout__Step-oij88w-2 kYIKsw ant-btn-circle">
                    <div className="Checkout__StepNumber-oij88w-0 hgCJJe">3</div>
                    <div className="text-align-right Checkout__StepLabel-oij88w-1 jsDJUV"><span>Chốt đơn hàng</span></div>
                </Link>
            </div>
            <div className="StepContainer-sc-193hmep-0 ldsFAs">
                <div className="StepItem__UnderMOQ-sc-17m0775-6 bfVtZC"><span>Đơn hàng dưới giá trị tối thiểu</span></div>
                <div className="StepItem-sc-17m0775-7 CheckoutStep1__StepItem-k6o3b0-0 icsiSe">
                    <div className="StepRow__StepBox-sc-7s4xr1-0 CheckoutStep1__StepBox-k6o3b0-2 iPSYdF">
                        <div className="StepRow-sc-7s4xr1-1 CheckoutStep1__StepRow-k6o3b0-3 kWPmLR">
                            <div span={2} className="StepCol-sc-1dfs1l2-0 CheckoutStep1__StepCol-k6o3b0-1 cZMyFk">
                                <div className="Label-sc-1t6hh05-0 duoMBh"><span>Nhà cung cấp</span></div>
                                <div className="Value-sc-15o9mgu-0 Value__SupplierName-sc-15o9mgu-1 hwuAYh">
                                    <div className="SVGIcon-uyvh4z-0 SubplierMark-ne65x8-0 dyIsIE" style={{ width: 16, marginRight: '3pt' }}>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" className="injected-svg" data-src="/static/media/suppler-mark.1410034e.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M23.333 11.9591C22.6207 11.2281 22.4618 10.1148 22.9411 9.21068C23.2833 8.56604 23.3068 7.79684 23.0059 7.13181C22.7047 6.46653 22.1126 5.98125 21.4053 5.81949C20.4134 5.59293 19.6831 4.74286 19.6017 3.72094C19.5439 2.99207 19.1512 2.33183 18.5411 1.93655C17.9308 1.54127 17.1729 1.45559 16.4913 1.70519C15.5352 2.05511 14.4652 1.73807 13.8489 0.922796C13.409 0.341519 12.725 0 12 0C11.2747 0 10.5909 0.341518 10.151 0.923036C9.5347 1.73807 8.4643 2.05511 7.50886 1.70519C6.82702 1.45559 6.06863 1.54127 5.45879 1.93655C4.84847 2.33183 4.45607 2.99183 4.39799 3.72094C4.31663 4.74286 3.58607 5.59269 2.59464 5.81949C1.88712 5.98125 1.29504 6.46653 0.993843 7.13205C0.692404 7.79708 0.716404 8.56604 1.05864 9.21092C1.53816 10.115 1.37904 11.2281 0.666484 11.9594C0.158166 12.4811 -0.0796733 13.2119 0.0237664 13.936C0.126966 14.6599 0.559205 15.2934 1.1928 15.6498C2.0808 16.149 2.54424 17.1719 2.33688 18.1754C2.18904 18.891 2.38104 19.6355 2.856 20.1887C3.33096 20.7414 4.03463 21.039 4.75871 20.9932C5.77367 20.9289 6.71182 21.537 7.07518 22.4946C7.33486 23.1777 7.8955 23.6989 8.5915 23.9051C9.28726 24.1112 10.0389 23.9778 10.6233 23.5446C11.4427 22.9377 12.5582 22.9377 13.3771 23.5446C13.962 23.9778 14.7129 24.1112 15.4092 23.9051C16.1049 23.6989 16.6658 23.1777 16.9252 22.4946C17.2888 21.537 18.2272 20.9291 19.2419 20.9932C19.9658 21.039 20.6692 20.7414 21.1442 20.1887C21.6194 19.6355 21.8111 18.8913 21.6635 18.1754C21.4562 17.1717 21.9191 16.149 22.8074 15.6498C23.4412 15.2937 23.8737 14.6599 23.9764 13.936C24.0794 13.2117 23.8418 12.4809 23.333 11.9591ZM10.1725 15.6213V15.6213C10.5182 15.9446 11.0575 15.9379 11.3956 15.6068V15.6068L17.367 9.75763C17.7191 9.41276 17.7329 8.85037 17.3982 8.4886V8.4886C17.0494 8.11152 16.4579 8.0974 16.0915 8.45741L10.7906 13.6654L7.89472 10.987C7.51787 10.6385 6.92802 10.6683 6.58821 11.053V11.053C6.26055 11.424 6.28751 11.9884 6.64904 12.3265L10.1725 15.6213Z" fill="#DCE0E9" />
                                            </svg>
                                        </div>
                                    </div>
                                    KAMEREO
                                </div>
                            </div>
                            <div className="StepCol-sc-1dfs1l2-0 CheckoutStep1__StepCol-k6o3b0-1 bBHXhC">
                                <div className="Label-sc-1t6hh05-0 duoMBh"><span>Đơn tối thiểu</span></div>
                                <div className="Value-sc-15o9mgu-0 eKRzIr"><span className="Money-doxtx5-0 brYFgQ">300,000đ</span></div>
                            </div>
                            <div className="StepCol-sc-1dfs1l2-0 CheckoutStep1__StepCol-k6o3b0-1 bBHXhC">
                                <div className="Label-sc-1t6hh05-0 duoMBh"><span>Thành tiền</span></div>
                                <div color="#FE5043" className="Value-sc-15o9mgu-0 iGZmDm"><span className="Money-doxtx5-0 brYFgQ">90,000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="StepItem__Table-sc-17m0775-0 BAdQC">
                        <thead className="StepItem__TableHeader-sc-17m0775-1 lfCloD">
                            <tr className="StepItem__TableRow-sc-17m0775-4 OrderTable__TableRow-sc-1eckcw9-2 dNzToN">
                                <td className="StepItem__TableCell-sc-17m0775-3 OrderTable__TableCell-sc-1eckcw9-1 hLshwS">
                                    <div className="Label-sc-1t6hh05-0 Label__ImageLabel-sc-1t6hh05-1 bULMbj"><span>Hình ảnh</span></div>
                                </td>
                                <td colSpan={2} className="StepItem__TableCell-sc-17m0775-3 OrderTable__TableCell-sc-1eckcw9-1 hLshwS">
                                    <div className="Label-sc-1t6hh05-0 duoMBh"><span>Tên sản phẩm</span></div>
                                </td>
                                <td className="StepItem__TableCell-sc-17m0775-3 OrderTable__TableCell-sc-1eckcw9-1 hLshwS">
                                    <div className="Label-sc-1t6hh05-0 duoMBh"><span>Đơn Giá (có VAT)</span></div>
                                </td>
                                <td className="StepItem__TableCell-sc-17m0775-3 OrderTable__TableCell-sc-1eckcw9-1 hLshwS">
                                    <div className="Label-sc-1t6hh05-0 duoMBh"><span>Số lượng</span></div>
                                </td>
                                <td className="StepItem__TableCell-sc-17m0775-3 OrderTable__TableCell-sc-1eckcw9-1 hLshwS">
                                    <div className="Label-sc-1t6hh05-0 duoMBh"><span>Tổng tiền (có VAT)</span></div>
                                </td>
                                <td className="StepItem__TableCell-sc-17m0775-3 OrderTable__TableCell-sc-1eckcw9-1 hLshwS"><a href="javascript:void(0)" style={{ color: 'rgb(254, 80, 67)', whiteSpace: 'nowrap' }}><span>Bỏ hết</span></a></td>
                            </tr>
                        </thead>
                        <tbody className="StepItem__TableBody-sc-17m0775-2 OrderTable__TableBody-sc-1eckcw9-0 bxhGmc">
                            <tr className="StepItem__TableRow-sc-17m0775-4 OrderTable__TableRow-sc-1eckcw9-2 dNzToN">
                                <td className="StepItem__TableCell-sc-17m0775-3 OrderTable__TableCell-sc-1eckcw9-1 hLshwS">
                                    <div className="OrderTable__ImageWrapper-sc-1eckcw9-9 cGrmIw"><img loading="lazy" src="https://images-handler.kamereo.vn/eyJidWNrZXQiOiJpbWFnZS1oYW5kbGVyLXByb2QiLCJrZXkiOiJzdXBwbGllci82NTQvUFJPRFVDVF9JTUFHRS9kMTZhMjdhNi1lNDlmLTQwY2MtOGNjZC04YzIxNTc1NjdmZjMuanBnIn0=" alt="Bí ngòi vàng" className="OrderTable__ItemImage-sc-1eckcw9-11 cseAdn" />
                                    </div>
                                </td>
                                <td colSpan={2} className="StepItem__TableCell-sc-17m0775-3 OrderTable__TableCell-sc-1eckcw9-1 jAgyWF"><a href="/products/37895495-80a1-425c-8b41-08ff41cb1977" target="_blank">
                                    <div className="Value-sc-15o9mgu-0 eKRzIr">
                                        <div className="Value__Description-sc-15o9mgu-2 hemrKx">Bí ngòi vàng</div>
                                    </div>
                                </a></td>
                                <td className="StepItem__TableCell-sc-17m0775-3 hideOnMobile OrderTable__TableCell-sc-1eckcw9-1 hLshwS"><span className="Money-doxtx5-0 brYFgQ">45,000đ</span><span className="OrderTable__NoWrapText-sc-1eckcw9-5 fwXcGl">/Kg </span></td>
                                <td className="StepItem__TableCell-sc-17m0775-3 hideOnMobile OrderTable__TableCell-sc-1eckcw9-1 hLshwS">
                                    <div className="QuantityInput__QuantityInputContainer-sc-1nd1l3z-0 cHinwM">
                                        <div className="QuantityWrapper-zx68x-0 cnWqKW">
                                            <button data-test="minus-button" type="button" className="ant-btn Button-jgr7l8-0 minus QuantityButton-sc-1rjirov-0 hkvVgv ant-btn-round ant-btn-sm ant-btn-icon-only">
                                                <i aria-label="icon: minus" className="anticon anticon-minus">
                                                    <svg viewBox="64 64 896 896" focusable="false" className data-icon="minus" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                                                    </svg>
                                                </i></button>
                                            <input data-test="quantity-input" type="text" min={0} className="QuantityInnerInput-sc-1i1jla2-0 hCeYQQ" defaultValue={2} style={{ transition: 'opacity 0.2s ease 0s', backgroundColor: 'rgb(250, 250, 250)', color: 'inherit', fontSize: 16, width: 44 }} />
                                            <button data-test="plus-button" type="button" className="ant-btn Button-jgr7l8-0 plus QuantityButton-sc-1rjirov-0 eYEupy ant-btn-round ant-btn-sm ant-btn-icon-only">
                                                <i aria-label="icon: plus" className="anticon anticon-plus">
                                                    <svg viewBox="64 64 896 896" focusable="false" className data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                                                        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
                                                    </svg>
                                                </i></button>
                                        </div>
                                    </div>
                                </td>
                                <td className="StepItem__TableCell-sc-17m0775-3 hideOnMobile OrderTable__TableCell-sc-1eckcw9-1 hLshwS"><span className="Money-doxtx5-0 brYFgQ">90,000đ</span>&nbsp;<span className="OrderTable__NoWrapText-sc-1eckcw9-5 fwXcGl">(0% VAT)</span>
                                </td>
                                <td className="StepItem__TableCell-sc-17m0775-3 hideOnMobile OrderTable__TableCell-sc-1eckcw9-1 hLshwS">
                                    <button type="button" className="ant-btn Button-jgr7l8-0 OrderTable__Button-sc-1eckcw9-3 hfwshL ant-btn-secondary ant-btn-circle ant-btn-sm ant-btn-icon-only ant-btn-background-ghost" style={{ color: 'rgba(0, 0, 0, 0.54)' }}><i aria-label="icon: delete" className="anticon anticon-delete">
                                        <svg viewBox="64 64 896 896" focusable="false" className data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                                        </svg>
                                    </i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="Footer__FooterWrapper-sc-17r70f1-2 gRHqQg">
                    <div className="Footer-sc-17r70f1-0 gDpMor">
                        <div className="CartTotal-luoaet-0 felnlH">
                            <div className="Value-sc-15o9mgu-0 eKRzIr"><span>Tổng giỏ hàng</span></div>
                            <div style={{ flex: '1 1 0%' }} />
                            <div className="Value-sc-15o9mgu-0 eKRzIr"><span className="Money-doxtx5-0 brYFgQ">90,000đ</span></div>
                        </div>
                        <div className="Footer__ButtonWrapper-sc-17r70f1-1 eltBLd">
                            <button type="button" className="ant-btn Button-jgr7l8-0 epExKW ant-btn-secondary"><span>Huỷ</span></button>
                            <div style={{ width: '6pt' }} />
                            <button type="button" className="ant-btn Button-jgr7l8-0 iPsOaJ ant-btn-primary"><span>Tiếp tục</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}
export default Checkout3;