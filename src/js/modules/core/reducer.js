import {
  CHANGE_NAVBAR_TEXT,
  CHANGE_PAGE_NUMBER,
} from "./actionTypes";

const initialState = {
  navbarText: '',
  pageNumber: null,
};

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case CHANGE_NAVBAR_TEXT: {
      return {
        ...state,
        navbarText: action.payload,
      };
    }
    case CHANGE_PAGE_NUMBER: {
      return {
        ...state,
        pageNumber: action.payload
      }
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
