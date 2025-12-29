import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaInfoCircle, FaStore,FaShoppingCart, FaLock } from "react-icons/fa";

export default function Navbar(){
    const cartItems=useSelector(state=>state.cart.items);
     return(
    <>
      <section className="hero">
          <nav>
              <div className="logo">
                <h1><strong>Sh</strong>opSphere</h1>
              </div>
               <div>
                    <Link to='/'><FaHome /> Home</Link>
                    <Link to="/About"><FaInfoCircle /> About</Link>
                    <Link to="/Products"><FaStore /> Products</Link>
                    <Link to="/Cart"><FaShoppingCart /> Panier ({cartItems.length})</Link>
                    <Link to="/Login" >
                      <FaLock/> Logout
                    </Link>
               </div>
          </nav>
        <div className="hero-overlay">
          <h1>Find Your Perfect Product</h1>
          <p>Shop smart. Live better.</p>

          <div className="search-bar">
            <input placeholder="Search product..." />
            <select>
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothes</option>
            </select>
            <button>Search</button>
          </div>
        </div>
      </section>
    </>
  );
     
};