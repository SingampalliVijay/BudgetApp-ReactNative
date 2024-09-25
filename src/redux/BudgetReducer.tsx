import { SET_CATEGORIES_DATA, SET_SUBCATEGORIES_DATA } from "./BudgetAction";

const initialState: any = {
  categories: [],
};

export const budgetReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CATEGORIES_DATA:
      return {
        ...state,
        categories: [...state.categories, { category: action.data.category, subcategories: [] }],
      };
    case SET_SUBCATEGORIES_DATA:
      return {
        ...state,
        categories: state.categories.map((cat: any) =>
          cat.category === action.data.category
            ? { ...cat, subcategories: [...cat.subcategories, action.data.subcategory] }
            : cat
        ),
      };
    default:
      return state;
  }
};
