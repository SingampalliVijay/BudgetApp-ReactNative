import { ADD_AMOUNT_TO_SUBCATEGORY, SET_CATEGORIES_DATA, SET_SUBCATEGORIES_DATA } from "./BudgetAction";

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
                name: action.data.subcategory,
                amount: 0
              }
              ]
            }
            : cat
        ),
      };
    case ADD_AMOUNT_TO_SUBCATEGORY:
      return {
        ...state,
        categories: state.categories.map((category: any) =>
          category.id === action.data.categoryId
            ? {
              ...category,
              subcategories: category.subcategories.map((subcategory: any) =>
                subcategory.id === action.data.subcategoryId
                  ? {
                    ...subcategory,
                    amount: (subcategory.amount || 0) + action.data.amount
                  } : subcategory)
            } : category
        )
      }
    default:
      return state;
  }
};
