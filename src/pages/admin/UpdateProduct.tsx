import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../types/product'
import { Button, Form, Input } from 'antd';
import { getOneProduct, updateProduct } from "../../api/product"

const UpdateProductPage = (props: any) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<IProduct>();
  const [form] = Form.useForm();
  
  useEffect(() => {
    getOneProduct(id).then(({ data }) => setProduct(data.product));
  }, []);
  
  // thêm điều kiện lọc sản phẩm để set giá trị vào form
  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        id: product?._id,
        name: product?.name,
        price: product?.price,
        image: product?.image,
        description: product?.description,
        categoryId: product?.categoryId._id,
      });
    }
  }, [product]);
  
  const onFinish = (values: any) => {
      props.onUpdate(values); // gọi phương thức onUpdate để cập nhật sản phẩm trong danh sách
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <center>
      <div>
        <h1>UPDATE SAN PHAM</h1>
        <Form form={form} style={{ maxWidth: 600 }} onFinish={onFinish} >

          <Form.Item
            label=""
            name="id"
            style={{ display: 'none' }} 
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

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
            rules={[{ required: true, message: 'Please input your price!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Product Image"
            name="image"
            rules={[{ required: true, message: 'Please input your image!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Product Description"
            name="description"
            rules={[{ required: true, message: 'Please input your description!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Product CategoryId"
            name="categoryId"
            rules={[{ required: true, message: 'Please input your categoryId!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Update Product
            </Button>
          </Form.Item>
        </Form>
      </div>
    </center>
  )
}

export default UpdateProductPage
