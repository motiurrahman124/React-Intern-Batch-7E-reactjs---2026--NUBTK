import { ColorPicker } from 'antd';

import { Button, Checkbox, Form, Input } from 'antd';
import { useEffect, useState } from 'react';

const onFinish = values => {
    console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};


function Home() {
    const [value, setValue] = useState(0);
    const [totalClicked, setTotalClicked] = useState(0);

    // const value1 = 5;
    // const value2 = "5";

    // if(value1===value2){
    //     console.log("Right")
    // }else{
    //     console.log("Wrong")
    // }

    useEffect(() => {
        if(value !== 0){
            setTotalClicked(totalClicked+1)
        }
    }, [value])

    return (
        <div className='min-h-[400px] flex flex-col items-center justify-center py-20'>
            {/* <h1>This is home page</h1> */}
            <p>Total button clicked: {totalClicked}</p>
            <h1 className='text-4xl mb-2'>{value}</h1>
            <button
                onClick={() => {
                    setValue(value + 5)
                    // setTotalClicked(totalClicked+1)
                }}
                className='bg-blue-500 py-1 px-2 rounded-lg text-white'
            >
                +5
            </button>

            <button
                onClick={() => {
                    setValue(value - 5)
                    // setTotalClicked(totalClicked+1)
                }}
                className='bg-blue-500 py-1 px-2 rounded-lg text-white'
            >
                -5
            </button>

            {/* <ColorPicker defaultValue="#1677ff" />

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
            </Form> */}
        </div>
    )
}

export default Home