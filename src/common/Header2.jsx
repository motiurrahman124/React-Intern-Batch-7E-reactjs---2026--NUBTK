import { useState } from 'react';
import Logo from '../assets/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from 'react-icons/io';
import { ColorPicker } from 'antd';

import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = values => {
    console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

function Header2() {
    // let show = false;

    const [show, setShow] = useState(false)
    console.log(show)

    // const value1 = 5;
    // const value2 = "5";

    // if(value1===value2){
    //     console.log("Right")
    // }else{
    //     console.log("Wrong")
    // }


    return (
        <div>
            <div class="bg-gray-700">
                <header class="flex justify-between items-center max-w-[1320px] mx-auto px-4">
                    <img src={Logo} alt="" class="w-[200px] h-fit" />
                    <ul class="md:flex hidden items-center gap-5 text-white">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Products<i class="fa-solid fa-angle-down"></i></li>
                        <li>Services</li>
                        <li>Blogs</li>
                        {/* <li>
                            <button onClick={() => setShow(!show)}>
                                {show === true ? "Close Menu" : "Show Menu"}
                            </button>
                        </li> */}
                        <li>
                            <button
                                class="bg-orange-500 px-6 py-2 rounded-lg border border-orange-600 hover:text-orange-600 hover:bg-white cursor-pointer">Connect</button>
                        </li>
                    </ul>
                    <div class="md:hidden">
                        {
                            show === false ? <GiHamburgerMenu className='text-white text-xl' onClick={() => setShow(!show)} /> : <IoMdClose className='text-white text-xl' onClick={() => setShow(!show)} />
                        }

                    </div>

                </header>
                {
                    show === true && (
                        <ul class=" px-4 text-lg font-semibold mt-5 space-y-3 text-white pb-4">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Products<i class="fa-solid fa-angle-down"></i></li>
                            <li>Services</li>
                            <li>Blogs</li>
                            <li>
                                <button
                                    class="bg-orange-500 px-6 py-2 rounded-lg border border-orange-600 hover:text-orange-600 hover:bg-white cursor-pointer">Connect</button>
                            </li>
                        </ul>
                    )
                }

            </div>

            <ColorPicker defaultValue="#1677ff" />

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Header2

