import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input } from 'antd';
// import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

// const navigate = useNavigate();
type AddProductPagePops = {
    onAdd: Function;
}
const AddProductPage = ({onAdd}:AddProductPagePops) => {
   

    return (
        <div>
           <center>  <h1>THEM SAN PHAM </h1></center>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 800, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onAdd}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product categoryId"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please input your categoryId!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                     add
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage