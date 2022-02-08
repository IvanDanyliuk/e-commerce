import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Admin from './pages/Admin/Admin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminNewProduct from './pages/Admin/AdminNewProduct';

const App = () => {
  const user = useSelector(state => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
        <Route path='/admin' element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path='analytics' element={<AdminDashboard />} />
          <Route path='users' element={<AdminUsers />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='newproduct' element={<AdminNewProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;