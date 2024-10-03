import { put, takeEvery } from "redux-saga/effects";
import { ADD_CATEGORY, ADD_SUBCATEGORY, SET_CATEGORIES_DATA, SET_SUBCATEGORIES_DATA } from "./BudgetAction";

function* categoryList(action: any) {
    yield put({ type: SET_CATEGORIES_DATA, data: action.data});
    // console.log('Saga ----> ', action);
}
  
function* subcategoryList(action: any) {
    yield put({
        type: SET_SUBCATEGORIES_DATA,
        data: { 
            id: action.data.id, 
            subcategory: action.data.subcategory, 
            category: action.data.category 
        },
    });
}

function* budgetSaga() {
    yield takeEvery(ADD_CATEGORY, categoryList)
    yield takeEvery(ADD_SUBCATEGORY, subcategoryList);
}

export default budgetSaga;