import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../api/product";
import { Table, Divider } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    image:"",
    price: 0,
    description: "",
    categoryId: "",
  });

  useEffect(() => {
    getOneProduct(Number(id)).then(({ data }) => setProduct(data));
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (url: string) => <img src={url} alt="Product" style={{ maxWidth: 100 }} />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category ID",
      dataIndex: "categoryId",
      key: "categoryId",
    },
  ];

  const data = [
    {
      key: "1",
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description,
      categoryId: product.categoryId,
    },
  ];

  return (
    <Content>

      <div>
      <center>
        <h1>Thông Tin Chi Tiết</h1>
        <button className="primary"><Link to={"/products"}>Quay lại</Link></button>
      </center>
      
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
    </Content>
  );
};

export default ProductDetailPage;
