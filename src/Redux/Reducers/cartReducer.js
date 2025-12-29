const initialState = {
  items: [] 
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_CART": {
      const Item = state.items.find(
        item => item.product.id === action.payload.id
      );

      if (Item) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        items: [...state.items, { product: action.payload, quantity: 1 }]
      };
    }

    case "QUANTITY_PLUS":
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "QUANTITY_MOIN":
      return {
        ...state,
        items: state.items
          .map(item =>
            item.product.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)
      };

    case "DELET_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          item => item.product.id !== action.payload
        )
      };

    default:
      return state;
  }
}
