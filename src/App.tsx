import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import AddProductPage from './pages/admin/AddProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import signinAdmin from './users/signup'
import Signin from './users/signin'



function App() {
  const navigate = useNavigate()
  const [products, setProduct] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data.products))
  }, [])
  // console.log(products);
  // return 
  const onHandleRemove = async  (id: string) => {
    console.log(id);
    
     try {
     await  deleteProduct(id)
        setProduct(products.filter((products) => products._id !== id));
      
     }
      catch (error) {
      console.log(error);
      
     }
   
  }
  const onHandleAdd = async (product: IProduct) => {
    try {
      const { data } = await addProduct(product);
      setProduct([...products, data.product]);
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  }
  

  const onHandleUpdate = async (id: string, product: IProduct) => {
    try {
      await updateProduct(id, product); // gọi API để cập nhật sản phẩm
      setProduct(products.map(p => p._id === id ? product : p)); // cập nhật sản phẩm trong state
      navigate('/admin/products'); // điều hướng đến trang quản lý sản phẩm
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' >
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id/mup' element={<ProductDetailPage />} />
          </Route>
        </Route>
        <Route path='/admin'>
          <Route path ='signin' element={<Signin/>}/>
           
        
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App