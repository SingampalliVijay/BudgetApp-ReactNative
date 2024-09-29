import { SET_CATEGORIES_DATA, SET_SUBCATEGORIES_DATA } from "./BudgetAction";

const initialState: any = {
  categories: [],
};

export const budgetReducer = (state = initialState, action: any) => {
  // console.log('Action   ---->', action)
  switch (action.type) {
    case SET_CATEGORIES_DATA:
      return {
        ...state,
        categories: [...state.categories,
        {
          id: action.data.id,
          name: action.data.category,
          subcategories: []
        }
        ],
      };
    case SET_SUBCATEGORIES_DATA:
      // console.log('Action   ---->', action)
      return {
        ...state,
        categories: state.categories.map((cat: any) =>
          cat.name === action.data.category
            ? {
              ...cat, subcategories: [...cat.subcategories,
              {
                id: action.data.id,
                name: action.data.subcategory
              }
              ]
            }
            : cat
        ),
      };

    default:
      return state;
  }
};