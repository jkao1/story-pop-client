import {
  CHANGE_NAVBAR_TEXT
} from "./actionTypes";

const initialState = {
  navbarText: ''
};

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case CHANGE_NAVBAR_TEXT: {
      return {
        ...state,
        navbarText: action.payload,
      };
    }
    case "@@router/LOCATION_CHANGE": {
      return {
        ...state,
        navbarText: '',
      };
    }
  }
  return state;
};

export default reducer;
