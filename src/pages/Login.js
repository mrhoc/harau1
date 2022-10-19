import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input,notification  } from 'antd';
import AppStore from '../assets/images/AppStore.76c5b55d.svg'
import GoogleStore from '../assets/images/GoogleStore.cb918cd4.svg'
import adea69c8d35c1cfa32ee173db7ac457b from '../assets/images/adea69c8d35c1cfa32ee173db7ac457b.png'
import a1951685fa3474f6eb8c306adbe6204a from '../assets/images/a1951685fa3474f6eb8c306adbe6204a.png'
import ba2622d292e9341b265ded7245853198 from '../assets/images/ba2622d292e9341b265ded7245853198.png'
import a482c967e50fef21791147c113f4a4afb from '../assets/images/a482c967e50fef21791147c113f4a4afb.png'
import bg from '../assets/images/bg.jpg'
import { AppContext } from '../providers/Index';
import { useContext } from 'react';
import axios from 'axios';
const Login = () => {
    const useAppContext = useContext(AppContext)
    const {currentUser,setcurrentUser } = useAppContext;
    const navigate=useNavigate()
    const openNotification = () => {
        notification.open({
          message: 'Thông báo',
          description:
            'Tài khoản hoặc mật khẩu không đúng',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };

    const onFinish = (values) => {    
        var ip = JSON.stringify({
            "userName": values.userName,
            "password": values.password
        });

        var config = {
            method: 'post',
            url: '//api.harau.vn/identity/login',
            headers: { 
                'Content-Type': 'application/json',
              },
            data: ip
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                if(response.data){
                    localStorage.setItem('ajs_user_id',response.data.accessToken);
                    setcurrentUser(values)
                    navigate('/')
                    
                }
                
                
            })
            .catch(function (error) {
                console.log('error',error);
                openNotification()
            });

    };
    

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    console.log('currentUser',currentUser);
   

    return (
        <div classname="bulZNJ">
            <div className="GateLayout__Container-cr7ybx-0 ktLqKF">
                <div className="GateLayout__Content-cr7ybx-1 jdPVrB">

                    <div className="ant-row-flex ant-row-flex-center ant-row-flex-top">
                        <section className="ContactUsForm__Container-sc-4ujnee-0 gRZjzk">
                            <div className="PageHeader__Container-sc-19x4r8h-1 bYkpeS"><h2 className="PageHeader__Header-sc-19x4r8h-0 jTfioR"><span>Đăng nhập</span></h2></div>

                            <Form
                                name="basic"
                                labelCol={{
                                    span: 24,
                                }}
                                wrapperCol={{
                                    span: 24,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Tên đăng nhập"
                                    name="userName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Mật Khẩu"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    wrapperCol={{
                                        offset: 0,
                                        span: 16,
                                    }}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        offset: 0,
                                        span: 24,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit" className='ant-btn-block' >
                                        Đăng Nhập
                                    </Button>
                                </Form.Item>
                                <p><span>Chưa có tài khoản?</span> <Link to="/contact-us"><span>Liên hệ với chúng tôi</span></Link></p>
                            </Form>
                        </section>
                    </div>
                    <div className="GateLayout__DownloadAppContainer-cr7ybx-8 hLkNwS">
                        <div className="DownloadApp__Container-sc-18txisl-0 fFuSo"><p><span>Đặt hàng mọi lúc, mọi nơi thông qua ứng dụng của chúng tôi:</span>
                        </p>
                            <div className="DownloadApp__StoreContainer-sc-18txisl-1 liFjBl"><a href="" target="_blank"><img src={AppStore} className="DownloadApp__AppStoreImage-sc-18txisl-2 gFLAxF" /></a><a href="" target="_blank"><img src={GoogleStore} className="DownloadApp__GoogleStoreImage-sc-18txisl-3 ebLbRP" /></a></div>
                        </div>
                    </div>
                </div>
                <div className="GateLayout__Bg-cr7ybx-2 fDxdCa"><img src={bg} className="GateLayout__ImageTopLeft-cr7ybx-3 hHcaRl" /><img src={a1951685fa3474f6eb8c306adbe6204a} className="GateLayout__ImageTopRight-cr7ybx-4 eZkJsz" /><img src={ba2622d292e9341b265ded7245853198} className="GateLayout__ImageBottomLeft-cr7ybx-5 hwiqXA" /><img src={a482c967e50fef21791147c113f4a4afb} className="GateLayout__ImageBottomRight-cr7ybx-6 ioIsJo" /></div>
            </div>
        </div>

    );
}

export default Login;
