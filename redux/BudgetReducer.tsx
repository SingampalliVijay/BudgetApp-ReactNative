import {SET_CATEGORIES_DATA, SET_SUBCATEGORIES_DATA } from "./BudgetAction";

const initialState: any = {
    categoryList: [],
    subcategoryList: [],
  };
  
  export const budgetReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_CATEGORIES_DATA:
        return {
          ...state,
          categoryList: [...state.categoryList, action.data],
        };
      case SET_SUBCATEGORIES_DATA:
        return {
          ...state,
          subcategoryList: [...state.subcategoryList, action.data],
        };
      default:
        return state;
    }
  };
  