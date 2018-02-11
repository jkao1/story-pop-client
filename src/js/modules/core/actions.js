import * as t from "./actionTypes";

export const changeNavbarText = text => ({
  type: t.CHANGE_NAVBAR_TEXT,
  payload: text
});

export const changePageNumber = value => ({
  type: t.CHANGE_PAGE_NUMBER,
  payload: value
});