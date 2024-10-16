export const ADD_CATEGORY = "add_category";
export const SET_CATEGORIES_DATA = "set_categories_data";
export const ADD_SUBCATEGORY = "add_subcategory";
export const SET_SUBCATEGORIES_DATA = "set_subcategories_data";

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