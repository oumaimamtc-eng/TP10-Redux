const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  selectedCategory: "all",
  maxPrice: 0,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: action.payload,
      };

    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
        filteredProducts:
          action.payload === "all"
            ? state.products
            : state.products.filter(
                (p) => p.category?.name === action.payload
              ),
      };

    case "SET_MAX_PRICE":
      return {
        ...state,
        maxPrice: action.payload,
        filteredProducts: state.products.filter(
          (p) => p.price <= action.payload
        ),
      };

    default:
      return state;
  }
}
