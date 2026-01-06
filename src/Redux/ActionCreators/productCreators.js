/*export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: "fetchProductsStart" });

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products"
      );
      const data = await response.json();

      dispatch({
        type: "fetchProductsSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "fetchProductsError",
        payload: error.message,
      });
    }
  };
};*/
