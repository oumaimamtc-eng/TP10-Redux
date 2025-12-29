import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return <h3>🛒 Panier vide</h3>;
  }

  return (
    <section className="section">
        <h2>🛒 Panier</h2>
    <div className="cart">
      {items.map(item => (
        <div key={item.product.id} className="cart-item">
          <h4>{item.product.title}</h4>
          <p>{item.product.price} DH</p>

          <div className="qty-controls">
            <button
              onClick={() =>
                dispatch({ type: "QUANTITY_MOIN", payload: item.product.id })
              }
            >
              <FaMinus />
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                dispatch({ type: "QUANTITY_PLUS", payload: item.product.id })
              }
            >
              <FaPlus />
            </button>
          </div>

          <button
            className="delete-btn"
            onClick={() =>
              dispatch({
                type: "DELET_FROM_CART",
                payload: item.product.id
              })
            }
          >
            <FaTrash />
          </button>
        </div>
      ))}

      <h3>Total : {total} DH</h3>
    </div>
    </section>
  );
}

export default Cart;
