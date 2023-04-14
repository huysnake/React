import React from 'react';
import { useForm } from 'react-hook-form';
import { signin } from '../api/auth';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
  const onSubmit = async (inputSubmit: any) => {
    const { data } = await signin(inputSubmit);
    console.log(data);
    localStorage.setItem('users', JSON.stringify(data));
    localStorage.setItem('user', JSON.stringify(data.accessToken));
    alert("dang nhap thanh cong");
    navigate("/admin/products")
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="signin-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

    <div style={{ width: '50%', maxWidth: 400, padding: 20 }}>
    
    <Title level={2}>Đăng nhập</Title>
    
    <Form
    
    onFinish={onSubmit}
    
    onFinishFailed={onFinishFailed}
    
    className="signin-form"
    
    layout="vertical"
    
    initialValues={{ remember: true }}
    
    >
    
    <Form.Item
    
    label="Email"
    
    name="email"
    
    rules={[
    
    { required: true, message: 'Email là bắt buộc' },
    
    { type: 'email', message: 'Email không hợp lệ' }
    
    ]}
    
    >
    
    <Input {...register('email')} />
    
    </Form.Item>
    <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Password là bắt buộc' },
          { min: 6, message: 'Password phải có ít nhất 6 kí tự' }
        ]}
        hasFeedback
      >
        <Input.Password {...register('password')} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="signin-button" block>
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  </div>
</div>
  );
};

export default Signin;
