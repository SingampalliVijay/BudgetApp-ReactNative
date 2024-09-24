import { put, takeEvery } from "redux-saga/effects";
import {  ADD_CATEGORY, ADD_SUBCATEGORY, SET_CATEGORIES_DATA, SET_SUBCATEGORIES_DATA } from "./BudgetAction";

function* categoryList(action: any) {
    yield put({ type: SET_CATEGORIES_DATA, data: { category: action.category } });
    // console.log('Saga ----> ', action.category);
}

function* subcategoryList(action: any) {
    yield put({ type: SET_SUBCATEGORIES_DATA, data: { subcategory: action.subcategory } });
    // console.log('Saga ----> ', action.subcategory);
  }

function* budgetSaga() {
    yield takeEvery(ADD_CATEGORY, categoryList)
    yield takeEvery(ADD_SUBCATEGORY, subcategoryList);  
}

export default budgetSaga;