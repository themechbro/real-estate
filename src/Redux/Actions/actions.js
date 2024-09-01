export const VIEW_PROPERTY = "VIEW_PROPERTY";
export const SET_PRICE = "SET_PRICE";
export const SET_PROPERTYTYPE = "SET_PROPERTYTYPE";
export const SET_LOCATION = "SET_LOCATION";

export const viewProperty = (viewProperty) => ({
  type: VIEW_PROPERTY,
  payload: viewProperty,
});

export const setPrice = (price) => ({
  type: SET_PRICE,
  payload: price,
});

export const setType = (propertyType) => ({
  type: SET_PROPERTYTYPE,
  payload: propertyType,
});

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location,
});
