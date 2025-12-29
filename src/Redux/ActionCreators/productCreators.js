export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_PRODUCTS_START" });

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products"
      );
      const data = await response.json();

      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_ERROR",
        payload: error.message,
      });
    }
  };
};
