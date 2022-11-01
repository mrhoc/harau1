import React from 'react';
import { useContext } from 'react';
import avt from '../assets/images/DefaultAvatar.5fd6e724.svg'
import { AppContext } from '../providers/Index';
import { Link } from 'react-router-dom';
import avataDefault from '../assets/images/ava.png'
const Sidebar = () => {
    const useAppContext = useContext(AppContext);
    const { isOpenMenu,setisOpenMenu, currentUser, setcurrentUser,user } = useAppContext;

    var favorite, orders;
    if (currentUser.userName) {
        favorite = '/favorites';
        orders = '/orders'
    }
    else {
        favorite = '/signin'
        orders = '/signin'
    }
    var path=window.location.pathname;

    return (
        <div className="SideNav__SideNavContainer-sc-1olbv6e-18 bJhEAi">
            <nav className={`${isOpenMenu ? 'opened' : ''} SideNav__SideNavWrapper-sc-1olbv6e-15 JvmDA `}>
                <div className="SideNav__StoreContainer-sc-1olbv6e-0 fDfLf">
                    <div className="SideNav__StoreWrapper-sc-1olbv6e-2 eWakyH"><img src={user.avatarPath?user.avatarPath:avataDefault} className="SideNav__StoreAvatar-sc-1olbv6e-1 hzPbem" />
                        <div className="SideNav__StoreInfo-sc-1olbv6e-3 cgdFUK">

                            <Link className="SideNav__ChangeStoreBtn-sc-1olbv6e-6 eCcCfA" to="/signin" onClick={() => { setcurrentUser({}) }}>
                                <div className="SideNav__StoreName-sc-1olbv6e-4 fIWmmy" />
                                <h5 className="SideNav__StoreAddress-sc-1olbv6e-5 bcdqqA" /><span> {currentUser.userName ? 'Đăng xuất' : 'Đăng nhập'}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link onClick={()=>{setisOpenMenu(false)}} className={`SideNav__StyledLink-sc-1olbv6e-12 dkdqOG ${path==='/'?'active':''}`} favorite="false" to="/" aria-current="page"><div className="SideNav__SideNavItemBorderLeft-sc-1olbv6e-11 fnJzpo" /><div className="SVGIcon-uyvh4z-0 SideNav__SideNavIcon-sc-1olbv6e-8 cuNvox"><div><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="injected-svg" data-src="/static/media/Market.ad9a73d7.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path d="M15.1243 22.5144H9.73434C7.22534 22.5144 5.52234 21.9804 4.37534 20.8334C3.22834 19.6864 2.69434 17.9834 2.69434 15.4744V10.9844C2.69434 10.7855 2.77335 10.5947 2.91401 10.454C3.05466 10.3134 3.24542 10.2344 3.44434 10.2344C3.64325 10.2344 3.83401 10.3134 3.97467 10.454C4.11532 10.5947 4.19434 10.7855 4.19434 10.9844V15.4744C4.19434 17.5604 4.58934 18.9254 5.43634 19.7744C6.28334 20.6234 7.64934 21.0164 9.73634 21.0164H15.1263C17.2123 21.0164 18.5773 20.6214 19.4263 19.7744C20.2753 18.9274 20.6683 17.5614 20.6683 15.4744V10.9844C20.6683 10.7855 20.7474 10.5947 20.888 10.454C21.0287 10.3134 21.2194 10.2344 21.4183 10.2344C21.6172 10.2344 21.808 10.3134 21.9487 10.454C22.0893 10.5947 22.1683 10.7855 22.1683 10.9844V15.4744C22.1683 17.9834 21.6343 19.6864 20.4873 20.8334C19.3403 21.9804 17.6343 22.5144 15.1243 22.5144Z" />
                    <path d="M12.4913 12.5166H12.3783C11.8536 12.5167 11.3348 12.4057 10.8561 12.1908C10.3774 11.9759 9.94966 11.662 9.60105 11.2698C9.25243 10.8777 8.99085 10.4161 8.83352 9.91551C8.67619 9.41494 8.62669 8.88671 8.68827 8.36563L9.35727 1.69263C9.37541 1.50714 9.46196 1.33505 9.60006 1.2099C9.73815 1.08474 9.9179 1.01549 10.1043 1.01563H14.7743C14.9603 1.01571 15.1397 1.08494 15.2775 1.20986C15.4154 1.33479 15.5019 1.50649 15.5203 1.69163L16.1803 8.36563C16.242 8.88671 16.1926 9.41496 16.0354 9.91558C15.8782 10.4162 15.6168 10.8779 15.2682 11.2701C14.9197 11.6624 14.4921 11.9764 14.0134 12.1914C13.5348 12.4064 13.016 12.5176 12.4913 12.5176V12.5166ZM12.4343 11.0156H12.4913C12.8047 11.0158 13.1146 10.9494 13.4004 10.8209C13.6863 10.6924 13.9416 10.5047 14.1496 10.2702C14.3575 10.0357 14.5133 9.75974 14.6067 9.46055C14.7001 9.16137 14.7289 8.84577 14.6913 8.53463V8.51863L14.0983 2.51863H10.7823L10.1823 8.51863V8.53362C10.1443 8.84816 10.1743 9.16718 10.2701 9.46914C10.366 9.77111 10.5255 10.049 10.7379 10.2841C10.9503 10.5191 11.2107 10.7059 11.5014 10.8318C11.7922 10.9576 12.1065 11.0196 12.4233 11.0136L12.4343 11.0156Z" />
                    <path d="M18.8114 12.5187H18.7294C17.7296 12.4975 16.771 12.1167 16.0292 11.4462C15.2874 10.7756 14.8121 9.86018 14.6904 8.86766V8.85066L13.9904 1.84066C13.9802 1.73671 13.9919 1.63179 14.0246 1.5326C14.0573 1.43342 14.1104 1.34217 14.1805 1.2647C14.2505 1.18722 14.3359 1.12523 14.4313 1.08269C14.5267 1.04014 14.6299 1.018 14.7344 1.01766H17.7844C18.9915 0.91255 20.1923 1.27961 21.1344 2.04166C21.9616 2.91915 22.4485 4.06312 22.5074 5.26766C22.5074 5.27632 22.5074 5.28532 22.5074 5.29466L22.7864 8.03766C22.8538 8.60005 22.8012 9.17036 22.6321 9.71095C22.463 10.2515 22.1812 10.7501 21.8053 11.1739C21.4294 11.5976 20.968 11.9368 20.4514 12.1691C19.9348 12.4014 19.3748 12.5216 18.8084 12.5217L18.8114 12.5187ZM16.1794 8.69366C16.2594 9.32618 16.564 9.90889 17.0378 10.3355C17.5116 10.7621 18.123 11.0042 18.7604 11.0177H18.8114C19.1662 11.0177 19.517 10.9424 19.8406 10.7968C20.1642 10.6512 20.4531 10.4386 20.6884 10.1729C20.9237 9.90732 21.0999 9.59479 21.2054 9.256C21.3109 8.91721 21.3433 8.55989 21.3004 8.20765V8.19266L21.0194 5.45766C20.7014 3.17766 19.9734 2.51766 17.7844 2.51766H15.5634L16.1794 8.69366Z" />
                    <path d="M6.00725 12.5183C5.44093 12.5184 4.88104 12.3984 4.36448 12.1662C3.84793 11.9341 3.38645 11.5951 3.01047 11.1716C2.63449 10.7481 2.35256 10.2497 2.18325 9.70926C2.01395 9.16884 1.96112 8.59867 2.02825 8.03634L2.29725 5.29434C2.29725 5.28434 2.29725 5.27434 2.29725 5.26434C2.359 4.05981 2.84872 2.91689 3.67825 2.04134C4.61927 1.2803 5.81848 0.913294 7.02425 1.01734H10.0743C10.1791 1.01738 10.2827 1.03937 10.3785 1.08191C10.4742 1.12445 10.56 1.18659 10.6303 1.26432C10.7006 1.34205 10.7538 1.43364 10.7865 1.5332C10.8192 1.63276 10.8307 1.73807 10.8203 1.84234L10.1203 8.85234V8.86634C10.0026 9.85903 9.52977 10.7756 8.78903 11.4469C8.0483 12.1182 7.0897 12.4987 6.09025 12.5183H6.00725ZM3.78925 5.45534L3.52025 8.19034V8.20734C3.47677 8.56388 3.5104 8.9256 3.61888 9.26801C3.72735 9.61042 3.90814 9.92552 4.149 10.192C4.38985 10.4584 4.68515 10.67 5.0149 10.8124C5.34465 10.9548 5.70115 11.0247 6.06025 11.0173C6.69657 11.0051 7.30704 10.7634 7.77927 10.3367C8.2515 9.91005 8.55371 9.32716 8.63025 8.69534L9.24525 2.51734H7.02425C4.83425 2.51734 4.10725 3.17734 3.78925 5.45534Z" />
                    <path d="M12.1184 15.9922C12.2239 15.9922 12.3294 15.9979 12.4344 16.0092C12.8777 15.9616 13.3261 16.0148 13.7459 16.165C14.1657 16.3152 14.5462 16.5583 14.8588 16.8763C15.1714 17.1943 15.408 17.5788 15.551 18.0012C15.6939 18.4235 15.7395 18.8727 15.6844 19.3152V21.7652C15.6844 21.9641 15.6053 22.1549 15.4647 22.2955C15.324 22.4362 15.1333 22.5152 14.9344 22.5152H9.93436C9.73545 22.5152 9.54468 22.4362 9.40403 22.2955C9.26338 22.1549 9.18436 21.9641 9.18436 21.7652V19.3152C9.13247 18.8992 9.16963 18.477 9.29335 18.0764C9.41707 17.6759 9.62454 17.3063 9.90199 16.992C10.1794 16.6778 10.5205 16.4262 10.9027 16.2538C11.2848 16.0814 11.6992 15.9922 12.1184 15.9922ZM12.4344 17.5142C12.3985 17.5141 12.3628 17.5114 12.3274 17.5062C12.1032 17.4739 11.8745 17.4943 11.6596 17.5658C11.4447 17.6372 11.2494 17.7579 11.0892 17.918C10.929 18.0782 10.8084 18.2735 10.7369 18.4884C10.6654 18.7034 10.645 18.932 10.6774 19.1562C10.6826 19.1916 10.6852 19.2274 10.6854 19.2632V21.0132H14.1854V19.2652C14.1855 19.2294 14.1881 19.1936 14.1934 19.1582C14.2257 18.934 14.2053 18.7054 14.1338 18.4904C14.0623 18.2755 13.9417 18.0802 13.7815 17.92C13.6214 17.7599 13.4261 17.6392 13.2111 17.5677C12.9962 17.4963 12.7676 17.4759 12.5434 17.5082C12.5072 17.5128 12.4708 17.5148 12.4344 17.5142Z" />
                </svg></div></div><span className="SideNav__SideNavLabel-sc-1olbv6e-9 ckiOBb"><span>Chợ</span></span></Link>

                <Link onClick={()=>{setisOpenMenu(false)}} className={`SideNav__StyledLink-sc-1olbv6e-12 dkdqOG ${path===favorite?'active':''}`} favorite="true" to={favorite}>
                    <div className="SideNav__SideNavItemBorderLeft-sc-1olbv6e-11 fnJzpo" />
                    <div favorite="true" className="SVGIcon-uyvh4z-0 SideNav__SideNavIcon-sc-1olbv6e-8 cuNvox">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="injected-svg" data-src="/static/media/Heart.15e2c6d5.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g clipPath="url(#clip0_599_11628-103)">
                                    <path d="M11.75 21.3011C11.468 21.3011 11.1874 21.2603 10.917 21.1801L10.888 21.1711C8.59466 20.304 6.52124 18.9408 4.81599 17.1791C3.62977 16.0295 2.68209 14.657 2.02727 13.1404C1.37245 11.6238 1.02335 9.99289 0.999993 8.34113C0.990638 7.09163 1.35341 5.86763 2.04209 4.82502C2.73078 3.78241 3.71422 2.96838 4.86714 2.48662C6.02006 2.00486 7.29029 1.87717 8.51604 2.11981C9.74178 2.36246 10.8676 2.96445 11.75 3.84913C12.634 2.96693 13.7603 2.36739 14.9858 2.12667C16.2113 1.88595 17.4807 2.0149 18.6328 2.49716C19.7849 2.97941 20.7676 3.79321 21.4561 4.83517C22.1447 5.87712 22.508 7.10023 22.5 8.34913C22.4762 10.0004 22.127 11.6307 21.4721 13.1468C20.8173 14.6628 19.8699 16.0348 18.684 17.1841C16.9787 18.9458 14.9053 20.309 12.612 21.1761L12.583 21.1851C12.3124 21.2636 12.0318 21.3027 11.75 21.3011ZM11.357 19.7491C11.6142 19.8223 11.8868 19.8223 12.144 19.7491C14.46 18.9491 21.001 15.1701 21.001 8.34913C21.001 8.34913 21.001 8.34913 21.001 8.34313C21.0075 7.33192 20.6945 6.3445 20.1066 5.52173C19.5187 4.69895 18.6859 4.08287 17.7272 3.76136C16.7684 3.43985 15.7326 3.42935 14.7676 3.73136C13.8025 4.03336 12.9574 4.63244 12.353 5.44313C12.2833 5.53742 12.1924 5.61405 12.0876 5.66685C11.9829 5.71965 11.8673 5.74715 11.75 5.74715C11.6327 5.74715 11.5171 5.71965 11.4123 5.66685C11.3076 5.61405 11.2167 5.53742 11.147 5.44313C10.5424 4.63286 9.69743 4.03417 8.73255 3.73243C7.76766 3.43069 6.73214 3.44131 5.77364 3.76277C4.81515 4.08422 3.98262 4.70011 3.39477 5.5226C2.80693 6.34508 2.49378 7.33218 2.49999 8.34313C2.49999 15.1671 9.04099 18.9491 11.357 19.7491Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_599_11628-103">
                                        <rect width="21.5" height="19.3" fill="white" transform="translate(1 2)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <span className="SideNav__SideNavLabel-sc-1olbv6e-9 SideNav__FavoriteSideNavLabel-sc-1olbv6e-10 hEWsxw"><span>Sản phẩm yêu thích</span></span>
                </Link>

                <Link onClick={()=>{setisOpenMenu(false)}} className={`SideNav__StyledLink-sc-1olbv6e-12 dkdqOG ${path===orders?'active':''}`} favorite="false" to={orders}>
                    <div className="SideNav__SideNavItemBorderLeft-sc-1olbv6e-11 fnJzpo" />
                    <div className="SVGIcon-uyvh4z-0 parentIcon SideNav__SideNavIcon-sc-1olbv6e-8 cuNvox">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="injected-svg" data-src="/static/media/Orders.90d1375e.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M14.75 12.7031H7.75C7.55109 12.7031 7.36032 12.6241 7.21967 12.4835C7.07902 12.3428 7 12.152 7 11.9531C7 11.7542 7.07902 11.5634 7.21967 11.4228C7.36032 11.2821 7.55109 11.2031 7.75 11.2031H14.75C14.9489 11.2031 15.1397 11.2821 15.2803 11.4228C15.421 11.5634 15.5 11.7542 15.5 11.9531C15.5 12.152 15.421 12.3428 15.2803 12.4835C15.1397 12.6241 14.9489 12.7031 14.75 12.7031Z" />
                                <path d="M12.13 16.7031H7.75C7.55109 16.7031 7.36032 16.6241 7.21967 16.4835C7.07902 16.3428 7 16.152 7 15.9531C7 15.7542 7.07902 15.5634 7.21967 15.4228C7.36032 15.2821 7.55109 15.2031 7.75 15.2031H12.13C12.3289 15.2031 12.5197 15.2821 12.6603 15.4228C12.801 15.5634 12.88 15.7542 12.88 15.9531C12.88 16.152 12.801 16.3428 12.6603 16.4835C12.5197 16.6241 12.3289 16.7031 12.13 16.7031Z" />
                                <path d="M13.7501 6.4981H9.75009C9.12879 6.55693 8.50427 6.42582 7.95909 6.1221C7.60994 5.84112 7.33852 5.47545 7.17065 5.0599C7.00279 4.64435 6.94407 4.19276 7.00009 3.7481C6.94407 3.30345 7.00279 2.85185 7.17065 2.43631C7.33852 2.02076 7.60994 1.65509 7.95909 1.3741C8.50427 1.07039 9.12879 0.939278 9.75009 0.998105H13.7501C14.3714 0.939278 14.9959 1.07039 15.5411 1.3741C15.8902 1.65509 16.1617 2.02076 16.3295 2.43631C16.4974 2.85185 16.5561 3.30345 16.5001 3.7481C16.5589 4.3694 16.4278 4.99392 16.1241 5.5391C15.8431 5.88825 15.4774 6.15967 15.0619 6.32754C14.6463 6.4954 14.1947 6.55412 13.7501 6.4981ZM9.75009 2.4981C9.42513 2.46428 9.09675 2.50673 8.79109 2.6221C8.60309 2.7481 8.50009 3.1481 8.50009 3.7481C8.50009 4.3481 8.60009 4.7481 8.79109 4.8741C9.09675 4.98948 9.42513 5.03193 9.75009 4.9981H13.7501C14.3501 4.9981 14.7501 4.8981 14.8761 4.7071C14.9915 4.40144 15.0339 4.07306 15.0001 3.7481C15.0001 3.1481 14.9001 2.7481 14.7091 2.6221C14.4034 2.50673 14.075 2.46428 13.7501 2.4981H9.75009Z" />
                                <path d="M14.75 22.4907H8.75C6.087 22.4907 4.359 21.9327 3.311 20.7347C2.156 19.4147 2 17.4687 2 15.7447V9.74472C2 7.30772 2.461 5.67472 3.45 4.60372C4.363 3.61572 5.676 3.12572 7.709 3.01672C7.80749 3.0114 7.90607 3.02553 7.9991 3.05831C8.09213 3.09109 8.17779 3.14187 8.25119 3.20775C8.3246 3.27363 8.38431 3.35333 8.42691 3.44229C8.46952 3.53125 8.49418 3.62773 8.4995 3.72622C8.50482 3.82471 8.49069 3.92328 8.45791 4.01631C8.42513 4.10934 8.37435 4.19501 8.30847 4.26841C8.24258 4.34181 8.16289 4.40152 8.07393 4.44413C7.98497 4.48673 7.88849 4.5114 7.79 4.51672C6.60729 4.44247 5.44303 4.83774 4.55 5.61672C3.844 6.38272 3.5 7.73172 3.5 9.74472V15.7447C3.5 17.7997 3.781 18.9987 4.439 19.7507C5.182 20.5947 6.55 20.9907 8.75 20.9907H14.75C16.95 20.9907 18.318 20.5907 19.061 19.7467C19.719 18.9937 20 17.7957 20 15.7407V9.74472C20 7.70472 19.666 6.39372 18.948 5.61772C18.0548 4.83966 16.8913 4.4445 15.709 4.51772C15.6105 4.5124 15.514 4.48773 15.4251 4.44513C15.3361 4.40252 15.2564 4.34281 15.1905 4.26941C15.1246 4.19601 15.0739 4.11034 15.0411 4.01731C15.0083 3.92428 14.9942 3.82571 14.9995 3.72722C15.0048 3.62873 15.0295 3.53225 15.0721 3.44329C15.1147 3.35433 15.1744 3.27463 15.2478 3.20875C15.3212 3.14287 15.4069 3.09209 15.4999 3.05931C15.5929 3.02653 15.6915 3.0124 15.79 3.01772C17.824 3.12772 19.138 3.61772 20.049 4.60072C21.039 5.67072 21.5 7.30072 21.5 9.74672V15.7467C21.5 17.4757 21.344 19.4207 20.189 20.7407C19.141 21.9327 17.413 22.4907 14.75 22.4907Z" />
                            </svg>
                        </div>
                    </div>
                    <span className="SideNav__SideNavLabel-sc-1olbv6e-9 ckiOBb"><span>Đơn hàng</span></span>
                </Link>
            </nav>
        </div>
    );
}

export default Sidebar;
