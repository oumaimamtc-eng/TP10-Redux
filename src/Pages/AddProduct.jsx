import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProduct = () => {
    dispatch({ type: "ADD_PRODUCT", payload: { ...product, id: Date.now() } });
    navigate("/products");
  };

  return (
    <div className="add-card">
      <input placeholder="Nom" onChange={e => setProduct({ ...product, name: e.target.value })} />
      <input placeholder="Catégorie" onChange={e => setProduct({ ...product, category: e.target.value })} />
      <input placeholder="Prix" onChange={e => setProduct({ ...product, price: e.target.value })} />
      <button onClick={addProduct}>Ajouter</button>
    </div>
  );
}

export default AddProduct;
