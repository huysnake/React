import React, { useState } from 'react';
import { Space, Table, Tag, Button, Breadcrumb, Layout, Menu } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { Content, Footer } from 'antd/es/layout/layout';
import { message, Popconfirm, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { IProduct } from '../../types/product';

const text = 'Are you sure to delete this task?';
const description = 'Delete the task';

const confirm = () => {
  message.info('Clicked on Yes.');
};
type  ProductManagementPagePops = {
    products: IProduct[],
    onRemove: (id: string ) => void
}
const ProductManagementPage = ({products, onRemove}:ProductManagementPagePops) => {
 console.log(products);


  const [searchText, setSearchText] = useState('');

  const onConfirmRemove = (id: string) => {
    onRemove(id)
  }

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  

  const columns: ColumnsType<any> = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Product Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Product Image',
      dataIndex: 'image',
      key: 'image',
      render: (url: string) => (
        <img src={url} alt="Product" style={{ maxWidth: 100 }} />
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Category ID',
      dataIndex: 'categoryId',
      key: 'categoryId',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Popconfirm
          placement="topLeft"
          title={text}
          description={description}
          onConfirm={() => onConfirmRemove(record._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button >
            Remove
          </Button>
        </Popconfirm>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Button className="bg-primary">
            <Link to={`/admin/products/${record._id}/update`}>Update</Link>
          </Button>
        </Space>
      ),
    },
  ];

  const filteredData = products.filter((product:any) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Layout className="layout">
      <header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(7).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </header>
      <Content style={{ padding: '7px 3px 50px' }}>
        <Space wrap>
          <Button type="primary">
            <Link to={'/products'}>Home</Link>
          </Button>
          <Button type="primary">
            <Link to={'/admin/products/add'}>Add San Pham</Link>
          </Button>

          <Button className="bg-primary">
            <Link to={"/admin/signin"}>Đăng Xuất</Link>
          </Button>
          <Input.Search
            placeholder="Tìm kiếm"
            allowClear
            enterButton={<SearchOutlined />}
            size="middle"
            value={searchText}
            onChange={onChangeSearchText}
          />
        </Space>
        <div className="site-layout-content">
          <div>
            <br />
            <center>
              <h1>Hiển Thị Sản Phẩm</h1>
            </center>
            <Table columns={columns} dataSource={products} />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Huy Snake Vipro</Footer>
    </Layout>
  );
};

export default ProductManagementPage;
