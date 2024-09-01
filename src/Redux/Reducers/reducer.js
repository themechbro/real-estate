import { VIEW_PROPERTY, ADD_CART } from "../Actions/actions";

const initialState = {
  viewProperty: {},
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_PROPERTY:
      return { ...state, viewProperty: action.payload };
      case ADD_CART:
        return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

export default reducer;
