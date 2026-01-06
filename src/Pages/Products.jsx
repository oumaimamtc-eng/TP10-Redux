import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import ProductDetails from "./ProductDetail";
import { useState } from "react";
import AddProduct from "./AddProduct";
import { fetchProductsSuccess,setCategory ,setMaxPrice} from "../Redux/Reducers/productslice";
import {addCart} from '../Redux/Reducers/cartSlice';
import axios from "axios";

function Products() {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hide,setHide]=useState(false);
  const { products,filteredProducts, selectedCategory, maxPrice } = useSelector(
  state => state.products);
  useEffect(()=>{axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((response)=>{
      if(response.status===200){dispatch(fetchProductsSuccess(response.data || []))
      } else{
        alert('Erreur')
      }
    })
  },[]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <section className="section" id="Products">
        <h2>Products</h2>
        <div className="cards-grid">
    <div className="container">
      <button onClick={()=>setHide(true)}> Créer un produit </button>
      <h3>Total produits : {products.length}</h3>
      <div className="filters">
        <select onChange={e => {dispatch( setCategory (e.target.value));
          setCurrentPage(1)}
        }>
          <option value="all">All</option>
          <option value="Electronics"></option>
          <option value="Clothes"></option>
        </select>

        <input
          type="number"
          placeholder="Max price"
          onChange={e => {dispatch( setMaxPrice(e.target.value));
            setCurrentPage(1);
          }}
        />
    </div>
      <div className="products-grid">
        {currentProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.images?.[0]}
              alt={product.title}
              width="150"
            />
            <h4>{product.title}</h4>
            <p>{product.category?.name}</p>
            <p>{product.price} DH</p>
            <div className="product-actions">
              <button
                onClick={() =>
                  dispatch(addCart(product))
                }
              >
               <FaShoppingCart/>
              </button>

              <button onClick={() => setSelectedProduct(product)}>
                <FaEye/>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <ProductDetails product={selectedProduct} />
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
      {hide && (
        <div className="modal-overlay" >
          <div className="modal-content">
            <AddProduct/>
            <button onClick={() => setHide(false)}>X</button>
          </div>
        </div>
      )}
    </div>
    </div>
    </section>
  );
}

export default Products;
