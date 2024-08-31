import { VIEW_PROPERTY } from "../Actions/actions";

const initialState = {
  viewProperty: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_PROPERTY:
      return { ...state, viewProperty: action.payload };
    default:
      return state;
  }
};

export default reducer;
