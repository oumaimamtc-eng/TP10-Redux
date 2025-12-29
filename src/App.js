import logo from './logo.svg';
import './App.css';
import { Route,Routes,useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetail';
import AddProduct from './Pages/AddProduct';
import Cart from './Pages/Cart';
import Footer from './components/Footer';

function App() {
  const location=useLocation();
  const hideNavbar=location.pathname==="/Login"||
                    location.pathname==="/Register";
  return (
    <div className="App">
      {!hideNavbar && (<Navbar/>)}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/ProductDetail' element={<ProductDetails/>}/>
        <Route path='/AddProduct' element={<AddProduct/>}/>
      </Routes>
      {!hideNavbar &&(<Footer/>)}
    </div>
  );
}

export default App;
