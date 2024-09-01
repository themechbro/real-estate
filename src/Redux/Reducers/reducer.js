import {
  VIEW_PROPERTY,
  SET_PRICE,
  SET_PROPERTYTYPE,
  SET_LOCATION,
} from "../Actions/actions";

const initialState = {
  viewProperty: {},
  pricerange: "",
  propertyType: "",
  location: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_PROPERTY:
      return { ...state, viewProperty: action.payload };
    case SET_PRICE:
      return { ...state, pricerange: action.payload };
    case SET_PROPERTYTYPE:
      return { ...state, propertyType: action.payload };
    case SET_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

export default reducer;
