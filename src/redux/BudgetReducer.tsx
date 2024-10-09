import { ADD_AMOUNT_TO_SUBCATEGORY, ADD_ITEM, DELETE_ITEM, SET_CATEGORIES_DATA, SET_SUBCATEGORIES_DATA, UPDATE_ITEM } from "./BudgetAction";

const initialState: any = {
  categories: [],
  items: [],
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
      // console.log('Action   ---->', action)
      return {
        ...state,
        categories: state.categories.map((category: any) =>
          category.id === action.data.category
            ? {
              ...category,
              subcategories: category.subcategories.map((subcategory: any) =>
                subcategory.id === action.data.subcategory
                  ? {
                    ...subcategory,
                    amount: subcategory.amount + action.data.amount
                  } : subcategory)
            } : category
        )
      }
    case ADD_ITEM:
      // console.log('Action   ---->', action)
      return {
        ...state,
        items: [...state.items, action.data],
      };
    case DELETE_ITEM:
      // console.log('Action   ---->', action)
      return {
        ...state,
        items: state.items.filter((item: any) => item.id !== action.data),
      };
    case UPDATE_ITEM:
      console.log('Action   ---->', action)
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.data.id ? action.data : item
        )
      }
    default:
      return state;
  }
};
