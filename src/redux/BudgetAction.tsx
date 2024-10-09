export const ADD_CATEGORY = "add_category";
export const SET_CATEGORIES_DATA = "set_categories_data";
export const ADD_SUBCATEGORY = "add_subcategory";
export const SET_SUBCATEGORIES_DATA = "set_subcategories_data";
export const ADD_AMOUNT_TO_SUBCATEGORY = "add_amount_to_subcategory";
export const ADD_ITEM = "add_item";
export const UPDATE_ITEM ='update_item'
export const DELETE_ITEM='delete_item'

export const addCategory = (id: number, category: string) => ({
  type: ADD_CATEGORY,
  data: {
    id,
    category,
  }
});

export const addSubcategory = (id: number, subcategory: string, category: string) => ({
  type: ADD_SUBCATEGORY,
  data: {
    id,
    subcategory,
    category,
  }
});

export const addAmountToSubcategory = (category: string, subcategory: string, amount: number) => ({
  type: ADD_AMOUNT_TO_SUBCATEGORY,
  data: {
    category,
    subcategory,
    amount,
  }
});

export const addItem = (id: number, category: string, subcategory: string, amount: number,
   date: string, notes: string, paymentMode: string) => ({
  type: ADD_ITEM,
  data: {
    id,
    category,
    subcategory,
    amount,
    date,
    notes,
    paymentMode
  }
});

export const updateItem = (updatedItem: any) => ({
  type:UPDATE_ITEM,
  data: updatedItem,
});


export const deleteItem = (id: number) => {
  return {
    type: DELETE_ITEM,
    data: id,
  };
};