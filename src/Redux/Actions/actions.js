export const VIEW_PROPERTY = "VIEW_PROPERTY";
export const DARK_MODE = "DARK_MODE";
export const ADD_CART = "ADD_CART";

export const viewProperty = (viewProperty) => ({
  type: VIEW_PROPERTY,
  payload: viewProperty,
});

export const addtoCart = (property) => ({
  type: ADD_CART,
  payload: property,
});
