import { Table, Space, Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, List } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  getItem('Admin', '1', <PieChartOutlined />),

  getItem('login', 'sub1', <UserOutlined />, [
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),

];

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  categoryId: string;
}

interface IProps {
  products: IProduct[];
  onRemove: (id: string) => void;
}

const ProductPage = (props: IProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);

  const removeProduct = (id: string) => {
    props.onRemove(id);
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text: string) => <img src={text} width="100" alt="" />,
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
      title: 'thao tac',
      key: 'action',
      render: ( record: IProduct) => (
        <Space size="middle">
          <Button type="primary" > Thong tin chi tiet</Button> 
          <a href="">Huy</a> 
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu  theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        <h1>Huy Snake</h1>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}> 
            <Button type="primary"><Link to={"/admin/products"}>admin</Link></Button> 
           
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
          <Content>
     
     <center>
     <h1>San Pham Khach Hang</h1>
     </center>
     <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.name}> <img width="150px" src={item.image} alt="" ></img> <br/> Mô Tả : {item.description} <br/> Giá Sản Phẩm: {item.price}k <br/></Card>
        <a href={`/products/${item.id}/mup`}>chi tiet</a>

      </List.Item>
    )}
  />
   </Content>
 
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Huy Snake One</Footer>
      </Layout>
    </Layout>
  );
};

export default ProductPage;
